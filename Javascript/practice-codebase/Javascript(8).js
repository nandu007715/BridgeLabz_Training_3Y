const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let originalTotal = cart.reduce(
    (sum, product) => sum + product.price,
    0
);

let discountedTotal = 0;

for (let product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    let discount = product.price * discountRate;
    let finalPrice = product.price - discount;

    discountedTotal += finalPrice;

    console.log(product.item, "Final Price:", finalPrice);
}

let extraDiscount = 0;

if (originalTotal > 50000) {
    extraDiscount = discountedTotal * 0.05;
}

let finalTotal = discountedTotal - extraDiscount;

console.log("Original Total:", originalTotal);
console.log("After Category Discounts:", discountedTotal);
console.log("Extra Discount:", extraDiscount);
console.log("Final Cart Total:", finalTotal);
