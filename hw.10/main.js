//--------------------------1-------------------------//

/*
const buttons = document.getElementsByTagName('button');
const button = buttons[0];

button.onclick = function (){
document.getElementById('text').remove()//--be disappear;
*/
/*documnet.getById('text').style.height = 0;*//*

*/
/*documnet.getById('text').style.height = 0;*//*

*/
/*documnet.getById('text').style.display = 'none';*//*


};*/

//-------------------------------2---------------------//

/*const someForm = document.forms.someForm;*/

/*const sendButton = someForm.sendButton;
console.log(sendButton);*/
/*sendButton.addEventListener('click', ()=> {
const nameValue = someForm.name.value;
const surnameValue = someForm.surname.value;
const ageValue = someForm.surname.age;
let obj = {nameValue,surnameValue,ageValue}
console.log(obj);
});*/


/*someForm.addEventListener('submit', (e)=>{
e.preventDefault();
const nameValue = someForm.name.value;
const surnameValue = someForm.surname.value;
const ageValue = someForm.age.value;
let obj = {nameValue,surnameValue,ageValue}
console.log(obj);
target.innerText = obj.nameValue + '' + obj.surnameValue + '' + obj.ageValue;
});


document.getElementById('target');*/

//-----------------------------3--------------------------//

/*
let currentNumber = +localStorage.getItem('number');// 0
currentNumber += 1;
localStorage.setItem('number',currentNumber);

document.getElementById('target').innerText = currentNumber;*/

//--------------------------4------------------------------//

/*const sessionsList = JSON.parse(localStorage.getItem('sessionsList'));
//iter+ DOM
for (const sessionsListElement of sessionsList){
const div = document.createElement('div');
div.innerText = sessionsListElement.toString();
document.body.appendChild(div);
}*/
//--------------------------------5---------------------------//

/*
const input = document.getElementById('xxx');
const resultDiv = document.getElementById('result');

input.oninput = function () {
/*/
/*2.2
const kilos = +this.value;
resultDiv.innerText = kilos * 2.2;
};*/

//---------------------------------6------------------------------//

/*function addToLocalStorage(arrayName, objToAdd){
const lsItem = localStorage.getItem(arrayName);
if(lsItem){
throw new Error('there is no such array');
};

const array = JSON.parse(lsItem);
if(typeof objToAdd ==='object'){
array.push(objToAdd);

}
localStorage.setItem(arrayName, JSON.stringify(array));
}

addToLocalStorage('sessionsList', {});*/

//------------------------------7----------------------------------//
/*const table = document.getElementById('table');
tableGeneratorForm.onsubmit = function(e){
table.innerText = '';
e.preventDefault();
const tableGeneratorForm = document.forms['tableGeneratorForm'];
const linesValue = +tableGeneratorForm.lines.value;
const cellsValue = +tableGeneratorForm.cells.value;
const dataValue = tableGeneratorForm.data.value;
console.log(linesValue,cellsValue,dataValue);

for(let i = 0; i<linesValue; i++){
const tr = document.createElement('tr');
for(let j =0; j<cellsValue; j++){
const td = document.createElement('td');
td.innerText = dataValue;
tr.appendChild(td);
}
table.appendChild(tr);
}

};*/

