import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Pricing = () => {
  return (
    <div className="w-full m-auto">
       <div className="text-center my-24">
                <h1 className=" text-4xl md:text-5xl font-semibold leading-12">
                        Start making <span className="text-orange-600">smarter</span>  decisions,
                        <br />
                        Choose a plan
                 </h1>
            </div>

      <div className=" flex flex-col lg:flex-row justify-start items-center gap-10">
        {/* 1 */}
        <div className=" flex flex-col justify-start items-start border shadow-md p-12 rounded-3xl max-w-xl gap-10 w-full " style={{ background: "linear-gradient(to right, #fff 10%, #FAFAFB 80%)" }}>
          <div className="text-center w-full">
            <h1 className=" text-xl font-semibold">Explorer</h1>
            <h1 className=" text-3xl font-semibold mt-2">$4,99<span className="text-gray-400">/mo</span></h1>
          </div>
          <div className=" flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <ArrowRight color="#FF4F00"/>
              <h1>Market Trend Analysis</h1>
            </div>
            <div className="flex gap-2 items-center">
              <ArrowRight color="#FF4F00"/>
              <h1>Limited Query Mapping</h1>
            </div>
            <div className="flex gap-2 items-center">
              <ArrowRight color="#FF4F00"/>
              <h1>Standard Dashboards</h1>
            </div>
            <div className="flex gap-2 items-center">
              <ArrowRight color="#FF4F00"/>
              <h1>Email Notifications</h1>
            </div>
            <div className="flex gap-2 items-center">
              <ArrowRight color="#FF4F00"/>
              <h1>Entry-Level Support</h1>
            </div>
          </div>
          <div className="w-full ">
              <button className="flex items-center rounded-lg gap-2 border shadow-md hover:bg-slate-50 justify-center w-full py-2 mx-auto" >
                Get now <ArrowRight />
              </button>
            </div>
        </div>

      {/* 2 */}
        <div className="flex flex-col justify-start items-start border shadow-md p-10 py-16 rounded-3xl gap-14 w-full max-w-xl" style={{ background: "linear-gradient(to right, #fff 10%, #FAFAFB 80%)" }}>
          <div className="text-center w-full">
              <div className=" text-orange-500 flex items-center justify-center gap-2">
                <h1 className=" text-xl font-semibold">Innovator</h1>
                <h1 className=" text-light text-sm bg-[#fae8e0] p-2 rounded-lg">
                • BEST VALUE
                </h1>
              </div>
              <h1 className=" text-3xl font-semibold mt-2">$19,99<span className="text-gray-400">/mo</span></h1>
            </div>
            <div className=" flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <ArrowRight color="#FF4F00"/>
                <h1>Everything in Explorer, plus:</h1>
              </div>
              <div className="flex gap-2 items-center">
                <ArrowRight color="#FF4F00"/>
                <h1>Predictive Analytics</h1>
              </div>
              <div className="flex gap-2 items-center">
                <ArrowRight color="#FF4F00"/>
                <h1>Advanced Query Mapping</h1>
              </div>
              <div className="flex gap-2 items-center">
                <ArrowRight color="#FF4F00"/>
                <h1>Customizable Dashboards</h1>
              </div>
              <div className="flex gap-2 items-center">
                <ArrowRight color="#FF4F00"/>
                <h1>Smart Alert System</h1>
              </div>
              <div className="flex gap-2 items-center">
                <ArrowRight color="#FF4F00"/>
                <h1>Extended Support</h1>
              </div>
            </div>
            <div className="w-full ">
                <button className="flex items-center rounded-lg gap-2 border shadow-md gradient-button text-white justify-center w-full py-2 mx-auto">
                  Get now <ArrowRight />
                </button>
              </div>
        </div>

        {/* 3 */}
        <div className="flex flex-col justify-start items-start border p-10 rounded-3xl shadow-md gap-10 w-full max-w-xl" style={{ background: "linear-gradient(to right, #fff 10%, #FAFAFB 80%)" }}>
          <div className="text-center w-full">
              <h1 className=" text-xl font-semibold">Visionary</h1>
              <h1 className=" text-3xl font-semibold mt-2">$49,99<span className="text-gray-400">/mo</span></h1>
            </div>
            <div className=" flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <ArrowRight color="#FF4F00"/>
                <h1>Everything in Innovator, plus</h1>
              </div>
              <div className="flex gap-2 items-center">
                <ArrowRight color="#FF4F00"/>
                <h1>Competitor Benchmarking</h1>
              </div>
              <div className="flex gap-2 items-center">
                <ArrowRight color="#FF4F00"/>
                <h1>Holistic Market Visualization</h1>
              </div>
              <div className="flex gap-2 items-center">
                <ArrowRight color="#FF4F00"/>
                <h1>Adaptive Strategy Planner</h1>
              </div>
              <div className="flex gap-2 items-center">
                <ArrowRight color="#FF4F00"/>
                <h1>24/7 Priority Support</h1>
              </div>
              <div className="flex gap-2 items-center">
                <ArrowRight color="#FF4F00"/>
                <h1>Custom Integrations</h1>
              </div>
            </div>
            <div className="w-full ">
                <button className="flex items-center rounded-lg gap-2 border shadow-md hover:bg-slate-50 justify-center w-full py-2 mx-auto" >
                  Get now <ArrowRight />
                </button>
              </div>
          </div>
        </div>

        <div className=" my-24 flex justify-center items-center gap-12 md:gap-24">
          <div className=" flex items-center gap-2">
            <Image src={'/tick.svg'} width={24} height={24} alt="tick"/>
            <h1 className=" text-[#FF4F00]">Free trial</h1>
          </div>
          <div className=" flex items-center gap-2">
            <Image src={'/tick.svg'} width={24} height={24} alt="tick"/>
            <h1 className=" text-[#FF4F00]">Cancel anytime</h1>
          </div>
          <div className=" flex items-center gap-2">
            <Image src={'/tick.svg'} width={24} height={24} alt="tick"/>
            <h1 className=" text-[#FF4F00]">Support included</h1>
          </div>
        </div>
    </div>
  );
};

export default Pricing;
