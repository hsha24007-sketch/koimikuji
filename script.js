const fortunes =[
        "大吉💖素敵な出会いがあるかも！",
        "中吉　少し勇気を出すとよいことが起きる",
        "小吉　今日はゆっくり過ごそう",
        "末吉　一度しっかり考えて行動するようにしよう",
        "凶　今日はゆっくり休んで明日頑張ろう"
];
const button = document.getElementById("omikuji-bt");
const result = document.getElementById("result");

button.addEventListener("click",function(){
        const randomNumber = Math.floor(Math.random() * fortunes.length);

        result.textContent  = fortunes [(randomNumber)];
});