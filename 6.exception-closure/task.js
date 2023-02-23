'use strict';

// Задача 1

function parseCount (forParse) {
    
    if (isNaN(Number.parseInt(forParse)) !== true) {
        return Number.parseInt(forParse);
    } else {
        throw new Error('Невалидное значение');
    };
    
};

function validateCount(newParse) {
        try {
            return parseCount(newParse);
        } catch (e) {
            return e;
        };
};

parseCount('200px');

// Задача 2

class Triangle {
    constructor(first, second, third) {
        this.first = first;
        this.second = second;
        this.third = third;
        if (((this.first + this.second) < this.third) || ((this.first + this.third) < this.second) || ((this.second + this.third) < this.first) === true) {
            throw new Error('Треугольник с такими сторонами не существует');
        } else {
            
        };
    };
    
    getPerimeter() {
        return this.first + this.second + this.third;
    };
    
    getArea() {
        let s;
        let p;
        p = (this.first + this.second + this.third) / 2;
        s = Math.sqrt(p * ((p - this.first) * (p - this.second) * (p - this.third)));
                      
        return Number(s.toFixed(3));
    };
    
    getTriangle(first, second, third) {
        try {
            let newObj = new Triangle(first, second, third);
            
            return newObj;
            
        } catch(e) {
            let newObj = {
                getPerimeter() {
                    return 'Ошибка! Такого треугольника не существует';
                },
                getArea() {
                    return 'Ошибка! Такого треугольника не существует';
                },
            };
        };
    };
};