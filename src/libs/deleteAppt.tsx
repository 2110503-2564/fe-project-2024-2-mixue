

export default async function deleteDentist(id:string,token:any) {


    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/appointments/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to delete appointment");
    }
  
    return await response.json();
  }
  