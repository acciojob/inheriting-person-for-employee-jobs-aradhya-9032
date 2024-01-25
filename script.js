// Creating instances of the classes
const person = new Person("John", 25);
const student = new Student("Alice", 20);
const teacher = new Teacher("Mr. Smith", 35);

// Using the getter and setter for Person
console.log(person.name); // Output: John
console.log(person.age);  // Output: 25
person.age = 26;
console.log(person.age);  // Output: 26

// Using the study method for Student
student.study(); // Output: Alice is studying.

// Using the teach method for Teacher
teacher.teach(); // Output: Mr. Smith is teaching.

