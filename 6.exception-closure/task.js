function parseCount(value) {
        let result = Number.parseInt(value)
        if (isNaN(result)) {
            throw new Error('Невалидное значение')
    }
    return result
}


function validateCount(value) {
 try {
     return parseCount(value)
 } catch(er) {
     return er
 }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a
        this.b = b
        this.c = c
        if (a + b < c || a + c < b || c + b < a) {
            throw new Error ('Треугольник с такими сторонами не существует')
        }
    }
    getPerimeter() {

        return this.a + this.b + this.c
 
    }
    
    getArea() { 
        const p = this.getPerimeter() / 2
        return Number(Math.sqrt((p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3))
    }
}

function getTriangle(a, b, c) {
        try {
            return new Triangle(a, b, c)
        } catch {
            return {getArea: function()  {return 'Ошибка! Треугольник не существует'}, getPerimetr: function()  {return 'Ошибка! Треугольник не существует'}}
        }
}

