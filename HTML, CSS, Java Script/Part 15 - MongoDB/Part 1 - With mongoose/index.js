const mongoose = require('mongoose');

main()
.then(()=>
{
    console.log("Connection Successful");
})
.catch(err => console.log(err));

async function main() 
{
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number 
});

const User = mongoose.model("User", userSchema);

//Data Insertion

// User.insertMany([
//     {name:"Tony", email: "tony@gmail.com", age: 50},
//     {name:"Bruce", email: "bruce@gmail.com", age: 47},
//     {name:"Peter", email: "peter@gmail.com", age: 30}
// ]).then((data)=>
// {
//     console.log(data)
// })

// const user1 = new User({
//     name: "Adam",
//     email: "adam@yahoo.in",
//     age: 45
// });

// const user2 = new User({
//     name: "Eve",
//     email: "eve@yahoo.in",
//     age: 48
// });

// // user1.save();
// user2.save()
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));




// QUERIES

// User.findOneAndDelete({name: "Peter"})
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

// User.findByIdAndDelete('6728c05ae0b86dddd9572112')
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

//Simplified
// User.deleteMany({age: {$gt: 30, $lt: 50}})
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

//Complex
// User.deleteMany({$and: [{age: {$gt: 30}}, {age: {$lt: 50}}]})
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

// User.deleteOne({name: "Bruce"})
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

// User.findByIdAndUpdate( '6728c05ae0b86dddd9572113', {age: 35}, {new: true})
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

//This returns new data and updates 
// User.findOneAndUpdate({name: "Bruce"}, {age: 42}, {new: true})
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

//This returns old data and updates
// User.findOneAndUpdate({name: "Bruce"}, {age: 35})
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

// User.updateOne({name: "Bruce"}, {age: 49})
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

// User.findById('6728c05ae0b86dddd9572113')
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

// User.find({_id: {'6728c05ae0b86dddd9572113'}})
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

// User.find({age: {$gt: 40}})
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));