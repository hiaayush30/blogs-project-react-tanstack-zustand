import React, { type FC } from 'react'

const HomePage: FC = () => {
    return (
        <div className='container mx-auto p-4'>
           <h1 className='text-3xl font-bold mb-4'>Welcome to the blog App!</h1>
            <p>This is the Home page. Posts will be listed here</p>
        </div>
    )
}

export default HomePage
