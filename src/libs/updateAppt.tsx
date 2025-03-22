
export default async function  updateAppt(apptId:string,date:any,token:any) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/appointments/${apptId}`,{
    
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            apptDate: date
        }),

   })
    
   const data = await response.json(); 

    if (!response.ok || !data.success) {
      throw new Error(data.message || "Fail to add appoinment");

      
    }

return data;

    
}