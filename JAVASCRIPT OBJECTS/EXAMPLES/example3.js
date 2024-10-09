///Example 3: Adding a Method to Calculate Farm Revenue
let ugandanFarmer = {
name: "James",
farmLocation: "Mbale",
crop: "Coffee",
numberOfAcres: 5,
cropPrice: 3000,
calculateRevenue: function(harvestedBags) {
return harvestedBags * this.cropPrice;
}
};
let revenue = ugandanFarmer.calculateRevenue(200);
console.log(`Total revenue for ${ugandanFarmer.crop} is UGX
${revenue}`);