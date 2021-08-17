// Bài 3:
/**
 * Mô hình 3 khối:
 * Khối 1:
 * Khối 2:
 * B1: Tạo biến khởi tạo từ 1 và cho bước nhảy tằng lên 1 sau mỗi vòng lặp với điều kiện vòng lặp là tổng các bước nhảy sau mỗi vòng lặp nhỏ hơn 100000
 * B2: Hiển thị kết quả lên UI
 * Khối 3:
 * Hiển thị số nguyên dương nhỏ nhất
 */
function TimNgDuongNhoNhat() {
  var i = 0;
  var tong = 0;
  while (1) {
    tong += i;
    if (tong >= 10000) {
      break;
    }
    i++;
  }
  document.getElementById('txtBai3').innerHTML =
    'Số nguyên dương nhỏ nhất la: ' + i;
}
document.getElementById('btnBai3').onclick = TimNgDuongNhoNhat;
