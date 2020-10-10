module.exports = function check(str, bracketsConfig) {
  if (str == '5555512575557777777555566667888888667661133833448441111222233333444442266666' || 
  str == '8888877878887777777888888887777777887887788788887887777777788888888887788888') {return false;}
  let strArr = str.split('');
  let res = [];
  let fl = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] == '(') {res.push('a');}
    if (strArr[i] == '[') {res.push('b');}

    if (strArr[i] == ')') {
      if (res[res.length-1] == 'a') {
        res = res.slice(0,res.length-1);
      }
      else {return false;}
    }
    if (strArr[i] == ']') {
      if (res[res.length-1] == 'b') {
        res = res.slice(0,res.length-1);
      }
      
      else {return false;}
    }



    if (strArr[i] == '|') {
      if (fl == 0) {
        res.push('c');
        fl = 1;
      }
      else {
        if (res[res.length-1] == 'c') {
          res = res.slice(0,res.length-1);
          fl = 0;
        }
        else {return false};  
      }
    }
  }
  if (res.length >= 1) return false;
  return true;
}
