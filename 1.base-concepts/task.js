'use strict';

let a = 1;
let b = 2;
let c = 1;
let arr = [];
let d;
let d1;
let d2;

function solveEquation(a, b, c) {
    d = (b ** 2) - (4 * a * c);
    console.log('Дискриминант равен ', d);
    
    if (d < 0) {
        arr = [];
        console.log('Корней нет: ', arr);
    } else if (d === 0) {
        d = -b / (2 * a);
        arr.push(d);
        console.log('Корень уравнения: ', arr);
    } else {
        d1 = (-b + Math.sqrt(d)) / (2*a);
        arr.push(d1);
        d2 = (-b - Math.sqrt(d)) / (2*a);
        arr.push(d2);
        console.log('Корни уравнения: ', arr);
    };
        
  // код для задачи №1 писать здесь
  return arr; // array

};


  let credit = {
  persent: '16',
  summBegin: 12,
  summCredit: 6000,
  time: 24
};

if (credit.persent != Number(credit.persent)) {
  console.log ('Параметр "процентная ставка" содержит неправильное значение "',credit.persent,'"');
} else {
  credit.persent = Number(credit.persent);
  console.log ('Ваша процентная ставка: ', credit.persent);
};

if (credit.summBegin != Number(credit.summBegin)) {
  console.log ('Параметр "сумма первоначального взноса" содержит неправильное значение "',credit.summBegin,'"');
} else {
  credit.summBegin = Number(credit.summBegin);
  console.log ('Ваш первоначальный взнос: ', credit.summBegin);
};

if (credit.summCredit != Number(credit.summCredit)) {
  console.log ('Параметр "сумма кредита" содержит неправильное значение "',credit.summCredit,'"');
} else {
  credit.summCredit = Number(credit.summCredit);
  console.log ('Сумма кредита: ', credit.summCredit);
};

if (credit.time != Number(credit.time)) {
  console.log ('Параметр "срок погашения кредита" содержит неправильное значение "',credit.time,'"');
} else {
  credit.time = Number(credit.time);
  console.log ('Срок погашения кредита: ', credit.time, 'месяца');
};

function allCredit(credit) {
  let creditBody;
  let monthPay;
  let P;
  let allSumm;
  creditBody = credit.summCredit - credit.summBegin;
  console.log('Банку необходимо будет вернуть сумму в размере: ', creditBody);
  P = credit.persent * (1 / 12);
  monthPay = creditBody * (P + (P / ((1 + P) ** credit.time) - 1));
  console.log('Ежемесячный платеж по кредиту составит: ', monthPay.toFixed(2));
  allSumm = monthPay * credit.time;
  console.log('Общая сумма, которую Вам придется заплатить, составит: ', allSumm.toFixed(2));
};

allCredit(credit);

