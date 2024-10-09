///Example 5: Iterating Over a Farmer's Properties
let ugandanFarmer = {
name: "James",
farmLocation: "Mbale",
crop: "Coffee",
numberOfAcres: 5
};
for (let key in ugandanFarmer) {
console.log(`${key}: ${ugandanFarmer[key]}`);
}