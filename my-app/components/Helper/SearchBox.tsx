import React from 'react'

const SearchBox = () => {
  return (
    <div className='bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
    items-cenetr justify-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[80%]'>
      <div className='flex item-center space-x-6'>
        <></>
        <div>
          <p className='text-lg font-medium mb-[0.2rem]'></p>
          <input 
          type="text"
          placeholder='where are you going?'
          className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' 
          />
        </div>
      </div>
    </div>
  )
}

export default SearchBox