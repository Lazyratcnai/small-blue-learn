#!/bin/bash
# 小蓝学 · 自动化测试脚本
# 用法: bash test.sh

cd /root/.openclaw/workspace/learning-app

echo "========== 小蓝学 测试报告 =========="
echo ""

# 1. 语法检查
echo "【1. 语法检查】"
node << 'NODEEOF'
var fs=require('fs');
var c=fs.readFileSync('index.html','utf8');
var m=c.match(/<script src="data.js"><\/script>\s*<script>([\s\S]*?)<\/script>\s*<\/body>/);
if(!m){console.log('NO_SCRIPT_FOUND');}
else{
  try{new (require('vm').Script)(m[1]);console.log('SYNTAX_OK');}
  catch(e){console.log('SYNTAX_ERROR:'+e.message);}
}
NODEEOF
R=$?
[ $R -eq 0 ] || echo "（node运行完成）"
echo ""

# 2. 文件完整性
echo "【2. 文件完整性】"
for f in index.html data.js; do
  if [ -f $f ]; then
    SZ=$(wc -c < $f)
    echo "✅ $f ($SZ bytes)"
  else
    echo "❌ $f 缺失"
  fi
done
echo ""

# 3. 词汇数据检查
echo "【3. 词汇数据检查】"
node << 'NODEEOF'
var fs=require('fs'),vm=require('vm');
var c=fs.readFileSync('data.js','utf8');
var ctx={VOCABULARY:[],CATEGORIES:[],console:{log:function(){}}};
try{
  vm.createContext(ctx);
  vm.runInContext(c,ctx);
  var V=ctx.VOCABULARY;
  console.log('词汇量: '+V.length+' 词, '+ctx.CATEGORIES.length+' 分类');
  var bad=V.filter(function(w){return !w.word||!w.chinese||!w.sentence||!w.phonetic;});
  if(bad.length) console.log('❌ 有字段缺失的词: '+bad.length+' 个');
  else console.log('✅ 所有词字段完整');
}catch(e){console.log('❌ 加载错误: '+e.message);}
NODEEOF
echo ""

# 4. 关键函数存在性检查
echo "【4. 关键函数检查】"
FUNCS="resize load save speak draw loop update openQuiz renderQuiz doAnswer makeChoices stationDone canvasXY jumpStation"
for f in $FUNCS; do
  if grep -q "function $f\|var $f\|const $f\|let $f" index.html; then
    echo "✅ $f"
  else
    echo "❌ $f 缺失"
  fi
done
echo ""

# 5. 可访问性测试
echo "【5. 页面可访问性】"
STATUS=$(curl -s -o /dev/null -w "%{http_code}" --max-time 5 https://dc6319252c1c410a-175-24-47-130.serveousercontent.com/ 2>/dev/null)
if [ "$STATUS" = "200" ]; then
  echo "✅ 页面可访问 (HTTP $STATUS)"
else
  echo "❌ 页面访问失败 (HTTP $STATUS)"
fi
echo ""

# 6. localStorage key 一致性
echo "【6. localStorage key 检查】"
WRITE_KEY=$(grep -o "localStorage\.setItem('[^']*'" index.html | head -1 | sed "s/localStorage\.setItem('//;s/'$//")
READ_KEY=$(grep -o "localStorage\.getItem('[^']*'" index.html | head -1 | sed "s/localStorage\.getItem('//;s/'$//")
echo "写入: $WRITE_KEY | 读取: $READ_KEY"
if [ "$WRITE_KEY" = "$READ_KEY" ]; then
  echo "✅ 读写key一致"
else
  echo "❌ 读写key不一致！"
fi
echo ""

echo "========== 测试完成 =========="
