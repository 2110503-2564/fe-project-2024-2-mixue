
import Link from 'next/link'

export default function TopMenuItem ({title,pageRef}:{ title:string, pageRef:string}){
    return (
        <Link className="p-8 text-white text-[12pt] no-underline" href={pageRef}>
        {title}
        </Link>
    );
}