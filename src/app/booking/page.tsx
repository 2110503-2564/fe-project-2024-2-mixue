import { TextField,Select, MenuItem,FormLabel } from "@mui/material";
import DateReserve from '@/components/DateReserve';
import { getServerSession } from "next-auth";
import getUserProfile  from "@/libs/getUserProfile";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";


export default async function Booking() {

    const session = await getServerSession(authOptions)
    if(!session||!session.user.token)return null

    const profile = await getUserProfile(session.user.token);
    var createdAt = new Date(profile.data.createdAt);

    return (
        <div className="flex flex-col">
            <div className="bg-slate-100 px-20 pt-5 pb-6">
                <h1 className="font-bold text-3xl mb-2">{profile.data.name}</h1>
                <table className=" table-auto border-separte border-spacing-4">
                    <tbody>
                        <tr>
                            <td className="font-semibold">Name</td>
                            <td className="px-5">{profile.data.name}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold">Email</td>
                            <td className="px-5">{profile.data.email}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold">Tel.</td>
                            <td className="px-5">{profile.data.tel}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold">Member Since</td>
                            <td className="px-5">{createdAt.toString()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col  h-screen gap-8 w-1/4 mx-auto mt-10">
                <h2 className="text-4xl font-bold">Booking</h2>

                            <TextField
                            id="name"
                            name="Name-Lastname"  
                            label="Name-Lastname" 
                            variant="standard"    
                            required            
                        />

                            <TextField
                            id="contact"
                            name="Contact-Number"  
                            label="Contact-Number"
                            variant="standard"   
                            required             
                            />

                            <div className="flex flex-row justify-center gap-6 items-center">
                    <FormLabel htmlFor="venue">Select Venue</FormLabel>
                            <Select id="venue">
                                <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                                <MenuItem value="Spark">Spark Space</MenuItem>
                                <MenuItem value="GrandTable">The Grand Table</MenuItem>
                            </Select>
                            </div>
                            
   

                            <button 
                    name="Book Venue"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300"
                >
                    Book Venue
                </button>
                            </div>
                </div>
    );
}

