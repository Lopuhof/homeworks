function Student (name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
};
 
let student1 = new Student("ivan", "male", 22);
let student2 = new Student("irina", "female", 19);
let student3 = new Student("oleg", "male", 31);
 
Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
};
 
Student.prototype.addMark = function(mark) {
    if (this.marks === undefined) {
        this.marks = [mark];   
    } else {
        this.marks.push(mark);
    };
};
 
Student.prototype.addMarks = function(...marks) {
    if (this.marks === undefined){
        this.marks = marks;   
    } else {
        this.marks = this.marks.concat(marks);
    };
};
 
Student.prototype.getAverage = function() {
    if(this.marks === undefined){
        return 'Оценок нет';
    } else {
        return this.marks.reduce( ( a, v ) => a + v, 0 ) / this.marks.length;
    };
};
 
 
Student.prototype.exclude = function(reason){
    delete this.subject;
    delete this.marks;
    this.excluded = reason; 
};