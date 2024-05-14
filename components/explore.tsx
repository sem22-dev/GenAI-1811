
import Image from "next/image";

interface SectionProps {
    image: string; 
    order: "imageFirst" | "paraFirst";
}

export default function Explore(){
    return(
        <div className="py-6 mt-24 lg:mt-0">
            {/* header */}
            <div className="w-full flex flex-col items-center  text-center">
                <h1 className=" text-4xl md:text-5xl font-semibold leading-12">
                    Explore the power of
                    <br />
                    AI apps generation
                </h1>
                <p className="mt-6 text-[#374151]">
                    Unlock the full potential of your tech stack with Horizon's
                        <br />
                    intuitive and Unlock the full potential of your tech stack 
                    <br />
                    with GenAI’s intuitive and
                </p>
            </div>

            {/* features */}
            <div className="my-16 md:my-24 flex flex-col gap-24">
                <Section image="/phone.png" order="paraFirst" />
                <Section image="/phon2.png" order="imageFirst" />
                <Section image="/phone3.png" order="paraFirst" />
            </div>
        </div>
    )
}

export function Section({ image, order }: SectionProps) {
    return (
        <div className="flex flex-col lg:flex-row justify-between gap-20 mb-20">
            
            <div className={`flex-1 ${order === 'paraFirst' ? 'lg:order-2' : ''}`}>
                <div className="items-end">
                    <h1 className=" text-4xl md:text-5xl font-semibold leading-12">
                        <span className="text-orange-600">Unleash</span> the power of AI 
                        <br />
                        with GenAI
                    </h1>
                    <p className="mt-6 text-[#374151] leading-8 md:leading-10">
                        Stay ahead of the curve with our Dynamic Trend Analysis feature. Unlock the full potential of your tech stack with Horizon's intuitive and Stay ahead of the curve with our Dynamic Trend Analysis feature. Unlock the full potential of your tech stack with Horizon's intuitive and
                    </p>
                </div>
            </div>
            <div className={`flex-1 ${order === 'paraFirst' ? 'lg:order-1' : ''} lg:w-[500px] h-fit`}>
                <Image src={image} width={1000} height={1000} alt="img" />
            </div>
        </div>
    )
}
