import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function deleteDentist(id:string) {

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/dentists/${id}`);
   
    if(!response.ok){
        throw new Error("Failed to fetch dentist");
    }

    return await response.json();
}

