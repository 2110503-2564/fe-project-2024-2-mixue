"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; 
import addDentist from "@/libs/addDentist";
import { useSession, signIn, signOut } from "next-auth/react";

export default function DentistForm() {
  const [formData, setFormData] = useState({ name: "", year:0, area: ""});
  const [message, setMessage] = useState("");
  const [isComplete, setComplete] = useState(false);
  const router = useRouter(); 
  const { data: session, status } = useSession();

  const token = session?.user.token;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await addDentist(formData.name, formData.year, formData.area, token);
      setMessage(`User registered successfully! Welcome, ${result.name}`);
      setComplete(true)
    } catch (error: any) {
      console.log(error)
      setMessage(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
        {!isComplete?
        <div className="flex flex-col items-center justify-center w-1/3 mx-auto mt-32 p-12 mb-20 
            bg-white rounded-lg shadow-[0_10px_30px_rgba(0.01,0,0,0.15)]">

              <h1 className="text-3xl font-bold mb-6 ">Add New Dentist</h1>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-6 rounded-lg w-full justify-center items-center pb-7">
                <input type="text" name="name" placeholder="Dentist Name" onChange={handleChange} className="border p-3 rounded-lg w-3/4 shadow-md" required />
                <input type="number" name="year" placeholder="Year of Experience" onChange={handleChange} className="border p-3 rounded-lg w-3/4 shadow-md" required />
                <input type="text" name="area" placeholder="Area of Expertise" onChange={handleChange} className="border p-3 rounded-lg w-3/4 shadow-md" required />
                <button
                  type="submit"
                  className="bg-cyan-500 text-white p-2 rounded w-1/2 mt-11
                      hover:bg-cyan-600 shadow-xl 
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
                  onClick={() => router.push("/dentist")}  // Not a form submission, so "button" instead of "submit"
                  className="bg-blue-600 text-white p-3 rounded w-full mt-11
                    hover:bg-blue-800 shadow-xl 
                    hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-100">
                  Back to DentistList Page
                </button>
              </div>
        }
    </div>
    
  );
}
