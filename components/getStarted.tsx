import { ArrowRight } from "lucide-react";

export default function GetStarted(){
    return(
        <button className="flex gap-2 items-center gradient-button border px-4 py-2 rounded-lg text-white shadow-md">Get started <span><ArrowRight className="w-4"/></span></button>
    )
}