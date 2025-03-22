import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { ReservationItem } from "../../../interfaces";

type CartState = {
    venueItems:ReservationItem[]
}
const initialState:CartState = {venueItems:[]}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addReservation:(state,action:PayloadAction<ReservationItem>)=>{
            state.venueItems.push(action.payload);
        },
        removeReservation:(state,action:PayloadAction<ReservationItem>)=>{
            
            const  remainItems = state.venueItems.filter(obj=>{
                return ((obj.venueName!== action.payload.venueName)
                || (obj.date!== action.payload.date)
                || (obj.name!== action.payload.name)
            
            )
            })
            state.venueItems = remainItems;
                    }
    }
})

export const {addReservation,removeReservation}  = cartSlice.actions
export default cartSlice.reducer

