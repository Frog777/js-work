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

function calc(a,b){   //сперва идет функция. Затем имя функции с глагола начинается и так далее. затем параметры функции
    return(a + b);
};

console.log(calc(7,10));