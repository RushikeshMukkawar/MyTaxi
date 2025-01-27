import React from 'react';
import 'remixicon/fonts/remixicon.css';

const LocationSearchPanel = (props) => {
    const locations =[
        "24B, Near Kapoor's cafe, Sheriyans coding School, Udgir.",
        "24B, Near Kapoor's cafe, Sheriyans coding School, Udgir.",
        "24B, Near Kapoor's cafe, Sheriyans coding School, Udgir.",
        "24B, Near Kapoor's cafe, Sheriyans coding School, Udgir.",
    ]
  return (
    <div>
        {
            locations.map(function(elem, idx){
                return (
                    <div key={idx} onClick={()=>{
                        props.setVehiclePanel(true);
                        props.setPanelOpen(false);
                    }} className='flex gap-4 border-2 border-gray-50 active:border-black p-3 rounded-xl my-2 items-center justify-start'>
                        <h2 className='bg-[#eee] flex items-center justify-center h-8 w-8 rounded-full'><i className="ri-map-pin-line"></i></h2>
                        <h4 className='font-medium'>{elem}</h4>
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default LocationSearchPanel