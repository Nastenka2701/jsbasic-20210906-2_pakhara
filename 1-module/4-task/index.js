function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('1xbet') || lowerStr.includes('xxx');
}

alert( checkSpam('buy 1xBet now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("blablabla") );