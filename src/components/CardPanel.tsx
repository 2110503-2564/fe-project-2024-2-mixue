"use client";
import Image from "next/image";
import Card from '@/components/Card';
import { useState } from "react";
import Link from "next/link";

export default function CardPanel() {

    const [ratings, setRatings] = useState(new Map([
        ["The Bloom Pavilion", 0],
        ["Spark Space", 0],
        ["The Grand Table", 0]
      ]));
    
      const [showing, setShowing] = useState(new Map([
        ["The Bloom Pavilion", true],
        ["Spark Space", true],
        ["The Grand Table", true]
      ]));


      const trueCount = Array.from(showing.values()).filter(value => value).length;

      const handleRatingChange = (dentistName: string, newValue: number) => {
        setRatings(prevRatings => new Map(prevRatings).set(dentistName, newValue));
        setShowing(prevShowing=> new Map(prevShowing).set(dentistName,true));
      };

      const handleShowingChange = (dentistName: string) => {
        setShowing(prevShowing=> new Map(prevShowing).set(dentistName,false));
      };

const mockVenue =[
  {vid:'001',  dentistName: "The Bloom Pavilion", imgSrc: "/img/bloom.jpg"},
  {vid:'002',  dentistName: "Spark Space", imgSrc: "/img/sparkspace.jpg"},
  {vid:'003',  dentistName: "The Grand Table", imgSrc: "/img/grandtable.jpg"},
]
  
  return (
    <div>
    
      <div className="flex flex-row flex-wrap gap-8 m-8 mx-[5vw] p-10">
        {
          mockVenue.map((dentist)=>(

        <Link href={`/dentist/${dentist.vid}`} className="p-5 w-1/4 max-w-[350px]">
            <Card {...dentist} rating={ratings.get(dentist.dentistName) ?? 0} onRatingChange={handleRatingChange} />
            </Link>
          ))
        }
   
      </div>

<div className="m-10">
      <h2 className="font-bold">Venue List with Ratings : {trueCount}</h2>
      {Array.from(showing.entries()).filter(([key, value]) => value).map(([key]) => (
        <h4 key={key} 
        onClick={() => handleShowingChange(key)}
        data-testid={key}
        >{key} : {ratings.get(key)}</h4> 
      ))}

    </div>
    </div>
  );
}

