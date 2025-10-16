import React from 'react'

function Loading() {
  return (
    <div className='flex items-center flex-wrap justify-center h-auto bg-white w-[100%] gap-6'>
            {
                // adds a dummy laoding icon with ping animation
                [...Array(12)].map((_, i) => (
                    <div key={i} className='w-[70%] md:w-[30%] flex flex-row md:flex-col md:flex-wrap items-center justify-center h-60 rounded-lg shadow-md bg-gray-300 animate-pulse gap-3'>
                        <div className='h-[45%] w-[80%] rounded-xl bg-gray-200 animate-pulse'></div>
                        <div className='h-[10%] w-[80%] rounded-xl bg-gray-200 animate-pulse'></div>
                        <div className='h-[10%] w-[80%] rounded-xl bg-gray-200 animate-pulse'></div>
                        <div className='h-[10%] w-[80%] rounded-xl bg-gray-200 animate-pulse'></div>
                    </div>
                ))

            }

        </div>
  )
}

export default Loading