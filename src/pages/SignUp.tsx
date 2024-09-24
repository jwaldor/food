import React, { useState } from 'react';
import { VendorService } from '../services/vendor';
const SignUp = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Submitted:', form);
    const token = await VendorService.signUp(form.email, form.password);
    document.cookie = `token=${token}`;
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Get started for free.</h1>
      <p className="text-lg text-center mb-2">
        Join and create a menu immediately.
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 bg-gray-200 text-gray-800 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full p-3 bg-gray-200 text-gray-800 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <div className="flex justify-center items-center mt-5">
          <button className="bg-green-500 text-white rounded-full w-fit p-5 font-bold">Join Gourmet Galaxy</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
