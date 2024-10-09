///Example 4: Nested Object for a Ugandan City
let kampalaCity = {
name: "Kampala",
population: 1500000,
districts: {
central: "Kampala Central",
east: "Nakawa",
north: "Kawempe",
south: "Makindye",
west: "Rubaga"
}
};
console.log(`District in the north of Kampala:
${kampalaCity.districts.north}`);