data='{"name":"San Francisco","age":"30","address":{"streetAddress":"89 8nf street","city":"NewYork"},"PhoneNumber":[{"type":"home","number":"111 111-111"},{"type":"fax","number":"09809-090"}]}';

let obj=JSON.parse(data)

//console.log(obj["name"]);  or
console.log(obj.name)   //San Francisco

console.log(obj["address"].streetAddress);  //89 8nf street
console.log(obj.address.streetAddress);   //89 8nf street

console.log(obj.PhoneNumber[0].type+" "+obj.PhoneNumber[0].number);  //home 111 111-111