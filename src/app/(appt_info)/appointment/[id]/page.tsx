
import Image from "next/image";
import getAppt from '@/libs/getAppt';
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import ApptDeleteBtn from "@/components/ApptDeleteBtn";
import ApptUpdateBtn from "@/components/ApptUpdateBtn";
import { format } from "date-fns"; 

export default async function ApptDetail({params}: {params:{id:string}}){

    const appt = await getAppt(params.id);
    const session = await getServerSession(authOptions);

    console.log(appt)
    return(
        <div className="text-center p-5 flex flex-col">
            
            <div className="flex flex-row my-5">
              
                <Image src={'/img/denPic.png'}
                    alt= 'veneu img'
                    width={0} height={0} sizes ='100vw'
                    className = 'rounded-lg w-[30%]'/>

                    <div className="flex flex-col m-3 gap-3 ">
                        <div className="flex flex-row gap-7">
                            <h1 className="font-bold text-4xl mr-2">{format(new Date(appt.data.apptDate), "dd/MM/yyyy")}</h1>
                            <h1 className="font-bold text-3xl ">{format(new Date(appt.data.apptDate), "hh:mm a ")}</h1>
                    </div>
                        <div className="bg-slate-100 px-20 pt-5 pb-6 rounded">
                        <h1 className="font-bold text-3xl mb-2">Dentist Detail</h1>
                            <table className=" table-auto border-separte border-spacing-4">
                            <tbody>

                                <tr>
                                    <td className="font-semibold">Name: </td>
                                    <td className="px-5">{appt.data.dentist.name}</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">Year of Experience:</td>
                                    <td className="px-5">{appt.data.dentist.yearOfEx}</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">Area of Expertise:</td>
                                    <td className="px-5">{appt.data.dentist.areaOfExpertise}</td>
                                </tr>
                                
                            
                            </tbody>
                            </table>
                    
                        </div>

                        <div className="bg-slate-100 px-20 pt-5 pb-6">
                        <h1 className="font-bold text-3xl mb-2">Patitent Detail</h1>
                        <table className=" table-auto border-separte border-spacing-4">
                        <tbody>

                            <tr>
                                <td className="font-semibold">Paitient: </td>
                                <td className="px-5">{appt.data.user.name}</td>
                            </tr>
                            <tr>
                                <td className="font-semibold">Tel.</td>
                                <td className="px-5">{appt.data.user.tel}</td>
                            </tr>
                            <tr>
                                <td className="font-semibold">Email</td>
                                <td className="px-5">{appt.data.user.email}</td>
                            </tr>
                            
                        
                        </tbody>
                        </table>
                    
                        </div>
                    </div>

            <div className="flex flex-col w-1/5">
            <ApptDeleteBtn token={session?.user.token} id = {appt.data._id}></ApptDeleteBtn>
            <ApptUpdateBtn token={session?.user.token} id = {appt.data._id}></ApptUpdateBtn>
            </div>
        </div>

        </div>
    )
}