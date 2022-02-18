function Student(name, gender, age) {
    this.name = name
    this.gender = gender
    this.age = age
}
const student1 = new Student('Mihail', 'man', 65)
const student2 = new Student('Leonardo', 'man', 42)

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName
}
Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark]
  } else {
    this.marks.push(mark)
  }
}

Student.prototype.addMarks = function (...rest) {
  this.marks.push(...rest)
}
Student.prototype.getAverage = function () {
  let sum = 0
  for (let i = 0; i < this.marks.length; i++) {
    sum += i
  }
  return  sum/this.marks.length
}

Student.prototype.exclude = function(reason) {
delete this.subject
delete this.marks
this.exclided = reason
}
// ваш код для остальных методов