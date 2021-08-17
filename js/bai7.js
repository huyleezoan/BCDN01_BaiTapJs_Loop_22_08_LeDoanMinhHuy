// Bài 7:
function KiemTraSoNgTo(n) {
  if (n < 2) {
    return false;
  } else if (n == 2) {
    return true;
  } else {
    if (n % 2 == 0) return false;
    for (var i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i == 0) return false;
    }
  }
  return true;
}
function InCacSoNgToNhoHonN() {
  var n = parseInt(document.getElementById('inputNumN_7').value);
  var text = '';
  for (var i = 0; i <= n; i++) {
    if (KiemTraSoNgTo(i)) {
      text += i + ' ';
    }
  }
  if (text == '') {
    alert('Không có số nguyên tố');
    document.getElementById('txtBai7').innerHTML = text;
  } else {
    document.getElementById('txtBai7').innerHTML =
      'Dãy các số nguyên tố la: ' + text;
  }
}
document.getElementById('btnBai7').onclick = InCacSoNgToNhoHonN;
