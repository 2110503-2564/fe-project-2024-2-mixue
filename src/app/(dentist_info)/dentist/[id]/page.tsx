import Image from "next/image";
import getDentist from '@/libs/getDentist';
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import DeleteButton from "@/components/DeleteButton";

export default async function DentistDetail({params}: {params:{id:string}}){
    const dentistDetail = await getDentist(params.id);
    const session = await getServerSession(authOptions);
    // console.log(session)
    return(
        <div className="text-center p-5">
           <h1 className="text-3xl font-bold">{dentistDetail.data.name}</h1>
            <div className="flex flex-row my-5">
                <Image src={'/img/denPic.png'}
                alt= 'veneu img'
                width={0} height={0} sizes ='100vw'
                className = 'rounded-lg w-[30%]'/>
                <div className="flex flex-col my-5 items-start">
                    <div className="text-md mx-5">Name: {dentistDetail.data.name}</div>
                    <div className="text-md mx-5">Area of Expertise {dentistDetail.data.areaOfExpertise}</div>
                    <div className="text-md mx-5">Year of Experience: {dentistDetail.data.yearOfEx} years</div>
              

                    <Link href={`/booking?id=${dentistDetail.data.id}&name=${dentistDetail.data.name}`}>
                        <button className="p-3 px-6 m-4  rounded-lg  
                                bg-[#0D9488] text-white font-poppins text-xl shadow-lg 
                                hover:bg-[#0F766E] transition duration-300">
                            Book an Appointment
                        </button>
                        
                    </Link>

            {session?.user.data.role==='admin'?
                    <Link href={`/dentist/${params.id}/appointment`}>
                        <button className="p-3 px-6 m-4  rounded-lg  
                                bg-cyan-500 text-white font-poppins text-xl shadow-lg 
                                hover:bg-cyan-700 transition duration-300">
                            Dentist Appointment List
                        </button>
                        
                    </Link>:""
}
         
                    {session?.user.data.role =='admin' ? 
                    <>
                        <Link href={`/dentist/${params.id}/update`}>  
                            <button className="p-3 px-6 m-4 rounded-lg  
                                    bg-yellow-500 text-white font-poppins text-xl shadow-lg   
                                    hover:bg-yellow-600 transition duration-300">  
                                Update Dentist  
                            </button>  
                        </Link> 
                        <DeleteButton id={params.id} token={session.user.token} />
                    </>
                     : ""}
                </div>
            </div>
            
        </div>
    )
}