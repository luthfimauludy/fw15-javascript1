function nilaiRataRata() {
  const mtk = 80;
  const bahasaIndonesia = 90;
  const bahasaInggris = 86;
  const ipa = 69;

  // diisi diisi angka 0 atau zero value untuk pengecekkan apakah
  // nilai kosong atau tidak
  if (mtk === 0 && bahasaIndonesia === 0 && bahasaInggris === 0 && ipa === 0) {
    return console.log("Semua nilai harus diisi!");
  } else if (mtk === 0) {
    return console.log("Matematika harus diisi!");
  } else if (bahasaIndonesia === 0) {
    return console.log("Bahasa Indonesia harus diisi!");
  } else if (bahasaInggris === 0) {
    return console.log("Bahasa Inggris harus diisi!");
  } else if (ipa === 0) {
    return console.log("IPA harus diisi!");
  }

  const average = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;

  if (average >= 90) {
    console.log("Grade = A");
    console.log("Nilai Rata-rata: " + average);
  } else if (average >= 80) {
    console.log("Grade = B");
    console.log("Nilai Rata-rata: " + average);
  } else if (average >= 70) {
    console.log("Grade = C");
    console.log("Nilai Rata-rata: " + average);
  } else if (average >= 60) {
    console.log("Grade = D");
    console.log("Nilai Rata-rata: " + average);
  } else {
    console.log("Grade : E");
    console.log("Nilai Rata-rata: " + average);
  }
}
nilaiRataRata();
