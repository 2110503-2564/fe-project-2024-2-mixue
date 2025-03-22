"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import getDentists from "@/libs/getDentists";
import addAppt from "@/libs/addAppt";
import DateReserve from "./DateReserve";
import dayjs, { Dayjs } from "dayjs";
import { DentistJson, DentistList } from "interfaces";
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export default function BookingForm({userId,dentists,token}:{userId:string, dentists:DentistJson,token:string}) {

  const [dentist,setDentist] = useState("");
  const [date, setDate] = useState<Dayjs | null>(null);
  
  const [message, setMessage] = useState("");
  const [isBooked, setBooked] = useState(false);
  const router = useRouter();
  console.log(userId)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const formattedDate = dayjs(date).utc().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
    console.log(formattedDate);
      await addAppt(dentist, formattedDate, userId,token);
      setBooked(true);
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {!isBooked ? (
        <div className="flex flex-col items-center justify-center w-1/3 mx-auto mt-10 p-12 mb-20 bg-white rounded-lg shadow-[0_10px_30px_rgba(0.01,0,0,0.15)]">
          <h1 className="text-3xl font-bold mb-8">Appointment Booking</h1>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-8 w-full justify-center items-center pb-10">

       <DateReserve onDateChange={setDate}></DateReserve>

            <select
              name="dentist"
              onChange={(e) => setDentist(e.target.value)}
              required
              className="border p-2 rounded w-3/4"
            >
              <option value="">Select a Dentist</option>
              {dentists.data.map((dentist:DentistList) => (
                <option key={dentist._id} value={dentist._id}>
                  {dentist.name}
                </option>
              ))}
            </select>

            <button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded w-1/2 mt-4 hover:bg-blue-800 shadow-xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-100"
            >
              Book Appointment
            </button>
          </form>

          {message && <p className="mt-4 text-red-500">{message}</p>}
        </div>
      ) : (
        <div className="text-center">
          <h1 className="mt-4 text-green-500">Your appointment has been created successfully!</h1>
          <button
            type="button"
            onClick={() => router.push("/appointment")}
            className="bg-blue-600 rounded-lg text-white p-2 rounded w-full mt-4 hover:bg-blue-800 shadow-xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-100"
          >
            Go to see your appointment
          </button>
        </div>
      )}
    </div>
  );
}
