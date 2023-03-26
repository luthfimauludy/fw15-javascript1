function palindrom(text) {
  let result = ""; // buat variable result untuk menyimpan hasil dari pengulangan
  // buat pengulangan jumlah teks dikurang 1, dan di simpan pada variable result
  for (let x = text.length - 1; x >= 0; x--) {
    result += text[x];
  }
  // buat pengkondisian apakah teks lebih dari 2 huruf, palindrome dan bukan palindrome
  if (text.length <= 2) {
    console.log("Teks harus lebih dari 2 huruf");
  } else if (result === text) {
    console.log("Palindrome");
  } else {
    console.log("Bukan Palindrome");
  }
}

palindrom("malam"); // panggil function
palindrom("katak");
palindrom("ubi");
palindrom("apa");
palindrom("al");
