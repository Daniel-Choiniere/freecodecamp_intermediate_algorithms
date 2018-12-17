function convertHTML(str) {
  // &colon;&rpar;

  let replacedStr = str.replace("&", "&amp;").replace(/</g, "&lt;").replace(">", "&gt;").replace(/"/g, "&quot;").replace("'", "&apos;");
  return replacedStr;
}

console.log(convertHTML("Dolce & Gabbana"));