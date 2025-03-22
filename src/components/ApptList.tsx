

import { format } from "date-fns"; 
import { Appt, ApptJson } from "../../interfaces"; // Import the correct interfaces


export default async function ApptList({ apptsJson }: { apptsJson: Promise<ApptJson> }) {

  
   const apptJsonReady = await apptsJson;
    
    return (
        <div className="mr-2 ml-2">

            <div className="flex flex-col flex-wrap mt-0 pt-1 p-10 justify-center">
            {apptJsonReady.data.map((appt:Appt) => (  
                            
                <div className="bg-soft hover:bg-accent 
                            px-20 pt-5 pb-6 m-3 rounded-xl 
                            transform hover:scale-[1.01] 
                            transition-all duration-300 ease-in-out
                            shadow-md hover:shadow-xl">

                <h1 className="font-bold text-3xl mb-2">{format(new Date(appt.apptDate), "hh:mm a - dd/MM/yyyy")}</h1>
                <table className=" table-auto border-separte border-spacing-4">
                    <tbody>
                        <tr>
                            <td className="font-semibold">Dentist:</td>
                            <td className="px-5">{appt.dentist.name}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold">Paitient: </td>
                            <td className="px-5">{appt.user.name}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold">Tel.</td>
                            <td className="px-5">{appt.user.tel}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold">Status</td>
                            <td className="px-5">{appt.status}</td>
                        </tr>
                     
                    </tbody>
                </table>

                </div>
            ))}
        </div>
        </div>
    );
}
