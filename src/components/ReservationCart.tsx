'use client'
import { useAppSelector , AppDispatch} from "@/redux/store"
import { useDispatch, UseDispatch } from "react-redux"
import { removeReservation } from "@/redux/features/cartSlice"
export default function ResevervationCart(){
    const  veneuItem = useAppSelector((state)=>state.cartSlice.venueItems)
    //console.log ("map size:" + veneuItem.length)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <>
        {
            veneuItem.map((reservationItem)=>(
                <div className="bg-slate-200 rounded p-5 m-2" 
                key={reservationItem.venueId}>
                    <div className="text-2xl">Venuen Name: {reservationItem.venueName}</div>
                    <div className="text-2xl">Date: {reservationItem.date}</div>
                    <div className="text-2xl">Name: {reservationItem.name}</div>
                    <button className="block rounded-md bg-red-600 hover:bg-red:600 p-2 mt-2 text-white font-bold"
                    onClick={()=>dispatch(removeReservation(reservationItem))}>Remove</button>

                </div>
            ))
        }
        </>
    )
}