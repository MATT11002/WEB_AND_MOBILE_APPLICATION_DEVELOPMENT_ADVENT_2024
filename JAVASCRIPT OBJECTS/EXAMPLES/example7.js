function Farmer(name, location, crop, acres) {
    this.name = name;
    this.farmLocation = location;
    this.crop = crop;
    this.numberOfAcres = acres;
    this.introduce = function() {
    return `I am ${this.name}, and I farm ${this.crop} in
    ${this.farmLocation}.`;
    };
    }
    let farmer1 = new Farmer("Sarah", "Mbarara", "Bananas", 10);
    let farmer2 = new Farmer("David", "Gulu", "Sunflowers", 20);
    console.log(farmer1.introduce());
    console.log(farmer2.introduce());