import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import {  ApptJson } from "../../interfaces";
import { getServerSession } from "next-auth";


export default async function getAppts(): Promise<ApptJson|null> {
  await new Promise(resolve => setTimeout(resolve, 300));

  try{
  const session = await getServerSession(authOptions);
 
  if (!session || !session.user?.token) {
    console.error("Unauthorized: Missing session or admin token.");
    return null; 
  }

  const response = await fetch(`${process.env.BACKEND_URL}/api/v1/appointments`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${session.user.token}` // ✅ Send admin token
    },
    
  });

  if (!response.ok) {
    throw new Error("Failed to fetch appointments");
  }

  const data = await response.json();

  return JSON.parse(JSON.stringify(data));
}catch(error){
  console.error("Fetch error in getAppts:", error);
  return null;
}
}
