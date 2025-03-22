import styles from './card.module.css';
import Image from 'next/image';
import InteractiveCard from './InteractiveCard'
import Rating from '@mui/material/Rating';


export default function Card({dentistName, imgSrc,rating ,onRatingChange}: 
    {dentistName:string, imgSrc:string, rating?:number,onRatingChange?: (dentistName: string, newRating: number) => void;}){
    return (
        <InteractiveCard contentName={dentistName}>
        <div className='w-full'>
                <Image 
                src={imgSrc}
                alt={dentistName} 
                width={0} 
                height={0} 
                sizes="100vw"
                className="w-full h-auto object-cover"
                />
           

            <h3 className={styles.name}>{dentistName}</h3>
             {onRatingChange? <div onClick={(e)=>e.stopPropagation()}>
           <Rating
                    id={`${dentistName} Rating`}
                    name={`${dentistName} Rating`}
                    data-testid={`${dentistName} Rating`}
                    value={rating} 
                    onChange={(event, newValue) => { 
                        event.stopPropagation(); 
                        event.preventDefault();
                        onRatingChange(dentistName, newValue ?? 0);}}
                />
            
            </div>:''}
          
        </div>
        </InteractiveCard>
    );
}