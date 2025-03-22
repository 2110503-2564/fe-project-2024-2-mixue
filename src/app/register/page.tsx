"use client";

import { useState } from "react";
import userRegister from "@/libs/userRegister"; 
import { useRouter } from "next/navigation"; 

export default function RegisterPage() {
  const [formData, setFormData] = useState({ name: "", email: "", tel: "", password: "" });
  const [message, setMessage] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const router = useRouter(); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await userRegister(formData.name, formData.email, formData.tel, formData.password);
      setMessage(`User registered successfully! Welcome, ${result.name}`);
      setIsRegistered(true);
    } catch (error: any) {
      console.log(error)
      setMessage(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
        {!isRegistered?
        <div className="flex flex-col items-center justify-center w-1/3 mx-auto mt-32 p-12 mb-20 
            bg-white rounded-lg shadow-[0_10px_30px_rgba(0.01,0,0,0.15)]">

              <h1 className="text-3xl font-bold mb-6 ">Register</h1>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4 rounded-lg w-full justify-center items-center pb-2">
                <input type="text" name="name" placeholder="Name" onChange={handleChange} className="border p-3 rounded-lg w-3/4 shadow-md" required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} className="border p-3 rounded-lg w-3/4 shadow-md" required />
                <input type="text" name="tel" placeholder="Tel. (000-000-0000)" onChange={handleChange} className="border p-3 rounded-lg w-3/4 shadow-md" required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} className="border p-3 rounded-lg w-3/4 shadow-md" required />
                <button
                  type="submit"
                  className="bg-blue-600 text-white p-2 rounded w-1/2 mt-11
                      hover:bg-blue-800 shadow-xl 
                      hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-100">
                  Register
                </button>
              </form>
              
              {message && <p className="mt-4 text-green-500">{message}</p>}
            </div>: 
                <div className="text-center">
                <h1 className="mt-4 text-green-500">Your account has been created successfully!</h1>
                <button
                  type="button" 
                  onClick={() => router.push("/api/auth/signin")}  // Not a form submission, so "button" instead of "submit"
                  className="bg-blue-600 text-white p-2 rounded w-full mt-11
                    hover:bg-blue-800 shadow-xl 
                    hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-100">
                  Go to login page
                </button>
              </div>
        }
    </div>
    
  );
}
