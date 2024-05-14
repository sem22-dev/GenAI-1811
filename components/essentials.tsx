
import Image from "next/image";

export default function Essentials(){
    return(
        <div className="py-12">
            <div className="text-center mb-24">
                <h1 className=" text-4xl md:text-5xl font-semibold leading-12">
                        <span className="text-orange-600">Essentially,</span> everything you need to 
                        <br />
                        ship you first AI App
                 </h1>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export function Card(){
    return(
        <div className="w-[360px] border px-8 py-6 flex flex-col gap-8 rounded-3xl shadow-md">
            <div className="w-14">
                <Image src={'/quality.svg'} width={1000} height={1000} alt="quality"/>
            </div>
            <h1 className="text-2xl font-medium">Quality apps</h1>
            <p className="text-[#374151]">
                Identify strengths, capitalize on weaknesses, and chart a course for unparalleled success.
            </p>
        </div>
    )
}
