import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainSignup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [captainData, setCaptainData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();

        setCaptainData({
            email: email,
            password: password,
            fullName: {
                firstName: firstName,
                lastName: lastName
            }
        });

        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }

    return (
        <div className="py-5 px-5 h-screen flex flex-col justify-between">
            <div>
                <img className='w-20 mb-10 rounded-full' src="/MyTaxi_logo3.png" alt="MyTaxi" />

                <form onSubmit={(e) => {
                    submitHandler(e);
                }}>
                    <h3 className="text-lg w-full font-medium mb-2">What's our Captain name</h3>
                    <div className='flex gap-4 justify-between mb-7'>
                        <input
                            className="bg-[#eeeeee] rounded w-1/2 px-4 py-2 border text-lg placeholder:text-base"
                            required
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                        />
                        <input
                            className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
                            required
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                        />
                    </div>


                    <h3 className="text-lg font-medium mb-2">What's our Captain email</h3>
                    <input
                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        required
                        type="email"
                        placeholder="john@deo.com"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <h3 className="text-lg font-medium mb-2">Enter Password</h3>
                    <input
                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        required
                        type="password"
                        placeholder="XXXXXXXX"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <button
                        className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base"
                    >Login</button>

                </form>
                <p className="text-center">Already have a account? <Link to='/captain-login' className="text-blue-600">Login here</Link></p>
            </div>

            <div>
                <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
            </div>
        </div>
    )
}

export default CaptainSignup