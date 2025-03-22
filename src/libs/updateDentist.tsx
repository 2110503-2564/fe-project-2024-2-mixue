export default async function updateDentist(  
    id: string,  
    name: string,  
    year: number,  
    area: string,  
    token: any  
) {  
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/dentists/${id}`, {  
        method: "PUT",  
        headers: {  
            "Content-Type": "application/json",  
            authorization: `Bearer ${token}`,  
        },  
        body: JSON.stringify({  
            name: name,  
            yearOfEx: year,  
            areaOfExpertise: area  
        }),  
    });  

    const data = await response.json();  

    if (!response.ok || !data.success) {  
        throw new Error(data.message || "Failed to update dentist");  
    }  

    return data;  
}  