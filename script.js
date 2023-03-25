"use strict";

//РАБОТА С ОПЕРАТОРОМ if который возвращает true или false;

/* let num = 50; */

/* if(num < 49){
    console.log("False")
} else if (num > 100){
    console.log("More")
} else {
    console.log("True")
}

(num == 50) ? console.log("True!!") : console.log("False!!");

switch(num){
    case num > 100 :
        console.log("False");
        break;
    case num > 80 :
        console.log("False");
        break;
    case 50 :
        console.log("True!!!")
        break;
    default :
        console.log("Что-то пошло не так!")
};
while (num <= 60 ){
    console.log(num);
    num++
} */

/* do{
    console.log(num);
    num++;
}
while(num <=55); */

/* for ( let i = 1; i < 9; i++){
    if ( i == 6){
        continue;
    }
    console.log(i);
}
 */




//function newsave(){   //сперва идет функция. Затем имя функции с глагола начинается и так далее. затем параметры функции
                            //такие функции будут обьявлены до того как до них дойдет код
                            // а если функцию пометить в переменну то она не будет видна до ее обьявления!
                            // есть функции по новому стандарту ES6 такие ..стрелочные функции..
    //let num = 50;
    //return num;
//};
//let newlet = newsave()
//console.log(newlet);






/* let calcSum = (a,b) =>     //вот пример стрелочной функции которую  как самостоятельной не используют( чаще это в обработчиках событий)
    a+b
console.log(calcSum(5,6)); */


/* let str = "Test";   //в js есть свойства и методы

console.log(str.length); //здесь представлено свойство которое прописывается через "." к переменной.
console.log(str.toUpperCase()); 
console.log(str.toLowerCase());//здесь представлен метод (как сам console.log) где console переменная, а log - это метод.

let SecondLet = "12.2px"
//console.log(Math.round(SecondLet)); //метод округления 12.2
console.log(parseFloat(SecondLet)); //метод ищет float или целые int
 */

//обьявление объектов let x={};,  let x = new object(); или так как далее
/* let user = {
    name: "John",
    age: 27,
    address: {
        street: "lenina", 
        city: "belorechensk"
    },
    "center London": "center"
};
user.married = true;
console.log(user["center London"]); */

let user = {
    name: "Alex",
    age: 27,
    job: "web dev"
}
user.lastName = "Zubkov"

delete user.age
for (let key in user){
    console.log('Это свойство ' + key + ' имеет значение ' + user[key]);
}