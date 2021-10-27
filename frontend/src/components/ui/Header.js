import React from 'react'
import { Popover } from '@headlessui/react'

export const Header = () => {
    return (
        <Popover className="relative bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="/">
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="https://minisitios.ripley.cl/minisitios/estatico/marcas-mercado/assets7/Header_R.Com.png"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
            </div>
        </Popover>
    )
}
