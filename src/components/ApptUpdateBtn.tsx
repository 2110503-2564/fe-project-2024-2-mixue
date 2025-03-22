"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; 
import updateAppt from "@/libs/updateAppt";
import DateReserve from "./DateReserve";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export default function ApptUpdateBtn({ id, token }: { id: string; token: any}) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const router = useRouter();
  const [date, setDate] = useState<Dayjs | null>(null);

  async function handleUpdate() {
    const confirmUpdate = window.confirm("Are you sure you want to Update this Appointment?");
    if (!confirmUpdate) return;

    setIsUpdating(true);

    try {
      console.log(date);
      console.log(dayjs(date).utc().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'))
      const formattedDate = dayjs(date).utc().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
      console.log(formattedDate);
        await updateAppt(id, formattedDate, token);
        alert("Appointment Updated successfully!");
        router.push('/appointment')
        router.refresh();
     
      } catch (error) {
        alert("Failed to Update Appointment.");
      }

    setIsUpdating(false);
  }

  return (
    <div className="flex justify-center">
      { isClick?
    <div className=" p-4 m-2 bg-[#FFF6D9] rounded ">
      <DateReserve onDateChange={setDate}></DateReserve>
      <button
        onClick={handleUpdate} 
        className="p-3 px-6 m-4 rounded-lg bg-yellow-500 text-white font-poppins text-xl shadow-lg 
                  hover:bg-yellow-800 transition duration-300 disabled:opacity-50"
        disabled={isUpdating}>

        {isUpdating ? "Updating..." : "Update"} 
      </button>

    </div> :
    
    <button
    onClick={()=>setIsClick(true)} 
    className="w-6/7 p-3 m-2 rounded-lg bg-yellow-500 text-white font-poppins text-xl shadow-lg px-24
                     hover:bg-yellow-800 transition duration-300 disabled:opacity-50"
          disabled={isUpdating}
  >

    {isUpdating ? "Updating..." : "Update"} 
  </button>
}
</div>
  );
}
