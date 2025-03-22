
import Image from "next/image";
import getDentist from '@/libs/getDentist';
import Link from "next/link";

export default async function DentistDetail({params}: {params:{id:string}}){


const dentistDetail = await getDentist(params.id);


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
              
                    <Link href={`/reservation?id=${dentistDetail.data.id}&name=${dentistDetail.data.name}`}>
                        <button className="p-3 px-6 m-4  rounded-lg  
                                bg-[#0D9488] text-white font-poppins text-xl shadow-lg 
                                hover:bg-[#0F766E] transition duration-300">
                            Make Reservation
                        </button>
                        
                    </Link>
                </div>
            </div>
            
        </div>
    )
}