words = [
    "そういうことなんだよ",
    "やらなきゃいけないことを早く終わらせてやりたいことをやる",
    "もやもや、問題は全てアクションに起こす",
    "ヘイスト",
    "朝のスタートダッシュが全て",
    "その3分で何ができた？",
    "呼吸 -> 集中",
    "ルサンチマン",
    "30分後に何が終わっていればいい？",
    "今を全力 -> 明日が楽しい",
    "思考は明文化しろ",
    "肩甲骨を突き上げろ",
    "人に魚を与えればそれは一日の糧となる。しかし魚の釣り方を教えれば、それは一生の糧となる",
]
var word = words[Math.floor(Math.random() * words.length)];
document.getElementById('word')
    .innerHTML = word;
