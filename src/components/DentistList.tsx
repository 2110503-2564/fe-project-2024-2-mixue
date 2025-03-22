import Link from "next/link";
import Card from "./Card";
import { DentistJson, DentistList as denList } from "../../interfaces"; // Import the correct interfaces

export default async function DentistList({ dentistsJson }: { dentistsJson: Promise<DentistJson> }) {
    const dentistJsonReady = await dentistsJson;
    return (
        <div className="mr-2 ml-2">
                <h2 className="text-lg text-center m-1">
                     With {dentistJsonReady.count} specialists across various fields,</h2>
                <h2 className="text-xl text-center font-bold mt-6">
                    you can choose the perfect expert for your needs.
                </h2>

               


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
