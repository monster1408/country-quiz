country = ["日本","韓国","中国","ドイツ","フランス","イギリス","スペイン","アメリカ","カナダ","メキシコ","ロシア","モンゴル","フィリピン","南アフリカ"]

flag = document.getElementById("flag").src;

answer = document.getElementById("answer").value;

function randomimage(){
  var random = Math.floor( Math.random() * items.length );
  flag = country[random]+".png";
  document.getElementById("start").style.display = "none";
}
