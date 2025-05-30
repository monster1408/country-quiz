const countries = [
  "日本", "韓国", "中国", "ドイツ", "フランス", "イギリス",
  "スペイン", "アメリカ", "カナダ", "メキシコ",
  "ロシア", "モンゴル", "フィリピン", "南アフリカ",
  "ネパール","スイス","ブラジル","ルクセンブルク","デンマーク"
];
document.getElementById(ans).style.display = "none";


function randomimage() {
  random = Math.floor(Math.random() * countries.length);
  selectedCountry = countries[random];

  // 国旗画像ファイル名（例: 日本.png）をセット
  document.getElementById("flag").src = selectedCountry + ".png";

  // ボタンを非表示にする
  document.getElementById("start").style.display = "none";
  
  //ボタンを表示する
  document.getElementById(ans).style.display = "block";
}

function ans(){
    if(document.getElementById("answer").value == selectedCountry){
      document.write("正解");
    } else {
      document.write("不正解");
    }
    
}
