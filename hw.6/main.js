//------------------1----------------//
/*
let a1 ='hello world';
let a2 ='lorem ispum';
let a3 ='javascript is cool';
console.log(a1.length);
console.log(a2.length);
console.log(a3.length);

const strings =[a1,a2,a3];
for (const a of strings){
console.log(a.length);
}*/
//--------------------2----------------//
/*
let a ='hello world';
let b ='lorem ispum';
let c ='javascript is cool';
const a1 = a.toUpperCase();
const b1 = b.toUpperCase();
const c1 = c.toUpperCase();
console.log(a1);
console.log(b1);
console.log(c1);
*/
//--------------------3----------------//

/*
let a ='HELLO WORLD';
let b ='LOREM ISPUM';
let c ='JAVASCRIPT IS COOL';
const a1 = a.toLowerCase();
const b1 = b.toLowerCase();
const c1 = c.toLowerCase();
console.log(a1);
console.log(b1);
console.log(c1);*/
//----------------------4------------------//

/*
let str = '       dirty string     '
const s =str.trim();
console.log(s);*/
//--------------------5--------------------//
/*function stringToArray(str){
if(str){
const split =str.split(' ');
return split
}
return [''];

}

console.log(stringToArray('Ревуть воли як ясла повні'));*/
//-------------------------------6-----------------//

/*const numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const strings = numbers.map(number => {
return number + '';
});
console.log(strings);*/

//---------------------------7-------------------//
/*function sortNums(areayOfnums, direction){
if(direction === 'ascending') return arrayOfNums.sort((a,b) => b-a);
if(direction === 'descending') return arrayOfNums.sort((a,b) => b-a);
}

function sortNums(areayOfnums, direction){
const sort = arrayOfNums.sort((a,b) => b-a);
if(direction === 'asc'){
return sort;
}
if (direction === 'desc'){
return sort.reverse();
}
}*/
//-------------------------8----------------------//
/*const coursesAndDurationArray = [

    {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title: 'Python Complex', monthDuration: 6},

    {title: 'QA Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}

];*/

/*
const sort = coursesAndDurationArray
.sort((a,b) => b.monthDuration - a.monthDuration);

const filter = sort.filter(value => value.monthDuration >5);
const map = filter.map((value, index) => {
value.id =index + 1;
return value;
});

console.log(map);*/

/*const map1 = coursesAndDurationArray
.sort((a,b) => b.monthDuration - a.monthDuration)
.filter(value => value.monthDuration >5)
.map((value, index) => ({...value, id: index + 1}))
console.log(map1);*/
//-------------------------------9--------------------------//
/*
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log(coursesArray.filter(course => {
return course.modules.includes('sass');
}));

console.log(coursesArray.filter(course => {
return course.modules.includes('docker');
}));*/
