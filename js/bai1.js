// Bài 1:
/**
 * Mô hình 3 khối:
 * Khối 1:
 * Khối 2:
 * B1: In ra các số chẵn lẻ nhỏ hơn 100
 * Tạo 1 biến khởi tạo bằng 0 rồi bắt đầu từ nó cho lặp trong điều kiện chừng nòa còn nhỏ hơn 100 và biến bước nhảy tăng lên 1 sau mỗi vòng lặp, sau đó xét nếu số đó chia hết cho 2 thì in bên chẵn còn không chia hết cho 2 thì in bên lẻ
 * B2: Xuất kết quả bên chẵn bên lể lên UI
 * Khối 3:
 * Kết quả chẵn lẻ nhỏ hơn 100
 */

function InChanLeNhoHon100() {
  // C1: for
  var textChan = '';
  var textLe = '';
  //   for (var i = 0; i < 100; i++) {
  //     if (i % 2 == 0) textChan += i + ' ';
  //     else textLe += i + ' ';
  //   }
  //   c2: while
  var i = 0;
  while (i < 100) {
    if (i % 2 == 0) textChan += i + ' ';
    else textLe += i + ' ';
    i++;
  }
  document.getElementById('txtBai1').innerHTML =
    'Số chẵn: ' + textChan + '<br>Số lẻ: ' + textLe;
}
document.getElementById('btnBai1').onclick = InChanLeNhoHon100;
