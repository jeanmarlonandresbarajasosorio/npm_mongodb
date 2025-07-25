const { ObjectId } = require('mongodb');

const idFromString = new ObjectId("64f8e8e4d239de0b784c2b7e");

console.log(idFromString);

db.collection('users').findOne({ _id: new ObjectId("64f8e8e4d239de0b784c2b7e") });
