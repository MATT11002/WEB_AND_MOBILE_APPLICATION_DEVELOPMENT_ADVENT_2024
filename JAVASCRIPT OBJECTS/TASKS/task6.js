let school = {
    name: "KISUBI HIGH",
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

// Logging the school's name and location to the console
console.log("School Name:", school.name);
console.log("School Location:", school.location);

// Calculating and printing the school's age
console.log("School Age:", school.calculateSchoolAge(), "years");

// Logging the school introduction
console.log(school.schoolIntroduction());
