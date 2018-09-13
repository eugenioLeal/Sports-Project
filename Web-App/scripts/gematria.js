//-------------------------//
//-- Gematria Functions  --//
//-------------------------//
function fullReduction(sentence) {
  var result = 0;
  for (var i = 0; i < sentence.length; i++) {
    if(sentence[i] === 'A' || sentence[i] === 'a' || sentence[i] === 'J' || sentence[i] === 'j' || sentence[i] === 'S' || sentence[i] === 's') {
      result += 1;
    } else if(sentence[i] === 'B' || sentence[i] === 'b' || sentence[i] === 'K' || sentence[i] === 'k' || sentence[i] === 'T' || sentence[i] === 't') {
      result += 2;
    } else if(sentence[i] === 'C' || sentence[i] === 'c' || sentence[i] === 'L' || sentence[i] === 'l' || sentence[i] === 'U' || sentence[i] === 'u') {
      result += 3;
    } else if(sentence[i] === 'D' || sentence[i] === 'd' || sentence[i] === 'M' || sentence[i] === 'm' || sentence[i] === 'V' || sentence[i] === 'v') {
      result += 4;
    } else if(sentence[i] === 'E' || sentence[i] === 'e' || sentence[i] === 'N' || sentence[i] === 'n' || sentence[i] === 'W' || sentence[i] === 'w') {
      result += 5;
    } else if(sentence[i] === 'F' || sentence[i] === 'f' || sentence[i] === 'O' || sentence[i] === 'o' || sentence[i] === 'X' || sentence[i] === 'x') {
      result += 6;
    } else if(sentence[i] === 'G' || sentence[i] === 'g' || sentence[i] === 'P' || sentence[i] === 'p' || sentence[i] === 'Y' || sentence[i] === 'y') {
      result += 7;
    } else if(sentence[i] === 'H' || sentence[i] === 'h' || sentence[i] === 'Q' || sentence[i] === 'q' || sentence[i] === 'Z' || sentence[i] === 'z') {
      result += 8;
    } else if(sentence[i] === 'I' || sentence[i] === 'i' || sentence[i] === 'R' || sentence[i] === 'r') {
      result += 9;
    }
  }
  return result;
}

function reverseFullReduction(sentence) {
  var result = 0;
  for (var i = 0; i < sentence.length; i++) {
    if(sentence[i] === 'A' || sentence[i] === 'a' || sentence[i] === 'J' || sentence[i] === 'j' || sentence[i] === 'S' || sentence[i] === 's') {
      result += 8;
    } else if(sentence[i] === 'B' || sentence[i] === 'b' || sentence[i] === 'K' || sentence[i] === 'k' || sentence[i] === 'T' || sentence[i] === 't') {
      result += 7;
    } else if(sentence[i] === 'C' || sentence[i] === 'c' || sentence[i] === 'L' || sentence[i] === 'l' || sentence[i] === 'U' || sentence[i] === 'u') {
      result += 6;
    } else if(sentence[i] === 'D' || sentence[i] === 'd' || sentence[i] === 'M' || sentence[i] === 'm' || sentence[i] === 'V' || sentence[i] === 'v') {
      result += 5;
    } else if(sentence[i] === 'E' || sentence[i] === 'e' || sentence[i] === 'N' || sentence[i] === 'n' || sentence[i] === 'W' || sentence[i] === 'w') {
      result += 4;
    } else if(sentence[i] === 'F' || sentence[i] === 'f' || sentence[i] === 'O' || sentence[i] === 'o' || sentence[i] === 'X' || sentence[i] === 'x') {
      result += 3;
    } else if(sentence[i] === 'G' || sentence[i] === 'g' || sentence[i] === 'P' || sentence[i] === 'p' || sentence[i] === 'Y' || sentence[i] === 'y') {
      result += 2;
    } else if(sentence[i] === 'H' || sentence[i] === 'h' || sentence[i] === 'Q' || sentence[i] === 'q' || sentence[i] === 'Z' || sentence[i] === 'z') {
      result += 1;
    } else if(sentence[i] === 'I' || sentence[i] === 'i' || sentence[i] === 'R' || sentence[i] === 'r') {
      result += 9;
    }
  }
  return result;
}

