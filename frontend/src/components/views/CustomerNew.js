import React, { useState } from 'react'
import { SaveIcon, ArrowLeftIcon } from '@heroicons/react/solid'
import { useHistory } from "react-router-dom";
import axios from 'axios'

export default function CustomerNew() {
    const history = useHistory();

    const [formState, setFormState] = useState({
        first_name: '',
        last_name: '',
        age: undefined,
    })

    const { first_name, last_name, age } = formState

    const handleInputChange = ({ target }) => {
        let value = target.value;
        setFormState({
            ...formState,
            [target.name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(`http://${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/customer`, formState)
            .then(() => history.replace('/'))
            .catch()
    }

    return (
        <div className="max-w-7xl mx-auto flex flex-col px-4 py-8">
            <form className="space-y-8 divide-y divide-gray-200 bg-white p-8 shadow-sm rounded-md" onSubmit={handleSubmit}>
                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div>
                        <div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Nuevo Cliente</h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                Completa el formulario para crear un nuevo cliente.
                            </p>
                        </div>

                        <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Nombres
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <input
                                        type="text"
                                        name="first_name"
                                        id="first_name"
                                        autoComplete="given-name"
                                        onChange={handleInputChange}
                                        value={first_name}
                                        className="shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 rounded-md py-1 px-4"
                                        style={{
                                            border: '#D1D5DB 1px solid'
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Apellidos
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <input
                                        type="text"
                                        name="last_name"
                                        id="last_name"
                                        autoComplete="family-name"
                                        onChange={handleInputChange}
                                        value={last_name}
                                        className="shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 rounded-md py-1 px-4"
                                        style={{
                                            border: '#D1D5DB 1px solid'
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="age" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Edad
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <input
                                        type="number"
                                        name="age"
                                        id="age"
                                        onChange={handleInputChange}
                                        value={age}
                                        className="md:max-w-xs shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 rounded-md py-1 px-4"
                                        style={{
                                            border: '#D1D5DB 1px solid'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between mt-10">
                                <button
                                    type="button"
                                    onClick={() => history.goBack()}
                                    className="relative inline-flex items-center pr-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 hover:text-indigo-700 hover:text-white bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <ArrowLeftIcon className="h-5 w-5 mr-1" />
                                    Volver
                                </button>
                                <button
                                    type="submit"
                                    className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <SaveIcon className="h-5 w-5 mr-1" />
                                    Registrar
                                </button>
                            </div>
                    </div>

                </div>
            </form>
        </div>
    )
}