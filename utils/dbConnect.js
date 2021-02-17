
// Importamos mongoose
import mongoose from 'mongoose';

//Creamos la constante de conexion
const connection = {};

//Conectamos a nuestra base de datos mediante MONGO_URI 
async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;