////Example 6: Using this in a Method
 let ugandanFarmer = {
 name: "James",
 farmLocation: "Mbale",
 crop: "Coffee",
 numberOfAcres: 5,
 introduceFarmer: function() {
 return `Hello, my name is ${this.name} and I farm ${this.crop}
 in ${this.farmLocation}.`;
 }
};
 console.log(ugandanFarmer.introduceFarmer());