//Example 8: Destructuring an Object
let ugandanFarmer = {
name: "James",
farmLocation: "Mbale",
crop: "Coffee"
};
let {name, farmLocation, crop} = ugandanFarmer;
console.log(`${name} farms ${crop} in ${farmLocation}.`);