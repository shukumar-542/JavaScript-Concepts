/**
 * 1. Get user data from database
 * 2. Get order data from database using user id
 * 3. Get prdduct details from database using order
 * 4. Check product delivery status
 * 
 */


const getUser = (callback) => {
    setTimeout(() => {
        console.log("Get user from database");
        callback({userId: 1, username: "shukumar"});
    }, 2000);
};

const getOrder = (userId, callback) => {
    setTimeout(() => {
        console.log(`Get order for user id: ${userId}`);
        callback([{ orderId: 101, productId: 555 }]);
    }, 2000);
}

const productDetails  =(productId, callback) =>{
    setTimeout(()=>{
        console.log(`Get product details for product id: ${productId}`);
        callback({productId: productId, productName: "Laptop"});
    },2000);
}

const deliveryStatus = (productId, callback) => {
    setTimeout(() => {
        console.log(`Get delivery status for product id: ${productId}`);
        callback({productId: productId, status: "Delivered"});
    }, 2000);
}


getUser((user) => {
    console.log("User:", user);
    getOrder(user.userId, (order) => {
        console.log("Order:", order);
        productDetails(order[0].productId, (product) => {
            console.log("Product:", product);
            deliveryStatus(product.productId, (status) => {
                console.log("Delivery Status:", status);
            }
            );
        });
    });
});