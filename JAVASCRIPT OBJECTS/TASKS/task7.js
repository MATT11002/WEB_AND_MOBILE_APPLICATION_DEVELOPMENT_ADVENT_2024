// Constructor function for School
function School(name, location, studentsCount, schoolType) {
    this.name = name;
    this.location = location;
    this.studentsCount = studentsCount;
    this.schoolType = schoolType;

   //introduction method
    this.introduce = function() {
        return `Welcome to ${this.name}, located in ${this.location}. We have ${this.studentsCount} students and we are a ${this.schoolType} school.`;
    };
}

// Creating two new school objects
let school1 = new School("KISUBI HIGH", "Central Region, Uganda", 4000, "Secondary");
let school2 = new School("SEETA HIGH SCHOOL", "Kampala, Uganda", 1500, "Primary");

// Introducing the schools
console.log(school1.introduce());
console.log(school2.introduce());