function englishOrdinal(sentence) {
  var result = 0;
  for (var i = 0; i < sentence.length; i++) {
    if(sentence[i] === 'A' || sentence[i] === 'a') {
      result += 1;
    } else if(sentence[i] === 'B' || sentence[i] === 'b') {
      result += 2;
    } else if(sentence[i] === 'C' || sentence[i] === 'c') {
      result += 3;
    } else if(sentence[i] === 'D' || sentence[i] === 'd') {
      result += 4;
    } else if(sentence[i] === 'E' || sentence[i] === 'e') {
      result += 5;
    } else if(sentence[i] === 'F' || sentence[i] === 'f') {
      result += 6;
    } else if(sentence[i] === 'G' || sentence[i] === 'g') {
      result += 7;
    } else if(sentence[i] === 'H' || sentence[i] === 'h') {
      result += 8;
    } else if(sentence[i] === 'I' || sentence[i] === 'i') {
      result += 9;
    } else if(sentence[i] === 'J' || sentence[i] === 'j') {
      result += 10;
    } else if(sentence[i] === 'K' || sentence[i] === 'k') {
      result += 11;
    } else if(sentence[i] === 'L' || sentence[i] === 'l') {
      result += 12;
    } else if(sentence[i] === 'M' || sentence[i] === 'm') {
      result += 13;
    } else if(sentence[i] === 'N' || sentence[i] === 'n') {
      result += 14;
    } else if(sentence[i] === 'O' || sentence[i] === 'o') {
      result += 15;
    } else if(sentence[i] === 'P' || sentence[i] === 'p') {
      result += 16;
    } else if(sentence[i] === 'Q' || sentence[i] === 'q') {
      result += 17;
    } else if(sentence[i] === 'R' || sentence[i] === 'r') {
      result += 18;
    } else if(sentence[i] === 'S' || sentence[i] === 's') {
      result += 19;
    } else if(sentence[i] === 'T' || sentence[i] === 't') {
      result += 20;
    } else if(sentence[i] === 'U' || sentence[i] === 'u') {
      result += 21;
    } else if(sentence[i] === 'V' || sentence[i] === 'v') {
      result += 22;
    } else if(sentence[i] === 'W' || sentence[i] === 'w') {
      result += 23;
    } else if(sentence[i] === 'X' || sentence[i] === 'x') {
      result += 24;
    } else if(sentence[i] === 'Y' || sentence[i] === 'y') {
      result += 25;
    } else if(sentence[i] === 'Z' || sentence[i] === 'z') {
      result += 26;
    }
  }
  return result;
}

function reverseOrdinal(sentence) {
  var result = 0;
  for (var i = 0; i < sentence.length; i++) {
    if(sentence[i] === 'A' || sentence[i] === 'a') {
      result += 26;
    } else if(sentence[i] === 'B' || sentence[i] === 'b') {
      result += 25;
    } else if(sentence[i] === 'C' || sentence[i] === 'c') {
      result += 24;
    } else if(sentence[i] === 'D' || sentence[i] === 'd') {
      result += 23;
    } else if(sentence[i] === 'E' || sentence[i] === 'e') {
      result += 22;
    } else if(sentence[i] === 'F' || sentence[i] === 'f') {
      result += 21;
    } else if(sentence[i] === 'G' || sentence[i] === 'g') {
      result += 20;
    } else if(sentence[i] === 'H' || sentence[i] === 'h') {
      result += 19;
    } else if(sentence[i] === 'I' || sentence[i] === 'i') {
      result += 18;
    } else if(sentence[i] === 'J' || sentence[i] === 'j') {
      result += 17;
    } else if(sentence[i] === 'K' || sentence[i] === 'k') {
      result += 16;
    } else if(sentence[i] === 'L' || sentence[i] === 'l') {
      result += 15;
    } else if(sentence[i] === 'M' || sentence[i] === 'm') {
      result += 14;
    } else if(sentence[i] === 'N' || sentence[i] === 'n') {
      result += 13;
    } else if(sentence[i] === 'O' || sentence[i] === 'o') {
      result += 12;
    } else if(sentence[i] === 'P' || sentence[i] === 'p') {
      result += 11;
    } else if(sentence[i] === 'Q' || sentence[i] === 'q') {
      result += 10;
    } else if(sentence[i] === 'R' || sentence[i] === 'r') {
      result += 9;
    } else if(sentence[i] === 'S' || sentence[i] === 's') {
      result += 8;
    } else if(sentence[i] === 'T' || sentence[i] === 't') {
      result += 7;
    } else if(sentence[i] === 'U' || sentence[i] === 'u') {
      result += 6;
    } else if(sentence[i] === 'V' || sentence[i] === 'v') {
      result += 5;
    } else if(sentence[i] === 'W' || sentence[i] === 'w') {
      result += 4;
    } else if(sentence[i] === 'X' || sentence[i] === 'x') {
      result += 3;
    } else if(sentence[i] === 'Y' || sentence[i] === 'y') {
      result += 2;
    } else if(sentence[i] === 'Z' || sentence[i] === 'z') {
      result += 1;
    }
  }
  return result;
}

