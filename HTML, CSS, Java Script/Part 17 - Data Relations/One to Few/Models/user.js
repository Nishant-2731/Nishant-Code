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

// In one to few we store the whole relation object in parent.

const userSchema = new Schema({
    username: {
        type: String,
    },
    addresses: [
        {
            _id: false,
            location: {
                type: String,
            },
            city: {
                type: String,
            },
        }
    ]
});

const User = mongoose.model("User", userSchema);

const addUsers = async()=>{
    let user1 = new User({
        username: "Sherlockholmes",
        addresses: [{
            location: "221B Baker Street",
            city: "London"
        }]
    });
    user1.addresses.push({location: "P32 Wallstreet", city: "London"});
    let result = await user1.save();
    console.log(result)
}

addUsers();