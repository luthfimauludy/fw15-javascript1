function vowel(text) {
  let result = ""; // buat variable result untuk menyimpan hasil dari pengulangan
  // buat pengkondisian tipe data teks string atau bukan
  if (typeof text !== "string") {
    console.log("Tipe data teks harus String!");
    return;
  }
  // buat pengulangan jumlah teks yang mempunyai huruf a akan diganti dengan huruf o
  for (let x = 0; x < text.length; x++) {
    if (text[x] == "a") {
      result += "o";
    } else {
      result += text[x];
    }
  }
  console.log(result);
}

vowel("jakarta"); // panggil function
vowel(false);
