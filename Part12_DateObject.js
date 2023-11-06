let d = new Date();
//console.log(d);
console.log(d.getDate());  // date  1-31
console.log(d.getMonth()+1); // 0-11
console.log(d.getFullYear());  // return the year

console.log(d.getHours()+":"+d.getMinutes()+":"+ d.getSeconds()+" "+(d.getMonth()+1)+"-"+d.getDate()+"-"+d.getFullYear());

// Example output: 11:24:30