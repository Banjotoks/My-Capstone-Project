import React, { useState } from 'react';

function SignUp() {
  const [name, setName] = useState('')
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100  p-4 sm:p-6 md:p-8'>
      <h1 className='text-4xl font-bold text-center mb-8'>Movie Code</h1>
      <h2 className='text-2xl font-bold mb-6 text-center'>Create an account</h2>
      <form onSubmit={handleSubmit} className='max-w-xs sm:max-w-sm md:max-w-md'>
        <div className='mb-4'>
        <label>Name:</label>
          <input
          type='text'
          value={name}
          onChange={(e) => setEmail(e.target.value)}
          required className='border border-black rounded-lg p-2 w-full'
          />
        </div>

        <div className='mb-4'>
          <label>Email:</label>
          <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required className='border border-black rounded-lg p-2 w-full'
          />
        </div>

        <div className='mb-4'>
        <label>Password:</label>
          <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required className='border border-black rounded-lg p-2 w-full'
          />
        </div>
        <button type='submit' className= "bg-green-500 hover:bg-sky-700 mb-2 font-bold py-2 px-4 rounded-lg w-full text-center">Submit</button>
        <h5 className='text-center'>or</h5>
        <h3 className='text-center'>------------Login----------</h3>
        </form>

      <footer className='bg-black text-white text-center py-4 w-full mt-auto'>
        <p text-sm>© Movie Code. All rights reserved</p>
      </footer>
    </div>
  ); 
}

export default SignUp;