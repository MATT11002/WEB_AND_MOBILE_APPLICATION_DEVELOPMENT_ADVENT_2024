let school = {
    name: "KISUBI HIGH",
    location: "Central Region, Uganda",
    studentsCount: 4000,
    establishedYear: 1999
};

// Logging the school's name and location to the console
console.log("School Name:", school.name);
console.log("School Location:", school.location);

// Adding a new property and updating an existing property
school.schoolType = "SECONDARY";
school.studentsCount = 4800;

// Logging the updated school object to the console
console.log(school);
