////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(num1, num2) {
if (num1 < num2) {
  return num1;
}
else {
  return num2;
}
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num1) {
if (num1 % 2 === 0) {
  return true;
}
else {
  return false;
}
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(str, char) {
  var num = 0;
for (let i = 0; i <= str.length; i++) {
  if (str[i] === char) {
    num++;
  }
  
}
return num;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(str) {
  var num = 0;
for (let i = 0; i <= str.length; i++) {
  if (str[i] === "B") {
    num++;
  }
  
}
return num;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
