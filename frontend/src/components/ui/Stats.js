import React from 'react'

export const Stats = ({stats= []}) => {
    return (
        <div>
          <dl className="mb-5 grid grid-cols-2 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-2 md:divide-y-0 md:divide-x">
            {stats.map((item) => (
              <div key={item.name} className="px-4 py-5 sm:p-6">
                <dt className="text-base font-normal text-gray-900">{item.name}</dt>
                <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                  <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                    {item.stat?.toFixed(2) }
                  </div>                
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )
}
