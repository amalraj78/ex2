
let student = {
    name: "Marie",
    age: 20,
    courses: []
};


student.age = 21;

student.grade = "A";


student.courses.push("Math", "Physics", "Chemistry");

let physicsIndex = student.courses.indexOf("Physics");


let firstTwoCourses = student.courses.slice(0, 2);

console.log("L'objet student complet : ", student);
console.log("L'index de 'Physics' dans courses : ", physicsIndex);
console.log("Les deux premiers éléments de courses : ", firstTwoCourses);
