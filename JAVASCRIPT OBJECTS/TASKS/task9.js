//marketVendor object
const marketVendor = {
    products: {
        bananas: { price: 0.5, quantity: 100 },
        cassava: { price: 1.0, quantity: 50 },
        tomatoes: { price: 0.75, quantity: 200 }
    },
    // calculating total revenue
    calculateTotalRevenue: function() {
        let totalRevenue = 0;
        for (let product in this.products) {
            totalRevenue += this.products[product].price * this.products[product].quantity;
        }
        return totalRevenue;
    }
};

// Calculating and printing the total revenue
console.log("Total Revenue: " + marketVendor.calculateTotalRevenue());
