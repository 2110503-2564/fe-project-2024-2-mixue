
import { Suspense } from "react";
import getDentists from "@/libs/getDentists";
import DentistList from "@/components/DentistList";
import LinearProgress from "@mui/material/LinearProgress";

export default function Dentist() {
    const dentists = getDentists(); 

    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-8">Our in-house dentists are here for you</h1>
            <Suspense fallback={<p>Loading... <LinearProgress /></p>}>
                <DentistList dentistsJson={dentists} /> 
            </Suspense>
        </div>
    );
}