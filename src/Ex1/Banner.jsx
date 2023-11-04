import React from 'react'

export default function Banner() {
  return (
    <div className='pt-5' >
            <div className='container mb-5'>
                <div className='p-4 p-lg-5 text-center bg-light'>
                    <div className='text-primary'>
                        <h1>A warm welcome!</h1>
                    </div>
                    <div className='fs-4'>
                        <h5>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</h5>
                    </div>
                    <button className='btn btn-danger mt-2'>Call to action</button>
                </div>
        </div>
    </div>
  )
}
