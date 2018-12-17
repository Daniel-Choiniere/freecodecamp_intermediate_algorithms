function myReplace(str, before, after) {
  if (before[0].toUpperCase() === before[0]) {
    let afterCap = after[0].toUpperCase() + after.slice(1);
    let replaced = str.replace(before, afterCap);
    return replaced;
  } else {
    let replaced = str.replace(before, after);
    return replaced;
  }
}

myReplace("Let us get back to more Coding", "Coding", "algorithms");
