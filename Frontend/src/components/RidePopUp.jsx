import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
        <h5 onClick={() => {
                props.setRidePopUpPanel(false);
            }} className='p-1 w-[96%] text-center absolute top-0'><i className="ri-arrow-down-wide-line text-3xl text-gray-200"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>
            <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-full '>
                <div className='flex items-center gap-3 '>
                    <img className='h-12 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s" alt="" />
                    <h2 className=' text-lg font-semibold'>Sharadha Kapoor</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>
            <div className='flex gap-2 justify-between flex-col items-center'>
                
                <div className='w-full mt-5'>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>ABC</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>ABCD</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹100</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>

                <div className='flex mt-5 w-full items-center justify-center gap-5'>
                <button onClick={()=>{
                    props.setConfirmRidePopUpPanel(true);
                    props.setRidePopUpPanel(false);
                }} className='rounded-lg bg-green-600 text-white font-semibold p-3 px-8'>Accept</button>
            
                <button onClick={()=>{
                    props.setRidePopUpPanel(false);
                }} className=' rounded-lg bg-gray-300 text-gray-700 font-semibold p-3 px-8'>Ignore</button>
                </div>
            </div>
    </div>
  )
}

export default RidePopUp