const input = "sinis";
let text = input.split(" ").join("").toLowerCase();
x = text.length - 1;

if (x >= 0) {
  let result = "";
  for (let a = x; a >= 0; a--) {
    result += text[a];
  }
  if (text.length <= 2) {
    console.log("Teks harus lebih dari 2 huruf!");
  } else if (text == result) {
    console.log("Palindrome");
  } else if (text != result) {
    console.log("Bukan palindrome");
  }
}
