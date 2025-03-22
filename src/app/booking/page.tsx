import { TextField,Select, MenuItem,FormLabel } from "@mui/material";
import DateReserve from '@/components/DateReserve';
import { getServerSession } from "next-auth";
import getUserProfile  from "@/libs/getUserProfile";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import BookingForm from "@/components/BookingForm";
import getDentists from "@/libs/getDentists";


export default async function Booking() {

    const session = await getServerSession(authOptions)
    if(!session||!session.user.token)return null

    const profile = await getUserProfile(session.user.token);
    var createdAt = new Date(profile.data.createdAt);

    const dentist = getDentists();
    const dentistJsonReady = await dentist;

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
           <BookingForm userId={profile.data._id} dentists={dentistJsonReady} userTo={session.user.token}>

           </BookingForm>
                </div>
    );
}

