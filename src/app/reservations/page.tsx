'use client'

import { useSearchParams } from "next/navigation";
import { TextField,Select, MenuItem,FormLabel } from "@mui/material";
import DateReserve from '@/components/DateReserve';
import { getServerSession } from "next-auth";
import getUserProfile  from "@/libs/getUserProfile";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch, UseDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { ReservationItem } from "../../../interfaces";
import { addReservation } from "@/redux/features/cartSlice";


export default function Reservation() {

    const urlParams = useSearchParams()
    const vid = urlParams.get('id')
    const name = urlParams.get('name')

    const dispatch = useDispatch<AppDispatch>()

    const makeReservation = ()=>{
        if(vid && name && date){
            const item :ReservationItem = {
                    venueId: vid,
                    venueName: name,
                    date: dayjs(date).format("YYYY/MM/DD"),
                    name: "me",
                    tel: "0000000000"
                  
            }
            dispatch(addReservation(item))
            alert("you book the venue")
            console.log(item)
        }
    }

    const [date,setDate] = useState<Dayjs|null>(null);
    

    return (
        <div className="flex flex-col">
          
            <div className="flex flex-col  h-screen gap-8 w-1/4 mx-auto mt-10">
                <h2 className="text-4xl font-bold">Booking {name} venue</h2>

                            <TextField
                            id="name"
                            name="Name-Lastname"  
                            label="Name-Lastname" 
                            variant="standard"    
                            required            
                        />

                            <TextField
                            id="contact"
                            name="Contact-Number"  
                            label="Contact-Number"
                            variant="standard"   
                            required             
                            />

                            <div className="flex flex-row justify-center gap-6 items-center">
                    <FormLabel htmlFor="venue">Select Venue</FormLabel>
                            <Select id="venue">
                                <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                                <MenuItem value="Spark">Spark Space</MenuItem>
                                <MenuItem value="GrandTable">The Grand Table</MenuItem>
                            </Select>
                            </div>
                            
                            <DateReserve onDateChange={(value:Dayjs)=>{setDate(value)}}/>



                            <button  onClick={makeReservation}
                    name="Book Venue"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300"
                >
                    Book Venue
                </button>
                            </div>
                </div>
    );
}

