// Bài 6:
/**
 * Mô hình 3 khối:
 * Khối 1:
 * Khối 2:
 * B1: Tạo thẻ div
 * Tạo biến khởi tạ từ 1 và cho lặp tới 100 và tằng biến bước nhảy lên 1 sau mỗi vòng lặp
 * nếu biến bước nhảy sau mỗi vòng lặp chia hết cho 2 thì nó in thẻ div chẵn với màu nền đỏ
 * ngược lại thì nó in thẻ div lẻ với màu nền màu xanh
 * B2: Hiển thị kết quả lên UI
 * Khối 3:
 * Hiển thị div chẵn, div lẻ
 */

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
