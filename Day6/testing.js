var xccelerateStudent = {
    name: "Olivia Cheung", // name is the PROPERTY or KEY and "Olivia Cheung" is the VALUE
    course: "Full immersive web dev", // name and course have STRING VALUES
    enrollmentStatus: true, // the value of enrollmentStatus is a BOOLEAN
    greet: function() { // greet is a METHOD, more on this later
        return "Hello!"
    }
}

console.log(xccelerateStudent);
console.log(xccelerateStudent.greet());

var xccelerateInstructor = {
    name: "Sam O'Shaughnessy",
    'favourite language': "javaScript"
}

console.log(xccelerateInstructor['favourite language']);

