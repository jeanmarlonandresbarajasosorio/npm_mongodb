const { ObjectId, MongoClient } = require('mongodb');
const database_name = "npmmongodb"
const url = "mongodb://localhost:27017/"
const cliente = new MongoClient(url)
async function transferir (usuario) {
    await cliente.connect();
    const database= cliente.db(database_name0);
    const session = cliente.startSession();
    try {
        await session.withTransaction(async()=>{
            const colleccion = database.collection('usuarios');
            const origen = await colleccion.findOne({})
        })
        
    } catch (error) {
        
    }
}
const idFromString = new ObjectId("64f8e8e4d239de0b784c2b7e");

console.log(idFromString);

db.collection('users').findOne({ _id: new ObjectId("64f8e8e4d239de0b784c2b7e") });
