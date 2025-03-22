
export default async function addDentist(name:string, year:number, area:string,token:string) {

   const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/dentists`,{
    

    method: "POST",
    headers:{
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
        name:name,
        yearOfEx:year,
        areaOfExpertise:area
    }),

})

const data = await response.json(); 

if (!response.ok || !data.success) {
  throw new Error(data.message || "Fail to add appoinment");

  
}

return data;


}