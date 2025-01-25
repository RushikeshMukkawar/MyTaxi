import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {UserDataContext} from '../context/UserContext';

const UserSignup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userData, setUserData] = useState({});

    const navigate = useNavigate();
    const {user, setUser } = useContext(UserDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();
        
        const newUser = {
            email: email,
            password: password,
            fullname: {
                firstname: firstName,
                lastname: lastName
            }
        };

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
        if(response.status === 201) {
            const data = response.data;
            setUser(data.user);
            localStorage.setItem('token', data.token);
            navigate('/home');
        }


        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }

    return (
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
                <img className='w-16 mb-6 rounded-full' src="/MyTaxi_logo2.png" alt="MyTaxi" />

                <form onSubmit={(e) => {
                    submitHandler(e);
                }}>
                    <h3 className="text-lg w-full font-medium mb-2">What's your name</h3>
                    <div className='flex gap-4 justify-between mb-5'>
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


                    <h3 className="text-lg font-medium mb-2">What's your email</h3>
                    <input
                        className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
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
                        className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        required
                        type="password"
                        placeholder="XXXXXXXX"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <button
                        className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-base"
                    >Create Account</button>

                </form>
                <p className="text-center">Already have a account? <Link to='/login' className="text-blue-600">Login here</Link></p>
            </div>

            <div>
                <p className='text-[10px] mt-2 leading-tight'>By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from MyTaxi and it's affiliates to the number provided. </p>
            </div>
        </div>
    )
}

export default UserSignup