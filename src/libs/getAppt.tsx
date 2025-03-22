export default async function getAppt(id:string) {
    
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/appointments/${id}`);
    if(!response.ok){
        throw new Error("Failed to fetch appointment");
    }

    return await response.json();
}