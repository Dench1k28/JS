//---------------------1--------------//
/*let square = (a,b)=> a*b;
console.log(square(2,3));*/

//--------------------2------------------//
/*let roundSquare = (radius)=> Math.PI*radius*radius;
console.log(roundSquare(2));*/

//---------------------3----------------------//
/*
let cylinder =(height,radius)=> 2*Math.PI*radius*height;
console.log(cylinder(9,5));*/

//------------------4-------------------//
/*let users = [
{name: 'olya', age: 21, status: true},
{name: 'vasya', age: 31, status: true},
{name: 'olya', age: 31, status: false},
{name: 'olya', age: 31, status: true},
{name: 'katya', age: 51, status: true},
{name: 'olya', age: 31, status: true},
{name: 'olya', age: 45, status: false}
]
const printUsers =(users)=>users.forEach(user => console.log(user));
printUsers(users);*/

//---------------------5------------------//
/*let foobar = (text)=>document.write(`<p>${text}</p>`);
console.log(foobar('okten'));*/

//---------------------6-------------------//
/*let foobar = (text)=>document.write(`
                     <ul>
                         <li>${text}</li>
                         <li>${text}</li>
                         <li>${text}</li>
                     </ul>
                     `);
console.log(foobar('okten'));*/

//------------------------7----------------//

/*const foobar = (text, counter) => {
    document.write(`<ul>`);
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
};

foobar('okten', 18);*/

//-------------------------8---------------------//

/*const foobar = (arrayOfPrimitives) => {
  document.write(`<ul>`);
 for (const item of arrayOfPrimitives){
 document.write(`<li>${item}</li>`)
 }
 document.write(`<ul>`);
};
foobar([122,323,42,'okten', true])*/

//------------------------9----------------------//
/*
const userFactory = (id, imya, age) => {
    return {
        id: id,
        name: imya,
        age: age
    };
}

let u1 = userFactory(1, 'kokos', 123);
let u2 = userFactory(2, 'abrikos', 4534);
let u3 = userFactory(3, 'tomat', 41);

console.log(u1);
console.log(u2);
console.log(u3);*/

//-----------------------10-----------------------//

/*
const arrayMinValue =(numbers) =>{
let min =numbers[0];
for (const number of numbers){
if (number<min){
min = number
}
}
return min;
}
console.log(arrayMinValue([99,11,-123,22,33,44]));*/

//-----------------------11------------------------//

/*const sum =(arr)=>{
let basket = 0;
for (const item of arr){
basket = basket + item;
}
return basket;
}
console.log(sum([1,2,10]));*/

//------------------------12---------------------//
const swap =(arr,i1,i2)=>
{
if(i1<arr.length && i2<arr.length){
let temp =arr[i1];// 11
arr[i1] = arr[i2];
arr[i2] = temp;
return arr;
}
return -Infinity;
}
console.log(swap([11,22,33,44],0,3))