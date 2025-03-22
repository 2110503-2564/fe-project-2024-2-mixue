"use client";  

import { useEffect, useState } from "react";  
import { useRouter, useParams } from "next/navigation";  
import { useSession } from "next-auth/react";  
import updateDentist from "@/libs/updateDentist"; 
import { DentistList } from "interfaces";

const UpdateDentistPage = () => {  
  const router = useRouter();  
  const { id } = useParams();
  const { data: session } = useSession();  
  const token = session?.user.token;  

  const [formData, setFormData] = useState<DentistList | null>(null);  
  const [message, setMessage] = useState("");  
  const [isComplete, setComplete] = useState(false);  

  useEffect(() => {  
    const fetchDentist = async () => {  
      if (id) {  
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/dentists/${id}`);  
        const data = await response.json();  
        
        if (data.success) {  
          setFormData({  
            _id: data.data._id,  
            name: data.data.name,  
            yearOfEx: data.data.yearOfEx,  
            areaOfExpertise: data.data.areaOfExpertise,  
          });  
        } else {  
          setMessage("Failed to fetch dentist details.");  
        }  
      }  
    };  

    fetchDentist();  
  }, [id]);  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
    if (formData) {  
      setFormData({ ...formData, [e.target.name]: e.target.value });  
    }  
  };  

  const handleSubmit = async (e: React.FormEvent) => {  
    e.preventDefault();  
    
    if (formData) {  
      try {  
        const result = await updateDentist(formData._id, formData.name, formData.yearOfEx, formData.areaOfExpertise, token);  
        setMessage(`Dentist updated successfully!`);  
        setComplete(true);  
        router.refresh();  
      } catch (error: any) {  
        setMessage(error.message);  
      }  
    }  
  };  

  if (!formData) { return <p>Loading...</p>; }  

  return (  
    <div className="flex flex-col items-center justify-center">  
      {!isComplete ? (  
        <div className="flex flex-col items-center justify-center w-1/3 mx-auto mt-32 p-12 mb-20 bg-white rounded-lg shadow-[0_10px_30px_rgba(0.01,0,0,0.15)]">  
          <h1 className="text-3xl font-bold mb-6 ">Update Dentist</h1>  
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6 rounded-lg w-full justify-center items-center pb-7">  
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="border p-3 rounded-lg w-3/4 shadow-md" required />  
            <input type="number" name="yearOfEx" value={formData.yearOfEx} onChange={handleChange} className="border p-3 rounded-lg w-3/4 shadow-md" required />  
            <input type="text" name="areaOfExpertise" value={formData.areaOfExpertise} onChange={handleChange} className="border p-3 rounded-lg w-3/4 shadow-md" required />  
            <button  
              type="submit"  
              className="bg-cyan-500 text-white p-2 rounded w-1/2 mt-11 hover:bg-cyan-600 shadow-xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-100">  
              Update  
            </button>  
          </form>  
          {message && <p className="mt-4 text-green-500">{message}</p>}  
        </div>  
      ) : (  
        <div className="text-center">  
          <h1 className="mt-4 text-green-500">Dentist updated successfully!</h1>  
          <button  
            type="button"  
            onClick={() => router.push("/dentist")}  
            className="bg-blue-600 text-white p-3 rounded w-full mt-11 hover:bg-blue-800 shadow-xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-100">  
            Back to Dentist Page  
          </button>  
        </div>  
      )}  
    </div>  
  );  
};  

export default UpdateDentistPage;  