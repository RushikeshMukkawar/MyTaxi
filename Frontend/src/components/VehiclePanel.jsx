import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 onClick={()=>{
          props.setVehiclePanel(false);
        }} className='p-1 w-[96%] text-center absolute top-0'><i className="ri-arrow-down-wide-line text-3xl text-gray-200"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>

        {/* Car */}
        <div onClick={()=>{
            props.setConfirmRidePanel(true);
        }} className='flex border-2 mb-2 active:border-black rounded-xl w-full p-3 justify-between items-center'>
          <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_352/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png" alt="car.png" />
          <div className='w-1/2 ml-2'>
            <h4 className='font-medium text-base'>MyTaxiGo <span><i className="ri-user-3-fill"></i> 4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'>$193.20</h2>
        </div>

        {/* Bike */}
        <div onClick={()=>{
            props.setConfirmRidePanel(true);
        }} className='flex border-2 mb-2 active:border-black rounded-xl w-full p-3 justify-between items-center'>
          <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="bike.png" />
          <div className='w-1/2 ml-2'>
            <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i> 1</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, motercycle rides</p>
          </div>
          <h2 className='text-lg font-semibold'>$65.32</h2>
        </div>

        {/* Auto */}
        <div onClick={()=>{
            props.setConfirmRidePanel(true);
        }} className='flex border-2 mb-2 active:border-black rounded-xl w-full p-3 justify-between items-center'>
          <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="auto.png" />
          <div className='w-1/2 ml-2'>
            <h4 className='font-medium text-base'>Auto <span><i className="ri-user-3-fill"></i> 3</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, auto rides</p>
          </div>
          <h2 className='text-lg font-semibold'>$111.32</h2>
        </div>
    </div>
  )
}

export default VehiclePanel