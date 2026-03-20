//-------------------1---------------//

/*function User(id,name,surname,phone){
this.id =id;
this.name =name;
this.surname =surname;
this.phone = phone;

}

const user = new User(1,'kokos','asddasd','+231231131');
console.log(user);

let users = [
new User(1,'kokos','asddasd','+231231131'),
new User(2,'kokos','asddasd','+231231131'),
new User(3,'kokos','asddasd','+231231131'),
new User(4,'kokos','asddasd','+231231131'),
new User(5,'kokos','asddasd','+231231131'),
new User(6,'kokos','asddasd','+231231131'),
new User(7,'kokos','asddasd','+231231131'),
new User(8,'kokos','asddasd','+231231131'),
new User(9,'kokos','asddasd','+231231131'),
new User(10,'kokos','asddasd','+231231131')
]
console.log(users);*/
//--------------------2----------------//
/*let users = [
new User(1,'kokos','asddasd','+231231131'),
new User(2,'kokos','asddasd','+231231131'),
new User(3,'kokos','asddasd','+231231131'),
new User(4,'kokos','asddasd','+231231131'),
new User(5,'kokos','asddasd','+231231131'),
new User(6,'kokos','asddasd','+231231131'),
new User(7,'kokos','asddasd','+231231131'),
new User(8,'kokos','asddasd','+231231131'),
new User(9,'kokos','asddasd','+231231131'),
new User(10,'kokos','asddasd','+231231131')
];

function filterFunction(user) {
return user.if%2 ===0;
}
const filterUsers = users.filter(filterFunction);
console.log(filterUsers);*/
//----------------------3--------------------//
/*function User(id,name,surname,phone){
this.id =id;
this.name =name;
this.surname =surname;
this.phone = phone;

}

const user = new User(1,'kokos','asddasd','+231231131');
console.log(user);

let users = [
new User(2,'kokos','asddasd','+231231131'),
new User(3,'kokos','asddasd','+231231131'),
new User(10,'kokos','asddasd','+231231131'),
new User(5,'kokos','asddasd','+231231131'),
new User(6,'kokos','asddasd','+231231131'),
new User(7,'kokos','asddasd','+231231131'),
new User(4,'kokos','asddasd','+231231131'),
new User(1,'kokos','asddasd','+231231131'),
new User(8,'kokos','asddasd','+231231131'),
new User(9,'kokos','asddasd','+231231131'),

]*/

/*
function sorter(user1,user2){
return user1.id-user2.id;
}
console.log(users.sort(sorter));*/
/*
console.log(users.sort((user1,user2) => user1.id - user2.id));*/
//---------------------4-------------//
/*new function Client(id, name, surname, email, phone, ...products){
this.id =id;
this.name =name;
this.surname = surname;
this.email = email;
this.phone = phone;
this.order = order;
}
let clients =[
new Client(1,'asdd','asd','asdsa.com','+21313123',[{title:'tv',price: 13000},{title:'phone',price:1231231}]),
new Client(2,'asdd','asd','asdsa.com','+21313123',[{title:'tv',price: 13000},{title:'phone',price:1231231}]),
new Client(3,'asdd','asd','asdsa.com','+21313123',[{title:'tv',price: 13000},{title:'phone',price:1231231}]),
new Client(4,'asdd','asd','asdsa.com','+21313123',[{title:'tv',price: 13000},{title:'phone',price:1231231}]),
new Client(5,'asdd','asd','asdsa.com','+21313123',[{title:'tv',price: 13000},{title:'phone',price:1231231}]),
new Client(6,'asdd','asd','asdsa.com','+21313123',[{title:'tv',price: 13000},{title:'phone',price:1231231}])
]
console.log(clients);*/
//--------------------------------5--------------------//

/*
new function Client(id, name, surname, email, phone, order){
this.id =id;
this.name =name;
this.surname = surname;
this.email = email;
this.phone = phone;
this.order = order;
}
let clients =[
new Client(1,'asdd','asd','asdsa.com','+21313123',[{title:'tv',price: 13000},{title:'phone',price:1231231},{title:'phone',price:1231231},{title:'phone',price:1231231}]),
new Client(2,'asdd','asd','asdsa.com','+21313123',[{title:'tv',price: 13000},{title:'phone',price:1231231},{title:'phone',price:1231231}]),
new Client(3,'asdd','asd','asdsa.com','+21313123',[{title:'tv',price: 13000},{title:'phone',price:1231231}]),
new Client(4,'asdd','asd','asdsa.com','+21313123',[{title:'tv',price: 13000}]),
new Client(5,'asdd','asd','asdsa.com','+21313123',[{title:'tv',price: 13000},{title:'phone',price:1231231}]),
new Client(6,'asdd','asd','asdsa.com','+21313123',[{title:'tv',price: 13000},{title:'phone',price:1231231}])
];
const sort = clients.sort((a,b) => a.order.length - b.order.length);
console.log(sort);*/
//-------------------------------6----------------------//
/*function Car(model,producer,year,maxSpeed,engineVolume){
this.model=model
this.producer=producer
this.year=year
this.maxSpeed=maxSpeed
this.engineVolume=engineVolume
this.drive = function(){
console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
};
this.info = function(){
for(const key in this){
console.log(key,this[key]);
}
};
this.increaseMaxSpeed = function(speedToAdd){
if (speedToAdd >0)
this.maxSpeed = this.maxSpeed + newSpeed;
};
this.changeYear = function(year){
if (year > 1815)
this.year =year;
};
this.addDriver = function(driver){
if (driver) this.driver = driver;
};

}

const car = new Car ('adasd', 'ada', 123, 333, 3);
console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed();
console.log(car);
car.changeYear(2000);
car.addDriver({});
console.log(car);*/
//-------------------------------7-----------------------//

/*class Car{
constructor(model,producer,year,maxSpeed,engineVolume){
this.model=model;
this.producer=producer;
this.year=year;
this.maxSpeed=maxSpeed;
this.engineVolume=engineVolume;
}

drive(){
console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
};
info(){
for(const key in this){
console.log(key,this[key]);
}
};
increaseMaxSpeed(speedToAdd){
if (speedToAdd >0)
maxSpeed = this.maxSpeed + newSpeed;
};
changeYear(year){
if (year > 1815)
year =year;
};
addDriver(driver){
if (driver) this.driver = driver;
};
}

const car = new Car ('adasd', 'ada', 123, 333, 3);
console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed();
console.log(car);
car.changeYear(2000);
car.addDriver({});
console.log(car);*/
//-------------------------------8-----------------------//
/*
class Cinderella {
constructor(name, age, footSize){
this.name =name;
this.age =age;
this.footSize =footSize;
}
}

class Prince{
constructor(name, age, slipper){
this.name =name;
this.age =age;
this.slipper =slipper;
}
}

const cinderellas =[
new Cinderella('asd',1231,34),
new Cinderella('asd',1232,35),
new Cinderella('asd',1233,36),
new Cinderella('asd',1234,37),
new Cinderella('asd',1235,38),
new Cinderella('asd',1236,39),
];

const prince = new Prince('qeqe',123132,36);
*/
/*
for(const cinderella of cinderellas){
if(cinderella.footSize === prince.slipper){
prince.wife=cinderella;
}
}*//*

const cinderellaMain = cinderellas.find(cinderella => cinderella.footSize === prince.slipper);
prince.wife =cinderellaMain;
console.log(cinderellaMain);*/
