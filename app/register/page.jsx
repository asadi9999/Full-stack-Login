
'use client'
import { useState } from 'react';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/register', { username, password });
      alert(response.data.message);
      setUsername('');
      setPassword('');
    } catch (error) {
      console.error('Failed to register user', error);
      alert('Failed to register user');
    }
  };

  return (
    <>
      <div className=" grid md:grid-cols-4 mt-10">
        <form onSubmit={handleSubmit} className=' col-start-2 col-span-2 bg-[#212223] flex flex-col gap-8 justify-center w-[50rem] p-5 rounded-2xl'>
          <h1>Register</h1>
          <input className=' text-white text-xl outline-none h-10 rounded-md bg-[#2d2e2f]'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <input className=' text-white text-xl outline-none h-10 rounded-md bg-[#2d2e2f]'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}

export default Register;
