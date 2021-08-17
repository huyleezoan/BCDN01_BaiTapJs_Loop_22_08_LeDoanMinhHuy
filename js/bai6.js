function TaoDiv() {
  var text = '';
  for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      text +=
        "<div style='background-color: red; color: white;text-align: center; font-size: 20px;' class='py-2'>Div chẵn</div>";
    } else {
      text +=
        "<div style='background-color: blue; color: white;text-align: center;    font-size: 20px;' class='py-2'>Div lẻ</div>";
    }
  }
  document.getElementById('txtBai6').innerHTML = text;
}
document.getElementById('btnBai6').onclick = TaoDiv;
