'use client'
import Image from "next/image";
import styles from './banner.module.css';
import { useRouter } from "next/navigation";
import { useState ,useEffect} from "react";
import { useSession } from "next-auth/react";

export default function Banner () {

    const router = useRouter();
    const coverImg = ['/img/cover.jpg', '/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg'];
    const [picNum,setPicNum] = useState(0);

    const {data:session} = useSession();


    return (

        <div className={styles.banner}>
            <Image className= {styles.cover} 
            src={coverImg[picNum]}
            alt="cover"
            fill = {true}
            objectFit="cover"
            onClick={()=>{
                setPicNum((picNum+1)%4)
            }}/>
        <h1>where every smile finds its care</h1>
        <p>Book your perfect dental appointment effortlessly and keep your smile shining bright!</p>

        {
            session? <div className="z-50 absolute top-8 right-10 text-cyan-400 text-3xl font-semibold">Welcome {session.user?.data.name}</div>
            :null

        }

        <button className="p-3 px-6 m-4 z-30 rounded-lg absolute bottom-8 right-20 
        bg-[#0D9488] text-white font-poppins text-xl shadow-lg 
        hover:bg-[#0F766E] transition duration-300"
        onClick={(e)=>{e.stopPropagation(); 
        router.push('/dentist');}}>
            Select Venue
</button>


        </div>
    );
}