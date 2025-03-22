import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function  addAppt(dentistId:string,date:any,userId:string,token:string) {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/dentists/${dentistId}/appointments`,{
    
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            apptDate: date,
            user:userId
        }),

   })
    
   const data = await response.json(); 

    if (!response.ok || !data.success) {
      throw new Error(data.message || "Fail to add appoinment");

      
    }

return data;

    
}