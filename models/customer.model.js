import query from '../utils/bd'

class CustomerModel {
    tableName = 'customer'

    find = async (params = {}) => {
        let sql = `SELECT * FROM ${this.tableName}`

        if (!Object.keys(params).length)
            return query(sql, [this.tableName])

        const { columnSet, values } = multipleColumnSet(params)
        sql += ` AND ${columnSet}`

        return query(sql, [...values])
    }

    average = async () => {
        let sql = `SELECT AVG(age) as age_average FROM ${this.tableName}`
        return query(sql)
    }

    create = async (data) => {
        let sql = `INSERT INTO ${this.tableName} (customer_id, first_name, last_name, age) VALUES (0, ?, ?, ?)`
        return query(sql, [...Object.values(data)])
    }
}

export default new CustomerModel()