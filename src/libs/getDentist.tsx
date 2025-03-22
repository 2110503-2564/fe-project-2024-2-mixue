export default async function getDentist(id:string) {
    console.log("dentist: "+id)
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/dentists/${id}`, {
        next: { revalidate: 1 }, 
    });
    if(!response.ok){
        throw new Error("Failed to fetch dentist");
    }

    return await response.json();
}

