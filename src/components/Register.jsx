import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Register = () => {
  // State to store input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Navigation hook to redirect the user

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register Data:', formData);

    // Save registered user in localStorage (Mock Database in real-world)
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    registeredUsers.push(formData); // Add the new user to the list
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

    toast.success('You have successfully registered.');
    
    // Redirect to login page after successful registration
    navigate('/login');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-400">Register</h2>
      <div className="mt-10 max-w-2xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-neutral p-6 rounded-lg shadow-lg text-neutral-content shadow-cyan-500/50"
        >
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-white py-3">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              className="input input-bordered w-full bg-neutral-focus text-neutral-content"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-white py-3">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full bg-neutral-focus text-neutral-content"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-white py-3">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full bg-neutral-focus text-neutral-content"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn bg-cyan-400 hover:bg-cyan-500 text-white w-full">Register</button>
        </form>
      </div>
    </section>
  );
};

export default Register;
