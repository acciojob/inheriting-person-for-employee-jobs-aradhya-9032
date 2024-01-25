// Create an instance of Person
var person = new Person("John", 30);

// Call the greet method
person.greet();  // Output: Hello, my name is John, I am 30 years old.

// Create an instance of Employee
var employee = new Employee("Jane", 25, "Web Developer");

// Call the greet method inherited from Person
employee.greet();  // Output: Hello, my name is Jane, I am 25 years old.

// Call the jobGreet method specific to Employee
employee.jobGreet();  // Output: Hello, my name is Jane, I am 25 years old, and my job title is Web Developer.

