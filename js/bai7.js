// Bài 7:
/**
 * Mô hình 3 khối:
 * Khối 1:
 * n
 * Khối 2:
 * B1: Tạo hàm kiểm tra có phải là số nguyên tố hay không với tham số là n
 * Nếu n< 2 thì trẳ về sai
 * ngược lại nếu n== 2 thì trả về đúng
 * ngược lại thì
 *      nếu n chia hết cho 2 thì trả về sai
 *      ngược lại thì
 *          Tạo biến khởi tạo từ 3 và nhỏ hơn bằng căn bậc 2 của n và tăng biến bước nhảy lên 2 sau mỗi vòng lặp vì lúc này chỉ còn toàn số lẻ
 *              nếu nó chia hết cho bất kì các số trong đoạn từ 3 đến căn bậc 2 của nó thì trả về sai
 * Cuối cùng nếu các trH ko xày ra thì trả về đúng
 * B2: In các số nguyên tố
 * Tạo biến khởi tạo từ 0 và lặp tới n với biến bước nhảy tăng lên 1 sau mỗi vòng lặp
 * nếu biến bước nhảy thỏa là số nguyên tố thì in ra
 * B3: hiện kết quả lên UI
 * Khối 3:
 * In ra các số nguyên tố
 */
function KiemTraSoNgTo(n) {
  if (n < 2) {
    return false;
  } else if (n == 2) {
    return true;
  } else {
    if (n % 2 == 0) return false;
    else {
      for (var i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i == 0) return false;
      }
    }
  }
  return true;
}
function InCacSoNgToNhoHonN() {
  var n = parseInt(document.getElementById('inputNumN_7').value);
  var text = '';
  if (n < 0) {
    alert('Bạn đã nhập sai!');
    text = '';
  } else {
    if (n <= 1) {
      text = 'Không có số nguyên tố';
    } else {
      for (var i = 0; i <= n; i++) {
        if (KiemTraSoNgTo(i)) {
          text += i + ' ';
        }
      }
    }
  }
  document.getElementById('txtBai7').innerHTML = text;
}
document.getElementById('btnBai7').onclick = InCacSoNgToNhoHonN;
