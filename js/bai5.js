// Bài 5:
/**
 * Mô hình 3 khối
 */
function TinhGiaiThua() {
  var n = parseFloat(document.getElementById('inputNumN_5').value);
  var giaiThua = 1;
  if (n == 0 || n == 1) giaiThua = 1;
  for (var i = 2; i <= n; i++) {
    giaiThua *= i;
  }
  document.getElementById('txtBai5').innerHTML = n + '! = ' + giaiThua;
}
document.getElementById('btnBai5').onclick = TinhGiaiThua;
