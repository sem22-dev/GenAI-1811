
export default function Subscribe(){
    return(
        <div className="my-44 mb-32 flex flex-col justify-center items-center">
            <div className="text-center mb-8">
                <h1 className=" text-4xl md:text-5xl font-semibold leading-12 mb-8">
                    Detect your next <span className="text-orange-600">big move</span> 
                </h1>
                <p className="text-[#374151]">
                    Experience the synergy of your favorite tools working seamlessly
                </p>
                <p className="text-[#374151]">
                    together, all powered by Horizon's cutting-edge AI analytics.
                </p>
            </div>
            <div className=" w-full flex flex-col md:flex-row justify-center items-center gap-4">
                <input 
                    type="email" 
                    placeholder="yourrmail@gmail.com" 
                    className="bg-[#E5E7EB] placeholder:text-black rounded-md px-4 py-2 min-w-[374px]"
                />
                <button className="gradient-button py-2 px-6 text-white rounded-lg">Subscribe Now</button>
            </div>
        </div>
    )
}
