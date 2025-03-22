import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import getAppts from "@/libs/getAppts";
import ApptList from "@/components/ApptList";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function Appt() {

  const session = await getServerSession(authOptions);

  if (!session || !session.user.token) {
    return redirect("/api/auth/signin"); 
  }


  const appts =  getAppts();

  if (!appts) {
    return (
      <div className="text-center text-red-500">
        <h1 className="text-3xl font-bold mt-8">Failed to Load Appointments</h1>
        <p>Please try again later.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-9 mb-2">Appointments List</h1>
      <ApptList apptsJson={appts} /> 
    </div>
  );
}
