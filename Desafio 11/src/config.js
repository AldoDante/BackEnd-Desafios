export default {
    PORT: process.env.PORT || 8080,
    mongoLocal: {
        client: 'mongodb',
        cnxStr: 'mongodb://localhost:27017/coderhouse'
    },
    mongoRemote: {
        client: 'mongodb',
        cnxStr: 'mongodb+srv://aldo7919:spike7919@cluster0.tgkozu1.mongodb.net/sessions?retryWrites=true&w=majority',
        options: {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                // useCreateIndex: true,
                // serverSelectionTimeoutMS: 5000,
        }    
    },
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: `./DB/ecommerce.sqlite`
        },
        useNullAsDefault: true
    },
    fileSystem: {
        path: './DB'
    }
}
