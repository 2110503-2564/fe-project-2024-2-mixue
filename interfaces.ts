export interface DentistJson {
    success: boolean,
    count: number,
    data: DentistList[]
}

export interface DentistList {
    _id:string
    name:string
    yearOfEx:number
    areaOfExpertise:string
}


export interface ApptJson {
    success: boolean,
    count: number,
    data: Appt[]
}

export interface Appt{
    _id:string
    apptDate:Date
    user:User
    dentist:DentistList
    status:string
    createdAt:Date
}

export interface ReservationItem{
    venueId:string
    venueName: string
    date: string
    name: string
    tel: string
}

export interface User{
    _id:string
    name:string
    email:string
    tel:string
    role:string
    password:string
}
