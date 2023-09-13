import React from 'react'

const Newsletter = () => {
  return (
     <section className='bg-gray-50 mt-20'>
        <div className='container mx-auto md:px-20 py-16 text-center'>
            <h1 className='font-bold text-3xl'>Subscribe Newslatter</h1>

            <div className='py-4'>
              <input type='text' placeholder='Enter Your Email' className='border rounded shadow w-9/12 py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline'></input>
            </div>

            <button className= 'bg-orange-600 hover:bg-orange-700 py-3 px-20 rounded-full mt-4 text-gray-50 text-xl'> 
                Subscribe
            </button>
        </div>

     </section>
    )
}

export default Newsletter