function jewish(sentence) {
  var result = 0;
  for (var i = 0; i < sentence.length; i++) {
    if(sentence[i] === 'A' || sentence[i] === 'a') {
      result += 1;
    } else if(sentence[i] === 'B' || sentence[i] === 'b') {
      result += 2;
    } else if(sentence[i] === 'C' || sentence[i] === 'c') {
      result += 3;
    } else if(sentence[i] === 'D' || sentence[i] === 'd') {
      result += 4;
    } else if(sentence[i] === 'E' || sentence[i] === 'e') {
      result += 5;
    } else if(sentence[i] === 'F' || sentence[i] === 'f') {
      result += 6;
    } else if(sentence[i] === 'G' || sentence[i] === 'g') {
      result += 7;
    } else if(sentence[i] === 'H' || sentence[i] === 'h') {
      result += 8;
    } else if(sentence[i] === 'I' || sentence[i] === 'i') {
      result += 9;
    } else if(sentence[i] === 'K' || sentence[i] === 'k') {
      result += 10;
    } else if(sentence[i] === 'L' || sentence[i] === 'l') {
      result += 20;
    } else if(sentence[i] === 'M' || sentence[i] === 'm') {
      result += 30;
    } else if(sentence[i] === 'N' || sentence[i] === 'n') {
      result += 40;
    } else if(sentence[i] === 'O' || sentence[i] === 'o') {
      result += 50;
    } else if(sentence[i] === 'P' || sentence[i] === 'p') {
      result += 60;
    } else if(sentence[i] === 'Q' || sentence[i] === 'q') {
      result += 70;
    } else if(sentence[i] === 'R' || sentence[i] === 'r') {
      result += 80;
    } else if(sentence[i] === 'S' || sentence[i] === 's') {
      result += 90;
    } else if(sentence[i] === 'T' || sentence[i] === 't') {
      result += 100;
    } else if(sentence[i] === 'U' || sentence[i] === 'u') {
      result += 200;
    } else if(sentence[i] === 'X' || sentence[i] === 'x') {
      result += 300;
    } else if(sentence[i] === 'Y' || sentence[i] === 'y') {
      result += 400;
    } else if(sentence[i] === 'Z' || sentence[i] === 'z') {
      result += 500;
    } else if(sentence[i] === 'J' || sentence[i] === 'j') {
      result += 600;
    } else if(sentence[i] === 'V' || sentence[i] === 'v') {
      result += 700;
    } else if(sentence[i] === '&') {
      result += 800;
    } else if(sentence[i] === 'W' || sentence[i] === 'w') {
      result += 900;
    }
  }
  return result;
}

