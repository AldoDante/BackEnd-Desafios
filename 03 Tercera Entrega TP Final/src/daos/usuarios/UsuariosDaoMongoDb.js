import mongooseTypePhone from 'mongoose-type-phone'
import mongoose from 'mongoose';
import ContenedorMongoDb from "../../container/ContenedorMongoDb.js";


class UsuariosDaoMongoDb extends ContenedorMongoDb {
    constructor() {
        super('usuarios', {
            name: { type: String, required: true },
            address: { type: String, required: true },
            age: { type: Number, required: true },
            email: { type: String, required: true, index: { unique: true } },
            photo: { type: String, required: true },
            password: { type: String, required: true },
            phone: { type: Number, required: true },            
        })
    }
}

export default UsuariosDaoMongoDb