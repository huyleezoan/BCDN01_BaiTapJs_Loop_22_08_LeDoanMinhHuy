// Bài 2:
/**
 * Mô hình 3 khối:
 * Khối 1:
 * Khối 2:
 * B1: Tính các số chia hết cho 3 từu 0 đến 1000
 * Tạo 1 biến khởi tạo bằng 0 và lặp trong điều kiện nhỏ hơn 1000 và tằng biến bước nhảy lên 1 sau mỗi vòng lặp
 * Nếu mỗi lần lặp nó chia hết cho 3 thì đếm tăng lên 1
 * B2: Hiện kết quả lên UI
 * Khối 3:
 * Số các số chia hết cho 3 trong đoạn từ 0 đến 1000
 */

function TinhCacSoChiaHetCho3_Tu_0_Den_1000() {
  var dem = 0;
  // C1: for
  // for (var i = 0; i < 1000; i++) {
  //   if (i % 3 == 0) ++dem;
  // }
  // c2: while
  var i = 0;
  while (i < 1000) {
    if (i % 3 == 0) ++dem;
    i++;
  }
  document.getElementById('txtBai2').innerHTML =
    'Số chia hết cho 3 nhỏ hơn 1000 là: ' + dem + ' số';
}
document.getElementById('btnBai2').onclick = TinhCacSoChiaHetCho3_Tu_0_Den_1000;
