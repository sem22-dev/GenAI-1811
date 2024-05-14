import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Footer(){
    return(
        <footer className=" py-32 bg-[#1C1C1C] text-white px-8 md:px-24">
            <div className=" flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:justify-between border-b pb-24 border-[#505050]"> 
                <h1 className=" text-4xl font-normal">
                    Get your AI apps built with
                        <br />
                     blazing speed.
                </h1>
                <button className="flex gap-2 items-center bg-[#FF4F00] px-6 py-3 rounded-lg text-white shadow-md">Get started <span><ArrowRight className="w-4"/></span></button>
            </div>

        <div className=" flex flex-col lg:flex-row gap-24 justify-between pt-24">
            <div className=" flex flex-col gap-8">
                <h1 className=" text-gray-400 text-3xl">GenAI</h1>
                <p>lorem ipsum dolor sit amet lorem
                    <br />
                     ipsum dolor sit maet lorem ipsum dlor sit amet.</p>
                <p>All rights reserved.</p>
            </div>

            <div className=" flex gap-12 md:gap-32">
                <div className="flex flex-col gap-4">
                    <Link href={'/'} className="text-[#B0B2B8]">About</Link>
                    <Link href={'/'} className="text-[#B0B2B8]">Contact</Link>
                    <Link href={'/'} className="text-[#B0B2B8]">Blog</Link>
                    <Link href={'/'} className="text-[#B0B2B8]">Story</Link>
                </div>
                <div className="flex flex-col gap-4">
                    <Link href={'/'} className="text-[#B0B2B8]">Company</Link>
                    <Link href={'/'} className="text-[#B0B2B8]">Product</Link>
                    <Link href={'/'} className="text-[#B0B2B8]">Press</Link>
                    <Link href={'/'} className="text-[#B0B2B8]">More</Link>
                </div>
                <div className="flex flex-col gap-4">
                    <Link href={'/'} className="text-[#B0B2B8]">Press</Link>
                    <Link href={'/'} className="text-[#B0B2B8]">carreers</Link>
                    <Link href={'/'} className="text-[#B0B2B8]">News letters</Link>
                    <Link href={'/'} className="text-[#B0B2B8]">More</Link>
                </div>
            </div>
        </div>
        </footer>
    )
}