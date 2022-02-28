function parseCount(value) {
    try {
        let result = Number.parseInt(value)
        if (isNaN(result) === true) {
            throw new Error
        }
        return result
    } catch (Error) {
        return 'Невалидное значение'
    }
}

function validateunt(value2) {
    try {
        let result = parseCount(value2)
        if (isNaN(result) === true) {
            throw new Error
        }
        return result
    } catch (Error) {
        return 'Невалидное значение'
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a
        this.b = b
        this.c = c
        if (this.a + this.b < this.c || this.a + this.c < this.b || this.c + this.b < this.a) {
            throw new Error ('Треугольник с такими сторонами не существует')
        }
    }
    getPerimetr() {
        return this.a + this.b + this.c
    }
    
    getArea() { 
        const p = (this.a + this.b + this.c) / 2
        return Math.sqrt((p * (p - this.a) * (p - this.b) * (p - this.c)))
    }
}

function getTriangle(a, b, c) {
        try {
            if (this.a + this.b < this.c || this.a + this.c < this.b || this.c + this.b < this.a) {
                throw new Error
            }
            return new Triangle(a, b, c)
        } catch {
            return {[this.getArea()]: 'ошибка! треугольник не существует', [this.getPerimetr()]: 'ошибка, треугольник не существует'}
        }
}

const trian = new Triangle(12, 12, 12)