//-----------------1-----------------------//
/*
for (let i = 0;i<10; i++){
document.write('<div>abagagalamaga</div>');
}*/

//------------------2------------------------//
/*
for (let i = 0;i<10; i++){
*/
/*document.write('<div> abagagalamaga ' + i + '</div>');*//*

document.write(`<div> abagagalamaga ${i}</div>`);
}
*/

//---------------3----------------------//


/*let i =0;
while (i<20){
document.write('<div> ' + 'zdasdz' + '</div>');
i++;
}*/

//-----------------4--------------------------//

/*let i =0;
while (i<20){
document.write(`<div> zdasdz ${i}</div>`);

i++;
}*/

//---------------------5--------------------------//


/*
let listOFItems =['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`)
for ( const item of listOFItems){
document.write(`<li>${item}</li>`)
}
document.write(`</ul>`)*/

//---------------------6--------------------------//

/*let products = [

{
title: ‘milk’,
price: 22,
image: ‘https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300×300-3.jpg’
},

{
title: ‘juice’,
price: 27,
image: ‘https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg’
},

{
title: ‘tomato’,
price: 47,
image: ‘https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74’
},

{
title: ‘tea’,
price: 15,
image: ‘https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png’
},

];


for (const product of products){
let TITLE = product.title;
let PRICE = product.price;
let IMAGE = product.image;

document.write(`
             <div class=”product-card”>

             <h3 class=”product-title”>${TITLE}. Price – ${PRICE}</h3>

             <img src=”${IMAGE}” alt=”” class=”product-image”>

                </div>
`)
}*/

//-------------------------------7------------------------//

/*let users = [

    {name: 'vasya', age: 31, status: false},

    {name: 'petya', age: 30, status: true},

    {name: 'kolya', age: 29, status: true},

    {name: 'olya', age: 28, status: false},

    {name: 'max', age: 30, status: true},

    {name: 'anya', age: 31, status: false},

    {name: 'oleg', age: 28, status: false},

    {name: 'andrey', age: 29, status: true},

    {name: 'masha', age: 30, status: true},

    {name: 'olya', age: 31, status: false},

    {name: 'max', age: 31, status: true}

];

 for (const user of users ){
 *//*if (user.status===true)
 console.log(user);*//*
 *//*if (user.status===false)
 console.log(user);*//*
 *//*if (user.age>29)
 console.log(user);*//*
}*/
