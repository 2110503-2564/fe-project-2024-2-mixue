
'use client'
import { format } from "date-fns"; 
import { Appt, ApptJson } from "../../interfaces"; // Import the correct interfaces
import ApptDeleteBtn from "./ApptDeleteBtn";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function ApptList({ apptsJson,token }: { apptsJson: any,token:any }) {

    const router = useRouter();
    const [showing,setShowing] = useState("all")
  
   
  const apptJsonReady = typeof apptsJson?.value === "string"
  ? JSON.parse(apptsJson.value)
  : apptsJson;

   console.log(apptJsonReady)
  

  
    return (
        <div className="mr-2 ml-2">
        <div className="flex flex-row justify-center mt-3 ">
            <button className="p-2 px-6 m-4 rounded-lg bg-teal-500 text-white font-poppins text-xl shadow-lg 
                 hover:bg-teal-800 transition duration-300 disabled:opacity-50"
                 onClick={() => setShowing("all")}
                 >
            All appointments 
            </button>
            <button className="p-2 px-6 m-4 rounded-lg bg-teal-500 text-white font-poppins text-xl shadow-lg 
                 hover:bg-teal-800 transition duration-300 disabled:opacity-50"
                 onClick={() => setShowing("completed")}>
                Complete
            </button>
            <button className="p-2 px-6 m-4 rounded-lg bg-teal-500 text-white font-poppins text-xl shadow-lg 
                 hover:bg-teal-800 transition duration-300 disabled:opacity-50"
                 onClick={() => setShowing("upcoming")}>
                Upcoming
            </button>
        </div>

            <div className="flex flex-col flex-wrap mt-0 pt-1 p-10 justify-center">
            {
            apptJsonReady?.data?.filter((appt: Appt) =>
                showing === "all" ? true : appt.status === showing).map((appt:Appt) => (  
                            
                <div className="bg-soft hover:bg-accent 
                            px-20 pt-5 pb-6 m-3 rounded-xl 
                            transform hover:scale-[1.01] 
                            transition-all duration-300 ease-in-out
                            shadow-md hover:shadow-xl">

                <h1 className="font-bold text-3xl mb-2">{format(new Date(appt.apptDate), "hh:mm a - dd/MM/yyyy")}</h1>
                <table className=" table-auto border-separte border-spacing-4">
                    <tbody>
                        <tr>
                            <td className="font-semibold">Dentist:</td>
                            <td className="px-5">{appt.dentist.name}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold">Paitient: </td>
                            <td className="px-5">{appt.user.name}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold">Tel.</td>
                            <td className="px-5">{appt.user.tel}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold">Status</td>
                            <td className="px-5">{appt.status}</td>
                        </tr>
                     
                    </tbody>
                </table>
                <div>
                <button
                    onClick={()=>router.push(`/appointment/${appt._id}`)}
                    className="p-3 px-6 m-4 rounded-lg bg-teal-500 text-white font-poppins text-xl shadow-lg 
                    hover:bg-teal-800 transition duration-300 disabled:opacity-50">
                Details
                </button>

                </div>
                </div>
            ))
            
            }
        </div>
        </div>
    );
}
