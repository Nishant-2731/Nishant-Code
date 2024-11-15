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

// customerSchema.pre("findOneAndDelete", async ()=>{
//     console.log("Pre Middleware")
// });

customerSchema.post("findOneAndDelete", async (customer)=>{
    // console.log(data);
    if(customer.orders.length)
    {
        let res = await Order.deleteMany({ _id: { $in: customer.orders}});
        console.log(res);
    }
});

const Order = mongoose.model("Order", orderSchema);

const Customer = mongoose.model("Customer", customerSchema);

// Functions

const findCustomer = async ()=>{
    let result = await Customer.find({}).populate("orders");
    console.log(result[0]);
}

// findCustomer();

const addCust = async ()=>{
    let newCust = new Customer({
        name: "Karan Arjun"
    });

    let newOrder = new Order({
        item: "Burger",
        price: 250,
    })

    newCust.orders.push(newOrder);

    let res = await newCust.save();
    await newOrder.save();

    console.log(res);
}

const delCust = async ()=>{
    let data = await Customer.findByIdAndDelete("67377d8d403831729ea609c1");
    console.log(data);
}

// addCust();
delCust();