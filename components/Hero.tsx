
import Image from "next/image";
import GetStarted from "./getStarted";

export default function Hero(){
  return(
    <div className="flex flex-col min-h-screen lg:flex-row justify-between  py-4 overflow-x-hidden">
      {/* left */}
      <div className=" flex flex-col gap-12 px-8 py-24 md:px-24">
        <h1 className=" text-5xl md:text-6xl font-semibold">
          <p className="text-[#FF4F00] mb-4">Transform Ideas </p>
          <p> into apps with AI</p>
        </h1>
        <p className="text-[#374151]">
          Step into a new era of strategic decision-making. Horizon empowers businesses in the marketing space with unparalleled
        </p>
       <div>
       <GetStarted />
       </div>
      </div>
      {/* right */}
      <div className="w-full lg:w-[700px] overflow-hidden h-[700px] lg:h-[600px] bg-white rounded-lg relative">
        <div className="absolute left-14   w-full h-full overflow-visible ">
          <Image
            src={'/ipad2.png'}
            fill
            className="object-cover lg:object-contain object-center w-full h-full rounded-lg"
            alt="hero"
          />
        </div>
      </div>
    </div>
  )
}
