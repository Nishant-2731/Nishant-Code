let jsonRes = '{"fact":"The Amur leopard is one of the most endangered animals in the world.","length":68}'
console.log(jsonRes);

let validRes = JSON.parse(jsonRes);
console.log(validRes);

let stringRes = JSON.stringify(validRes);
console.log(stringRes);