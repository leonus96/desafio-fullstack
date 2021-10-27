import React, { useEffect, useState } from 'react'
import { Stats } from '../ui/Stats'
import { UserAddIcon } from '@heroicons/react/solid'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function CustomerList() {
    const [customers, setCustomers] = useState([])
    const [ageAvg, setageAvg] = useState(null)

    useEffect(() => {
        axios.get(`http://${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/customer/`)
            .then(({ data }) => setCustomers(data.data))
        axios.get(`http://${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/customer/average/`)
            .then(({ data }) => setageAvg(data.data.age_average))
    }, [])



    return (
        <div className="max-w-7xl mx-auto flex flex-col px-4 py-8">
            <Stats stats={[
                { name: 'Total de clientes', stat: customers.length },
                { name: 'Promedio de edad', stat: ageAvg },
            ]} />
            <div className="flex justify-end mb-2">
                <Link
                    to="/new"
                    type="button"
                    className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <UserAddIcon  className="h-5 w-5 mr-1"/>
                    Nuevo Cliente
                </Link>
            </div>
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Nombre
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Apellido
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Edad
                                    </th>
                                    {/* <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {customers.map((customer, customerIdx) => (
                                    <tr key={customer.customer_id} className={customerIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{customer.first_name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.last_name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.age}</td>
                                        {/* <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                Edit
                                            </a>
                                        </td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
