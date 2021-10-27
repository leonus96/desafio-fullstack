import customerModel from "../models/customer.model"

class CustomerController {
    index = (_, res) => {
        customerModel.find()
            .then(data =>
                res.status(200).send({
                    message: 'Lista de clientes resgistrados.',
                    data: data,
                })
            )
            .catch(err => console.log(err))
    }

    create = (req, res) => {
        customerModel.create(req.body)
            .then(data =>
                res.status(200).send({
                    message: 'Cliente creado correctamente.',
                    data: data,
                })
            )
            .catch(err => console.log(err))
    }

    average = (_, res) => {
        customerModel.average()
            .then(data =>
                res.status(200).send({
                    message: 'Promedio de edad de los clientes registrados.',
                    data: data[0],
                })
            )
            .catch(err => console.log(err))
    }
}

export default new CustomerController()