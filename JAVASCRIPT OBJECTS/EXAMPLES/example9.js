//Example 9: Business Object
let business = {
name: "Kampala Electronics",
location: "Kampala",
products: [
{ name: "TV", price: 1000000, quantity: 50 },
{ name: "Radio", price: 150000, quantity: 200 },
{ name: "Laptop", price: 3000000, quantity: 30 }
],
calculateTotalValue: function() {
let total = 0;
for (let i = 0; i < this.products.length; i++) {
total += this.products[i].price *
this.products[i].quantity;
}
return total;
}
};
console.log(`Total value of products in stock: UGX
${business.calculateTotalValue()}`);