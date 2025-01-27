import React from 'react'

const ConfirmRide = (props) => {
    return (
        <div>
            <h5 onClick={() => {
                props.setConfirmRidePanel(false);
            }} className='p-1 w-[96%] text-center absolute top-0'><i className="ri-arrow-down-wide-line text-3xl text-gray-200"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>

            <div className='flex gap-2 justify-between flex-col items-center'>
                <img className='h-22' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_352/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png" alt="car.png" />

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

                <button onClick={()=>{
                    props.setVehicleFound(true);
                    props.setConfirmRidePanel(false);
                }} className='w-full mt-5 bg-green-600 text-white font-semibold p-2 '>Confirm</button>
            </div>
        </div>
    )
}

export default ConfirmRide