import Link from "next/link";
import Card from "./Card";
import { DentistJson, DentistList as denList } from "../../interfaces"; // Import the correct interfaces
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { redirect } from "next/dist/server/api-utils";

export default async function DentistList({ dentistsJson }: { dentistsJson: Promise<DentistJson> }) {
   
    const session = await getServerSession(authOptions)
    const dentistJsonReady = await dentistsJson;

    return (
        <div className="mr-2 ml-2 ">
               
                <h2 className="text-lg text-center m-1">
                     With {dentistJsonReady.count} specialists across various fields,</h2>
                <h2 className="text-xl text-center font-bold mt-6">
                    you can choose the perfect expert for your needs.
                </h2>

{session?.user.role==='admin'?
                <Link href={'/dentist/addDentist'}>
                <button  className="bg-teal-600 text-white p-2 rounded w-1/5 mt-8 mb-3 mx-auto mx-auto block
                    hover:bg-teal-800 shadow-xl 
                    hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-100">
                    add Dentist
                </button>
                </Link>
                :""
               
}

            <div className="flex flex-row flex-wrap mt-0 pt-1 p-10 justify-center">
            {dentistJsonReady.data.map((dentist:denList) => (
                <div key={dentist._id} className="w-1/4 max-w-[350px]"> 
                    <Link href={`/dentist/${dentist._id}`} className="block p-5">
                        <Card 
                            dentistName={dentist.name} 
                            imgSrc={'/img/denPic.png'} 
            
                        />
                    </Link>
                </div>
            ))}
        </div>
        </div>
    );
}
