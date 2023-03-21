function replaceText(text, replacement) {
  const vowels = ["a", "i", "u", "e", "o"];
  let result = "";

  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) {
      result += replacement;
    } else {
      result += text[i];
    }
  }

  return result;
}

console.log(replaceText("jakarta", "o"));
