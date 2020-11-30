//mam i used the js function charAt I hope thats okay.
function findWord(arr){
  console.log(arr);
  let sp = [];
  let len = arr.length;
  let orig = arr;
  console.log(len)
  
  let f = [];
    let  s =[];
      let cI = 0;
        let count = {}; 
           let letter;
  
  while(cI<len){
    f.push(arr[cI].charAt(0));
    s.push(arr[cI].charAt(2));
    
    count[arr[cI].charAt(0)] = count[arr[cI].charAt(0)] ? count[arr[cI].charAt(0)]+1 : 1;
    count[arr[cI].charAt(2)] = count[arr[cI].charAt(2)] ? count[arr[cI].charAt(2)]+1 : 1;
    cI++;
  }
   let first;
  for(let c in count){
    if(count[c] === 1){
        console.log(count[c]);
        console.log(c);
      if(f.indexOf(c) >= 0) first = c;
    }
  }
  
  let result = first;
  cI = f.indexOf(first);
  let times = 0;
  while(times < len){
    result += s[cI];
    cI = f.indexOf(s[cI]);
    
    times++;
  }

  console.log(result);
  return result;
}



findWord(["U>N", "G>A", "R>Y", "H>U", "N>G", "A>R"]) // HUNGARY
findWord(["I>F", "W>I", "S>W", "F>T"]) // SWIFT
findWord(["R>T", "A>L", "P>O", "O>R", "G>A", "T>U", "U>G"]) // PORTUGAL
findWord(["W>I", "R>L", "T>Z", "Z>E", "S>W", "E>R", "L>A", "A>N", "N>D", "I>T"]) // SWITZERLAND