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

const userSchema = new Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
});

// In this one to sqillions we store relation id in child.

const postSchema = new Schema({
    content: {
        type: String,
    },
    likes: {
        type: Number,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});

const User = mongoose.model("User", userSchema);

const Post = mongoose.model("Post", postSchema);

// const addData = async ()=>{
//     let user1 = new User({
//         username: "Rahul Kumar",
//         email: "rahul@gmail.com",
//     });
//     let post1 = new Post({
//         content: "Hello World!",
//         likes: 9,
//     });

//     post1.user = user1;

//     await user1.save();
//     let res = await post1.save();
//     console.log(res);
// }

// addData();

const addData = async ()=>{
    let user = await User.find({username: "Rahul Kumar"})
    let post2 = new Post({
        content: "Bye Bye",
        likes: 70,
    });

    post2.user = user[0];

    let res = await post2.save();
    console.log(res);
}

addData();

// const findCustomer = async ()=>{
//     let result = await Post.find({}).populate("user");
//     console.log(result[0]);
// }

// findCustomer();