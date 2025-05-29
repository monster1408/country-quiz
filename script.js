const countries = [
  "日本", "韓国", "中国", "ドイツ", "フランス", "イギリス",
  "スペイン", "アメリカ", "カナダ", "メキシコ",
  "ロシア", "モンゴル", "フィリピン", "南アフリカ",
  "ネパール","スイス","ブラジル","ルクセンブルク","デンマーク"
];

function randomimage() {
  const random = Math.floor(Math.random() * countries.length);
  const selectedCountry = countries[random];

  // 国旗画像ファイル名（例: 日本.png）をセット
  document.getElementById("flag").src = "flags/" + selectedCountry + ".png";

  // ボタンを非表示にする
  document.getElementById("start").style.display = "none";
}
