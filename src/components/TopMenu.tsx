import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function TopMenu(){

const session = await getServerSession(authOptions)
    return (
        <div className="h-12 bg-primary fixed top-0 left-0 right-0 z-20 flex items-center shadow-md font-semibold">
            <Link href={'/'}>
              <Image className="m-4 ml-7"
                src = '/img/home.png'
                alt = "logo"
                width= {28}
                height = {30}
            />
            </Link> 
            <TopMenuItem title="Dentist" pageRef="/dentist"/>
            <TopMenuItem title="Booking" pageRef="/booking"/>
            <TopMenuItem title="Appointment" pageRef={"/appointment"}/>
                   

            <div className="flex justify-end items-center absolute right-0 top-0 h-full pr-8 text-white">
            {session ? (
                <Link href="/api/auth/signout?callbackUrl=/">
                <div className="cursor-pointer">
                    Sign-Out of {session.user?.data.name}
                </div>
                </Link>
            ) : (
                <div className="flex space-x-5">
                <Link href="/api/auth/signin">
                    <div className="cursor-pointer">
                    Sign-In
                    </div>
                </Link>
                <Link href="/register">
                    <div className="cursor-pointer">
                    Register
                    </div>
                </Link>
                </div>
            )}
            </div>
            
            
           


        </div>
    );
}