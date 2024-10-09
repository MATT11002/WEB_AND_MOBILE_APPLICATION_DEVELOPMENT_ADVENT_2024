let university = {
    // Defining departments and their heads
    departments: {
        InformationTechnology: {
            name: "Information Technology",
            headOfDepartment: "Hadijah Nakalyowa"
        },
        computerScience: {
            name: "Computer Science",
            headOfDepartment: "Nathaniel Mugenyi"
        },
        data: {
            name: "Data Science",
            headOfDepartment: "Ssemu Joshua"
        }
    }
};

// Looping through all properties of the university object and printing them to the console
for (let department in university.departments) {
    console.log(`Department: ${university.departments[department].name}`);
    console.log(`Head of Department: ${university.departments[department].headOfDepartment}`);
}
