let school = {
    name: "KISUBI HIGH SCHOOL",
    location: "Central Region, Uganda",
    studentsCount: 4000,
    establishedYear: 1999,
    schoolType: "Secondary",
    
    // calculating the age of the school
    calculateSchoolAge: function() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.establishedYear;
    },

    // method to introduce the school
    schoolIntroduction: function() {
        return `Welcome to ${this.name}, located in ${this.location}. We have ${this.studentsCount} students enrolled.`;
    }
};

// Destructuring the properties
const { name, location, studentsCount } = school;

// Logging the destructured variables
console.log("School Name:", name);
console.log("School Location:", location);
console.log("Number of Students:", studentsCount);
