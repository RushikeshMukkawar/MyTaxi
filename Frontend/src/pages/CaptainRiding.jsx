import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false);
    const finishRidePanelRef = useRef(null);


    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0)',
            });
        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(100%)',
            })
        }
    }, [finishRidePanel]);


    return (
        <div className='h-screen'>

            <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
                <img className='w-16' src="/logo.png" alt="logo" />
                <Link to='/captain-home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i className="text-lg font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>
            <div className='h-4/5'>
                <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div onClick={()=>{
                setFinishRidePanel(true);
            }} className='flex relative justify-between items-center h-1/5 p-6 bg-yellow-400'>
                <h5 onClick={() => {
                }} className='p-1 w-[96%] text-center absolute top-0'><i className="ri-arrow-down-wide-line text-3xl text-black"></i></h5>
                <h4 className='text-xl font-semibold'>4Km away</h4>
                <button className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
            </div>


            <div ref={finishRidePanelRef} className='fixed z-10 translate-y-full bottom-0 px-3 py-10 pt-12  bg-white w-full '>
                <FinishRide setFinishRidePanel={setFinishRidePanel}/>
            </div>
        </div>
    )
}

export default CaptainRiding