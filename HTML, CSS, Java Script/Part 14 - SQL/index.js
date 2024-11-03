const { faker } = require('@faker-js/faker');
const mysql = require('mysql2'); //cd C:\Program Files\MySQL\MySQL Server 8.0\bin & mysql -u root -p

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'NishantNK2731'
});
//https://github.com/Nishant-2731/Nishant-Code.git
try
{
    connection.query("SHOW TABLES", (err, result)=>
    {
        if(err) 
            throw err;
        console.log(result);
    });
}
catch(err)
{
    console.log(err);
}


let getRandomUser = () => 
{
    return {
        userId: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
}

console.log(getRandomUser());