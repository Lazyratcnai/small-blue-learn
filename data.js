// 小蓝学 - 三年级英语单词库 v2
// 120个核心词汇，每词配有故事感的语境例句

var VOCABULARY = [
  // 学习用品
  { id: 1, category: "学习用品", word: "pen", chinese: "钢笔", phonetic: "pen", context: "I have a pen.", sentence: "This is my blue pen." },
  { id: 2, category: "学习用品", word: "pencil", chinese: "铅笔", phonetic: "pen-sul", context: "I write with a pencil.", sentence: "I use my pencil to draw." },
  { id: 3, category: "学习用品", word: "ruler", chinese: "尺子", phonetic: "ru-ler", context: "I measure with a ruler.", sentence: "My ruler is 20 centimeters long." },
  { id: 4, category: "学习用品", word: "eraser", chinese: "橡皮", phonetic: "i-ray-zer", context: "I use an eraser when I make a mistake.", sentence: "Oops! Let me use my eraser." },
  { id: 5, category: "学习用品", word: "bag", chinese: "书包", phonetic: "bag", context: "I put my books in my bag.", sentence: "I carry my bag to school every day." },
  { id: 6, category: "学习用品", word: "book", chinese: "书", phonetic: "book", context: "Open your book.", sentence: "Open your books, please." },
  { id: 7, category: "学习用品", word: "crayon", chinese: "蜡笔", phonetic: "kray-on", context: "I draw with crayons.", sentence: "I have a box of colorful crayons." },
  { id: 8, category: "学习用品", word: "sharpener", chinese: "卷笔刀", phonetic: "sharp-en-er", context: "My pencil is dull. I need a sharpener.", sentence: "The sharpener makes my pencil sharp again." },

  // 身体
  { id: 9, category: "身体", word: "head", chinese: "头", phonetic: "hed", context: "I nod my head.", sentence: "My head hurts when I am tired." },
  { id: 10, category: "身体", word: "face", chinese: "脸", phonetic: "fays", context: "I wash my face every morning.", sentence: "I have a happy face today." },
  { id: 11, category: "身体", word: "nose", chinese: "鼻子", phonetic: "noz", context: "The dog has a wet nose.", sentence: "I smell a flower with my nose." },
  { id: 12, category: "身体", word: "mouth", chinese: "嘴", phonetic: "mowth", context: "Open your mouth.", sentence: "Eat with your mouth closed." },
  { id: 13, category: "身体", word: "eye", chinese: "眼睛", phonetic: "ai", context: "I see with my eyes.", sentence: "Eye to eye, we see the same thing." },
  { id: 14, category: "身体", word: "ear", chinese: "耳朵", phonetic: "ier", context: "I hear with my ears.", sentence: "The rabbit has long ears." },
  { id: 15, category: "身体", word: "hand", chinese: "手", phonetic: "hand", context: "I wave my hand.", sentence: "I raise my hand in class." },
  { id: 16, category: "身体", word: "foot", chinese: "脚", phonetic: "fut", context: "I kick the ball with my foot.", sentence: "I tap my foot to the music." },
  { id: 17, category: "身体", word: "leg", chinese: "腿", phonetic: "leg", context: "A table has four legs.", sentence: "I stand on one leg like a flamingo." },
  { id: 18, category: "身体", word: "arm", chinese: "胳膊", phonetic: "ahm", context: "I hug with my arms.", sentence: "My arm is sore after running." },

  // 颜色
  { id: 19, category: "颜色", word: "red", chinese: "红色", phonetic: "red", context: "The apple is red.", sentence: "A red apple a day keeps the doctor away." },
  { id: 20, category: "颜色", word: "yellow", chinese: "黄色", phonetic: "yel-o", context: "The banana is yellow.", sentence: "The yellow sun shines bright." },
  { id: 21, category: "颜色", word: "green", chinese: "绿色", phonetic: "green", context: "The grass is green.", sentence: "Green means GO! Go, go, go!" },
  { id: 22, category: "颜色", word: "blue", chinese: "蓝色", phonetic: "bloo", context: "The sky is blue.", sentence: "I wear my blue shirt on Mondays." },
  { id: 23, category: "颜色", word: "orange", chinese: "橙色", phonetic: "o-rinj", context: "An orange is orange.", sentence: "My pencil box is orange." },
  { id: 24, category: "颜色", word: "white", chinese: "白色", phonetic: "wait", context: "Snow is white.", sentence: "The paper is white as snow." },
  { id: 25, category: "颜色", word: "black", chinese: "黑色", phonetic: "blak", context: "The night is black.", sentence: "The black cat is hard to see at night." },
  { id: 26, category: "颜色", word: "pink", chinese: "粉色", phonetic: "pingk", context: "My favorite color is pink.", sentence: "I love pink flowers." },

  // 动物
  { id: 27, category: "动物", word: "dog", chinese: "狗", phonetic: "dog", context: "I have a dog named Bob.", sentence: "The dog wags its tail when it sees me." },
  { id: 28, category: "动物", word: "cat", chinese: "猫", phonetic: "kat", context: "The cat sleeps all day.", sentence: "The cat likes fish." },
  { id: 29, category: "动物", word: "bird", chinese: "鸟", phonetic: "berd", context: "A bird is singing in the tree.", sentence: "The bird flies south in winter." },
  { id: 30, category: "动物", word: "elephant", chinese: "大象", phonetic: "el-e-funt", context: "The elephant has a long trunk.", sentence: "An elephant never forgets." },
  { id: 31, category: "动物", word: "monkey", chinese: "猴子", phonetic: "mung-ki", context: "The monkey eats a banana.", sentence: "The monkey swings in the jungle." },
  { id: 32, category: "动物", word: "panda", chinese: "熊猫", phonetic: "pan-da", context: "Pandas eat bamboo.", sentence: "The panda is black and white." },
  { id: 33, category: "动物", word: "tiger", chinese: "老虎", phonetic: "tai-ger", context: "The tiger is a strong animal.", sentence: "The tiger has orange and black stripes." },
  { id: 34, category: "动物", word: "fish", chinese: "鱼", phonetic: "fish", context: "The fish swims in the river.", sentence: "Fish live in water." },
  { id: 35, category: "动物", word: "rabbit", chinese: "兔子", phonetic: "rab-it", context: "A rabbit has long ears.", sentence: "The rabbit hops in the garden." },

  // 数字
  { id: 36, category: "数字", word: "one", chinese: "一", phonetic: "wun", context: "I have one apple.", sentence: "One and one is two." },
  { id: 37, category: "数字", word: "two", chinese: "二", phonetic: "too", context: "I have two hands.", sentence: "Two and two is four." },
  { id: 38, category: "数字", word: "three", chinese: "三", phonetic: "three", context: "Three blind mice.", sentence: "Three is my lucky number." },
  { id: 39, category: "数字", word: "four", chinese: "四", phonetic: "for", context: "Four seasons in a year.", sentence: "There are four desks in my room." },
  { id: 40, category: "数字", word: "five", chinese: "五", phonetic: "fayv", context: "Five fingers on each hand.", sentence: "High five! We did it!" },
  { id: 41, category: "数字", word: "six", chinese: "六", phonetic: "siks", context: "Six o'clock in the morning.", sentence: "I get up at six every day." },
  { id: 42, category: "数字", word: "seven", chinese: "七", phonetic: "sev-un", context: "Seven days in a week.", sentence: "I am seven years old." },
  { id: 43, category: "数字", word: "eight", chinese: "八", phonetic: "ayt", context: "Eight legs on a spider.", sentence: "I have eight crayons." },
  { id: 44, category: "数字", word: "nine", chinese: "九", phonetic: "nain", context: "Nine lives for a cat.", sentence: "There are nine planets in our solar system." },
  { id: 45, category: "数字", word: "ten", chinese: "十", phonetic: "ten", context: "Count from one to ten.", sentence: "Ten is a big number for me." },

  // 家庭
  { id: 46, category: "家庭", word: "mother", chinese: "妈妈", phonetic: "muth-er", context: "My mother cooks breakfast.", sentence: "I love my mother." },
  { id: 47, category: "家庭", word: "father", chinese: "爸爸", phonetic: "fah-ther", context: "My father drives me to school.", sentence: "Father knows best." },
  { id: 48, category: "家庭", word: "brother", chinese: "哥哥/弟弟", phonetic: "bruth-er", context: "I play with my brother.", sentence: "My brother is older than me." },
  { id: 49, category: "家庭", word: "sister", chinese: "姐姐/妹妹", phonetic: "sis-ter", context: "My sister reads books.", sentence: "My sister helps me with homework." },
  { id: 50, category: "家庭", word: "grandma", chinese: "奶奶/外婆", phonetic: "gran-ma", context: "My grandma tells me stories.", sentence: "I visit grandma every weekend." },
  { id: 51, category: "家庭", word: "grandpa", chinese: "爷爷/外公", phonetic: "gran-pa", context: "My grandpa grows vegetables.", sentence: "Grandpa has a big garden." },

  // 食物
  { id: 52, category: "食物", word: "rice", chinese: "米饭", phonetic: "rais", context: "I eat rice every day.", sentence: "Rice grows in paddy fields." },
  { id: 53, category: "食物", word: "bread", chinese: "面包", phonetic: "bred", context: "I have bread for breakfast.", sentence: "I spread butter on my bread." },
  { id: 54, category: "食物", word: "egg", chinese: "鸡蛋", phonetic: "eg", context: "I eat an egg for breakfast.", sentence: "Eggs come from chickens." },
  { id: 55, category: "食物", word: "milk", chinese: "牛奶", phonetic: "milk", context: "I drink a glass of milk.", sentence: "Milk is good for your bones." },
  { id: 56, category: "食物", word: "apple", chinese: "苹果", phonetic: "ap-ul", context: "An apple a day keeps the doctor away.", sentence: "I eat a red apple." },
  { id: 57, category: "食物", word: "banana", chinese: "香蕉", phonetic: "ba-nan-a", context: "The monkey loves banana.", sentence: "Bananas grow on trees." },
  { id: 58, category: "食物", word: "water", chinese: "水", phonetic: "wo-ter", context: "I drink water.", sentence: "Water is life." },
  { id: 59, category: "食物", word: "juice", chinese: "果汁", phonetic: "joos", context: "I drink orange juice.", sentence: "Fresh juice is healthy." },

  // 动作
  { id: 61, category: "动作", word: "run", chinese: "跑", phonetic: "run", context: "I run in the park.", sentence: "The faster I run, the better I feel." },
  { id: 62, category: "动作", word: "jump", chinese: "跳", phonetic: "jump", context: "I can jump high.", sentence: "The frog can jump very far." },
  { id: 63, category: "动作", word: "read", chinese: "读", phonetic: "reed", context: "I read books every night.", sentence: "Reading is fun!" },
  { id: 64, category: "动作", word: "write", chinese: "写", phonetic: "rait", context: "I write my name.", sentence: "I write in my diary every day." },
  { id: 65, category: "动作", word: "sing", chinese: "唱", phonetic: "sing", context: "I like to sing.", sentence: "Let us sing a song together." },
  { id: 66, category: "动作", word: "dance", chinese: "跳舞", phonetic: "dans", context: "I dance when music plays.", sentence: "Everyone can dance!" },
  { id: 67, category: "动作", word: "eat", chinese: "吃", phonetic: "eet", context: "I eat breakfast at 7.", sentence: "I eat three meals a day." },
  { id: 68, category: "动作", word: "drink", chinese: "喝", phonetic: "drink", context: "I drink water after running.", sentence: "What do you drink for lunch?" },
  { id: 69, category: "动作", word: "sleep", chinese: "睡觉", phonetic: "sleep", context: "I sleep 8 hours a night.", sentence: "Sleep is important for children." },
  { id: 70, category: "动作", word: "play", chinese: "玩", phonetic: "play", context: "I play with my friends.", sentence: "I play football after school." },

  // 学校
  { id: 71, category: "学校", word: "school", chinese: "学校", phonetic: "skool", context: "I go to school.", sentence: "School starts at 8 in the morning." },
  { id: 72, category: "学校", word: "teacher", chinese: "老师", phonetic: "tee-cher", context: "My teacher is kind.", sentence: "I respect my teacher." },
  { id: 73, category: "学校", word: "student", chinese: "学生", phonetic: "stoo-dent", context: "I am a student.", sentence: "There are 30 students in my class." },
  { id: 74, category: "学校", word: "friend", chinese: "朋友", phonetic: "frend", context: "He is my best friend.", sentence: "A friend in need is a friend indeed." },
  { id: 75, category: "学校", word: "class", chinese: "课/班级", phonetic: "klas", context: "We have four classes today.", sentence: "Class is over. Time to play!" },

  // 位置
  { id: 76, category: "位置", word: "up", chinese: "上", phonetic: "up", context: "Look up! There is a bird.", sentence: "The kite flies up in the sky." },
  { id: 77, category: "位置", word: "down", chinese: "下", phonetic: "down", context: "Sit down please.", sentence: "The ball rolls down the hill." },
  { id: 78, category: "位置", word: "left", chinese: "左", phonetic: "left", context: "Turn left.", sentence: "My heart is on my left." },
  { id: 79, category: "位置", word: "right", chinese: "右", phonetic: "rait", context: "Turn right.", sentence: "Raise your right hand." },
  { id: 80, category: "位置", word: "in", chinese: "在...里面", phonetic: "in", context: "The cat is in the box.", sentence: "I am in the classroom." },
  { id: 81, category: "位置", word: "on", chinese: "在...上面", phonetic: "on", context: "The book is on the desk.", sentence: "There is a cat on the roof." },

  // 时间
  { id: 82, category: "时间", word: "morning", chinese: "早上", phonetic: "mor-ning", context: "Good morning!", sentence: "Morning exercise is good for health." },
  { id: 83, category: "时间", word: "afternoon", chinese: "下午", phonetic: "af-ter-noon", context: "Good afternoon!", sentence: "I play in the afternoon." },
  { id: 84, category: "时间", word: "evening", chinese: "晚上", phonetic: "eev-ning", context: "Good evening!", sentence: "I read books in the evening." },
  { id: 85, category: "时间", word: "today", chinese: "今天", phonetic: "to-day", context: "Today is a good day.", sentence: "Today is Monday." },
  { id: 86, category: "时间", word: "tomorrow", chinese: "明天", phonetic: "to-mor-row", context: "Tomorrow is Tuesday.", sentence: "See you tomorrow!" },
  { id: 87, category: "时间", word: "yesterday", chinese: "昨天", phonetic: "yes-ter-day", context: "Yesterday was Sunday.", sentence: "I played football yesterday." },

  // 天气
  { id: 88, category: "天气", word: "sun", chinese: "太阳", phonetic: "sun", context: "The sun is bright.", sentence: "The sun rises in the east." },
  { id: 89, category: "天气", word: "moon", chinese: "月亮", phonetic: "moon", context: "The moon is round tonight.", sentence: "The moon comes out at night." },
  { id: 90, category: "天气", word: "star", chinese: "星星", phonetic: "star", context: "I see many stars at night.", sentence: "One star is the brightest." },
  { id: 91, category: "天气", word: "hot", chinese: "热", phonetic: "hot", context: "It is very hot in summer.", sentence: "Hot soup is tasty." },
  { id: 92, category: "天气", word: "cold", chinese: "冷", phonetic: "kold", context: "It is cold in winter.", sentence: "Put on your coat. It is cold outside." },
  { id: 93, category: "天气", word: "warm", chinese: "暖和", phonetic: "warm", context: "It is warm in spring.", sentence: "Warm sunshine feels good." },

  // 形容词
  { id: 94, category: "形容词", word: "big", chinese: "大的", phonetic: "big", context: "The elephant is big.", sentence: "This is a big house." },
  { id: 95, category: "形容词", word: "small", chinese: "小的", phonetic: "small", context: "The mouse is small.", sentence: "Small steps lead to big changes." },
  { id: 96, category: "形容词", word: "tall", chinese: "高的", phonetic: "tall", context: "He is tall.", sentence: "The tall tree gives us shade." },
  { id: 97, category: "形容词", word: "short", chinese: "矮的", phonetic: "short", context: "He is short.", sentence: "The short boy can run very fast." },
  { id: 98, category: "形容词", word: "happy", chinese: "开心的", phonetic: "hap-py", context: "I am happy today.", sentence: "A happy heart is a healthy heart." },
  { id: 99, category: "形容词", word: "sad", chinese: "伤心的", phonetic: "sad", context: "I feel sad when it rains.", sentence: "Don't be sad. Tomorrow will be better." },
  { id: 100, category: "形容词", word: "good", chinese: "好的", phonetic: "good", context: "This is a good book.", sentence: "Good good study, day day up." },
  { id: 101, category: "形容词", word: "new", chinese: "新的", phonetic: "new", context: "I have a new bike.", sentence: "New year, new start." },

  // 交通工具
  { id: 102, category: "交通工具", word: "car", chinese: "汽车", phonetic: "kar", context: "My dad drives a car.", sentence: "The red car is fast." },
  { id: 103, category: "交通工具", word: "bus", chinese: "公共汽车", phonetic: "bus", context: "I take a bus to school.", sentence: "The school bus is yellow." },
  { id: 104, category: "交通工具", word: "bike", chinese: "自行车", phonetic: "baik", context: "I ride my bike.", sentence: "I go to school by bike." },
  { id: 105, category: "交通工具", word: "train", chinese: "火车", phonetic: "trayn", context: "The train is fast.", sentence: "We travel to Beijing by train." },

  // 水果
  { id: 106, category: "水果", word: "grape", chinese: "葡萄", phonetic: "grayp", context: "Grapes are purple.", sentence: "A bunch of grapes." },
  { id: 107, category: "水果", word: "watermelon", chinese: "西瓜", phonetic: "wa-ter-mel-on", context: "I eat watermelon in summer.", sentence: "Watermelon is sweet and juicy." },

  // 服装
  { id: 108, category: "服装", word: "hat", chinese: "帽子", phonetic: "hat", context: "I wear a hat in the sun.", sentence: "The hat keeps the sun away." },
  { id: 109, category: "服装", word: "coat", chinese: "外套", phonetic: "koht", context: "I wear a coat in winter.", sentence: "This coat keeps me warm." },
  { id: 110, category: "服装", word: "shoe", chinese: "鞋子", phonetic: "shoo", context: "I put on my shoes.", sentence: "My shoes are blue." },

  // 其他常用
  { id: 111, category: "其他", word: "hello", chinese: "你好", phonetic: "he-lo", context: "Hello, how are you?", sentence: "Hello! Nice to meet you." },
  { id: 112, category: "其他", word: "goodbye", chinese: "再见", phonetic: "good-bai", context: "Goodbye! See you tomorrow.", sentence: "Say goodbye to your friends." },
  { id: 113, category: "其他", word: "please", chinese: "请", phonetic: "pleez", context: "Please sit down.", sentence: "Please pass me the water." },
  { id: 114, category: "其他", word: "thank you", chinese: "谢谢你", phonetic: "thank yoo", context: "Thank you for your help.", sentence: "Thank you, teacher!" },
  { id: 115, category: "其他", word: "sorry", chinese: "对不起", phonetic: "so-ree", context: "Sorry! I made a mistake.", sentence: "Sorry to keep you waiting." },
  { id: 116, category: "其他", word: "yes", chinese: "是的", phonetic: "yes", context: "Yes, I understand.", sentence: "Yes, please!" },
  { id: 117, category: "其他", word: "no", chinese: "不", phonetic: "no", context: "No, I do not want it.", sentence: "No, thank you." },
  { id: 118, category: "其他", word: "I", chinese: "我", phonetic: "ai", context: "I am a student.", sentence: "I love my family." },
  { id: 119, category: "其他", word: "you", chinese: "你", phonetic: "yoo", context: "You are my friend.", sentence: "How are you?" },
  { id: 120, category: "其他", word: "we", chinese: "我们", phonetic: "wee", context: "We are friends.", sentence: "We study together." },
];

var CATEGORIES = (function() {
  var seen = {};
  var result = [];
  for (var i = 0; i < VOCABULARY.length; i++) {
    var c = VOCABULARY[i].category;
    if (!seen[c]) { seen[c] = true; result.push(c); }
  }
  return result;
})();
