import mysql2 from 'mysql2'

class DBConnection {
    constructor() {
        let configData = {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        }

        this.db = mysql2.createPool(configData)

        this.checkConnection()
    }

    checkConnection() {
        this.db.getConnection((err, connection) => {
            if (err) {
                if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                    console.error('La conexión con al base de datos se cerró.')
                }
                if (err.code === 'ER_CON_COUNT_ERROR') {
                    console.error('La base de datos tiene muchas conexiones.')
                }
                if (err.code === 'ECONNREFUSED') {
                    console.error('La base de datos ha rechazado la conexión.')
                }
            }
            if (connection) {
                connection.release()
            }
        })
    }

    query = async (sql, values) => new Promise((resolve, reject) => {
        const callback = (error, result) => {
            if (error) {
                reject(error)
                return
            }
            resolve(result)
        }
        this.db.execute(sql, values, callback)
    }).catch((err) => {
        err.status = err.status
        throw err
    })
}

export default new DBConnection().query