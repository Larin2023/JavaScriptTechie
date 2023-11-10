// convert a JSON text to a js object

let text='{"employees":['+
    '{"firstName":"John","lastName":"Doe"},'+
    '{"firstName":"Josh","lastName":"Smith"},'+
    '{"firstName":"Peter","lastName":"Jones"}]}';


//convert json to js object
let obj=JSON.parse(text)
console.log(obj.employees[1].firstName+"   "+obj.employees[1].lastName);