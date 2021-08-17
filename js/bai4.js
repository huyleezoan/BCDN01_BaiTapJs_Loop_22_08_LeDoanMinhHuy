// Bài 3:
/**
 * Khối 1:
 * x,n
 * Khối 2:
 * B1: Tạo biến và lấy giá trị từ form
 * B2: x= 4;n= 3
 * S = 4 + 4^2 + 4^3
 * B2: Tạo 1 hàm tính số mũ theo n:
 * #Hàm tính số mũ theo n với 2 tham số truyền vào là giá trị x và số mũ n
 * Vd n = 3, x 4=  thì tính 4^3
 * B3: Tính tổng S
 * Tạo 1 biến khởi tạo từ 1 cho lặp tới n và biến bước nhảy tăng lên 1 sau mỗi vòng lặp
 * Sau đó tính tổng S = hamTinhMu(x,bienBuocNhay);
 * B4: hiện kết quả UI
 * Khối 3:
 * Tính tổng S
 */

function Tinh_X_Mu_N(x, n) {
  var xMuN = 1;
  for (var i = 1; i <= n; i++) {
    xMuN *= x;
  }
  return xMuN;
}
function TinhTongS() {
  var x = parseFloat(document.getElementById('inputNumX').value);
  var n = parseInt(document.getElementById('inputNumN').value);
  var tongS = 0;
  for (var i = 1; i <= n; i++) {
    tongS += Tinh_X_Mu_N(x, i);
  }
  document.getElementById('txtBai4').innerHTML = 'Tổng là: ' + tongS;
}
document.getElementById('btnBai4').onclick = TinhTongS;
