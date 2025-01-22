import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className='h-screen pt-8 flex justify-between flex-col w-full bg-[#DAD9D3] bg-top bg-no-repeat' style={{ backgroundImage: "url('/background.png')" }}>
            <img className='w-16 ml-8' src="/MyTaxi_logo2.png" alt="MyTaxi" />
            <div className='bg-white pb-8 py-5 px-4'>
                <h2 className='text-2xl font-bold'>Get Started with MyTaxi</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home