// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'ls-8208936bb277ed47bfc8ab2ec9d0cacccbae2afa.cgcaszrcqkjy.us-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'db_usuario',
            dialect: 'mysql',
            user: 'administrator',
            password: 'administrator'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}