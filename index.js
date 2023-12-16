class Student {
  constructor(name, age, weight, isSubscribed) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.isSubscribed = isSubscribed;
  }
}

let studentLeo = new Student("Leonardo", 20, 75, true),
  studentBia = new Student("Beatriz", 25, 58, false),
  students = [studentLeo, studentBia];

console.log(
  `O estudante ${studentLeo.name}, de idade de ${studentLeo.age} anos, pesa ${studentLeo.weight}kg.`
);

console.log(students);
