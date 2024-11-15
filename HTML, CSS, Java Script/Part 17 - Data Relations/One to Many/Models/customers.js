const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
.then(()=>
{
    console.log("Connection Successful");
})
.catch(err => console.log(err));

async function main() 
{
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");    
}

const orderSchema = new Schema({
    item: {
        type: String,
    },
    price: {
        type: Number,
    },
});

// In one to many we store relation id in parent.

const customerSchema = new Schema({
    name: {
        type: String,
    },
    orders: [{
        // This type is used to store obejct id and ref is used to refer to the object whose id it is going to store.
        type: Schema.Types.ObjectId,
        ref: "Order"
    }],
})

const Order = mongoose.model("Order", orderSchema);

const Customer = mongoose.model("Customer", customerSchema);

const findCustomer = async ()=>{
    // populate function replaces the id with the actual object to which it belongs
    let result = await Customer.find({}).populate("orders");
    console.log(result[0]);
}

findCustomer();

// const addCustomer = async ()=>{
//     let cust1 = new Customer({
//         name: "Rahul Kumar",
//     });
//     let order1 = await Order.findOne({item: "Chips"});
//     let order2 = await Order.findOne({item: "Chocolate"});

//     // Even though we push the whole object in the customer object only takes id and the rest are ignored. Because we defined the orders type as Schema.Types.ObjectId
//     cust1.orders.push(order1);
//     cust1.orders.push(order2);

//     let res = await cust1.save();
//     console.log(res);
// }

// const addOrders = async ()=>{
//     await Order.deleteMany({});
//     let res = await Order.insertMany([
//         {item: "Samosa", price: 12},
//         {item: "Chips", price: 10},
//         {item: "Chocolate", price: 40}
//     ])
//     console.log(res);
// }

// addOrders();