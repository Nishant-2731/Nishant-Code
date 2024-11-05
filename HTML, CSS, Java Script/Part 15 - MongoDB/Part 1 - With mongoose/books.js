const mongoose = require('mongoose');

main()
.then(()=>
{
    console.log("Connection Successful");
})
.catch(err => console.log(err));

async function main() 
{
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: [20, "Title Name of the book is too long"]
    },
    author: {
        type: String
    },
    price: {
        type: Number,
        min: [1, "Price cannot be negative on amazon"]
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ["Fiction", "Non-Fiction"]
    },
    genre:
    {
        type: [String]
    }
});

const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate('6728d387762c46050c23731b',{price: 500}, {new: true, runValidators: true})
.then((res)=>console.log(res))
.catch((err)=>console.log(err.errors));
// For Exact message
// .catch((err)=>console.log(err.errors.price.properties.message));

// let book1 = new Book({
//     title: "Marvel Comics v2",
//     price: 600,
//     genre: ["comics", "superheroes", "action"]
// });

// book1.save()
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

// let book1 = new Book({
//     title: "Marvel Comics",
//     price: 500,
//     category: "Fiction"
// });

// let book1 = new Book({
//     title: "Gone Girl",
//     price: 399
// });

// let book1 = new Book({
//     title: "How to kill a Mockingbird",
//     author: "Harper Lee",
//     price: 299
// });

// let book1 = new Book({
//     title: "Mathematics VIII",
//     price: 1200
// });

// let book1 = new Book({
//     title: "Mathematics XII",
//     author: "RD Sharma",
//     price: 1200
// });