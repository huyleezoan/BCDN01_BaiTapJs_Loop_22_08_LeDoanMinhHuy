// Bài 5:
/**
 * Mô hình 3 khối:
 * Khối 1:
 * n
 * Khối 2:
 * B1: Tạo biến và lấy giá trị từ form
 * B2: Tính giai thừa
 * nếu n<0 thì in bạn nhập sai
 * nếu n>=0 thì:
 *      nếu n==0 hoặc n==1 thì giaThua == 1
 *      ngược lại thì
 *          tạo biến khởi tọa bằng 2 chạy tới n và  tăng biến bước nhay lên 1 rồi tính giaiThua
 * B3: Hiện kết quả lên UI
 * Khối 3:
 * Tính giai thừa
 */
function TinhGiaiThua() {
  var n = parseFloat(document.getElementById('inputNumN_5').value);
  var giaiThua = 1;
  var text = '';
  if (n < 0) {
    alert('Bạn đã nhập sai!');
    text = '';
  } else {
    if (n == 0 || n == 1) giaiThua = 1;
    else {
      for (var i = 2; i <= n; i++) {
        giaiThua *= i;
      }
    }
    text = n + '! = ' + giaiThua;
  }
  document.getElementById('txtBai5').innerHTML = text;
}
document.getElementById('btnBai5').onclick = TinhGiaiThua;