function jewishOrdinal(sentence) {
  var result = 0;
  for (var i = 0; i < sentence.length; i++) {
    if(sentence[i] === 'A' || sentence[i] === 'a') {
      result += 1;
    } else if(sentence[i] === 'B' || sentence[i] === 'b') {
      result += 2;
    } else if(sentence[i] === 'C' || sentence[i] === 'c') {
      result += 3;
    } else if(sentence[i] === 'D' || sentence[i] === 'd') {
      result += 4;
    } else if(sentence[i] === 'E' || sentence[i] === 'e') {
      result += 5;
    } else if(sentence[i] === 'F' || sentence[i] === 'f') {
      result += 6;
    } else if(sentence[i] === 'G' || sentence[i] === 'g') {
      result += 7;
    } else if(sentence[i] === 'H' || sentence[i] === 'h') {
      result += 8;
    } else if(sentence[i] === 'I' || sentence[i] === 'i') {
      result += 9;
    } else if(sentence[i] === 'K' || sentence[i] === 'k') {
      result += 10;
    } else if(sentence[i] === 'L' || sentence[i] === 'l') {
      result += 11;
    } else if(sentence[i] === 'M' || sentence[i] === 'm') {
      result += 12;
    } else if(sentence[i] === 'N' || sentence[i] === 'n') {
      result += 13;
    } else if(sentence[i] === 'O' || sentence[i] === 'o') {
      result += 14;
    } else if(sentence[i] === 'P' || sentence[i] === 'p') {
      result += 15;
    } else if(sentence[i] === 'Q' || sentence[i] === 'q') {
      result += 16;
    } else if(sentence[i] === 'R' || sentence[i] === 'r') {
      result += 17;
    } else if(sentence[i] === 'S' || sentence[i] === 's') {
      result += 18;
    } else if(sentence[i] === 'T' || sentence[i] === 't') {
      result += 19;
    } else if(sentence[i] === 'U' || sentence[i] === 'u') {
      result += 20;
    } else if(sentence[i] === 'X' || sentence[i] === 'x') {
      result += 21;
    } else if(sentence[i] === 'Y' || sentence[i] === 'y') {
      result += 22;
    } else if(sentence[i] === 'Z' || sentence[i] === 'z') {
      result += 23;
    } else if(sentence[i] === 'J' || sentence[i] === 'j') {
      result += 24;
    } else if(sentence[i] === 'V' || sentence[i] === 'v') {
      result += 25;
    } else if(sentence[i] === '&') {
      result += 26;
    } else if(sentence[i] === 'W' || sentence[i] === 'w') {
      result += 27;
    }
  }
  return result;
}

function jewishReduced(sentence) {
  var result = 0;
  for (var i = 0; i < sentence.length; i++) {
    if(sentence[i] === 'A' || sentence[i] === 'a' || sentence[i] === 'K' || sentence[i] === 'k' || sentence[i] === 'T' || sentence[i] === 't') {
      result += 1;
    } else if(sentence[i] === 'B' || sentence[i] === 'b' || sentence[i] === 'L' || sentence[i] === 'l' || sentence[i] === 'U' || sentence[i] === 'u') {
      result += 2;
    } else if(sentence[i] === 'C' || sentence[i] === 'c' || sentence[i] === 'M' || sentence[i] === 'm' || sentence[i] === 'X' || sentence[i] === 'x') {
      result += 3;
    } else if(sentence[i] === 'D' || sentence[i] === 'd' || sentence[i] === 'N' || sentence[i] === 'n' || sentence[i] === 'Y' || sentence[i] === 'y') {
      result += 4;
    } else if(sentence[i] === 'E' || sentence[i] === 'e' || sentence[i] === 'O' || sentence[i] === 'o' || sentence[i] === 'Z' || sentence[i] === 'z') {
      result += 5;
    } else if(sentence[i] === 'F' || sentence[i] === 'f' || sentence[i] === 'P' || sentence[i] === 'p' || sentence[i] === 'J' || sentence[i] === 'j') {
      result += 6;
    } else if(sentence[i] === 'G' || sentence[i] === 'g' || sentence[i] === 'Q' || sentence[i] === 'q' || sentence[i] === 'V' || sentence[i] === 'v') {
      result += 7;
    } else if(sentence[i] === 'H' || sentence[i] === 'h' || sentence[i] === 'R' || sentence[i] === 'r' || sentence[i] === '&') {
      result += 8;
    } else if(sentence[i] === 'I' || sentence[i] === 'i' || sentence[i] === 'S' || sentence[i] === 's' || sentence[i] === 'W' || sentence[i] === 'w') {
      result += 9;
    }
  }
  return result;
}
