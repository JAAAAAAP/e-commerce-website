import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Mail } from "lucide-react"
import Image from "next/image"

import twitter from "@/assets/SocialIcon/1.png"
import fb from "@/assets/SocialIcon/2.png"
import ig from "@/assets/SocialIcon/3.png"
import github from "@/assets/SocialIcon/4.png"
import { Separator } from "./ui/separator"


export default function Footer() {

    const footerItems = [
        {
            title: "บริษัท",
            links: [
                { label: "เกี่ยวกับเรา", href: "/about" },
                { label: "คุณสมบัติ ", href: "/features" },
                { label: "ผลงาน", href: "/works" },
                { label: "ร่วมงานกับเรา", href: "/career" },
            ],
        },
        {
            title: "ช่วยเหลือ",
            links: [
                { label: "ฝ่ายบริการลูกค้า", href: "/about" },
                { label: "รายละเอียดการจัดส่ง", href: "/features" },
                { label: "ข้อกำหนดและเงื่อนไข", href: "/works" },
                { label: "นโยบายความเป็นส่วนตัว", href: "/career" },
            ],
        },
        {
            title: "คำถามที่พบบ่อย",
            links: [
                { label: "บัญชีผู้ใช้", href: "/about" },
                { label: "จัดการการจัดส่ง", href: "/features" },
                { label: "รายการสั่งซื้อ", href: "/works" },
                { label: "การชำระเงิน", href: "/career" },
            ],
        },
        {
            title: "แหล่งข้อมูล",
            links: [
                { label: "อีบุ๊กฟรี", href: "/about" },
                { label: "คู่มือการพัฒนา", href: "/features" },
                { label: "บล็อกสอนใช้งาน", href: "/works" },
                { label: "วิดีโอสอนจาก YouTube", href: "/career" },
            ],
        },
    ]

    return (
        <div className="relative flex flex-col items-center bg-[#F0F0F0] mt-52 md:mt-40">
            <Newsletter />

            {/* footer section */}
            <footer className="container grid grid-cols-2 gap-6 lg:flex lg:flex-row lg:justify-between mt-[170px] md:mt-[120px]">
                
                <div className="col-span-2 w-full space-y-5 lg:flex lg:flex-col lg:w-[248px] lg:gap-4">
                    <div className="flex flex-col gap-3.5 lg:gap-5">
                        <h2 className="text-4xl font-semibold">Luxono</h2>
                        <p className="text-sm/[22px] text-black/60 ">เรามีเสื้อผ้าที่ตอบโจทย์สไตล์ของคุณ ใส่แล้วมั่นใจ ไม่ว่าจะสำหรับผู้หญิงหรือผู้ชาย</p>
                    </div>

                    <div className="flex gap-3">
                        <Image src={twitter} alt="" />
                        <Image src={fb} alt="" />
                        <Image src={ig} alt="" />
                        <Image src={github} alt="" />
                    </div>
                </div>
                {footerItems.map((section, index) => (
                    <div key={index} className="space-y-3">
                        <h3>{section.title}</h3>
                        <ul className="text-black/60 font-light space-y-2">
                            {section.links.map((link, index) => (
                                <li key={index}>{link.label}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </footer>

            <div className="container">
                <Separator className="mt-[50px] mb-[133px] bg-black/10" />
            </div>
        </div>
    )
}

function Newsletter() {
    return (
        <div className="
        absolute container flex flex-col gap-[32px] md:flex-row md:justify-between w-full px-6 py-[32px] 
        lg:px-16 lg:py-9 bg-black rounded-[20px] -translate-y-1/2
        "
        >

            <h1 className="text-white text-[32px]/[35px] lg:text-[40px]/[45px] font-semibold">ติดตามข่าวสารล่าสุดเกี่ยวกับข้อเสนอพิเศษของเรา</h1>

            <div className="flex flex-col gap-3 xl:gap-3.5 lg:w-[400px]">
                
                <div className="flex items-center gap-3 bg-white w-full h-12 px-4 py-3 rounded-[62px]">
                    <Mail className="text-black/40" />
                    <Input
                        placeholder="กรอกอีเมลของคุณ"
                        className="border-none shadow-none p-0 placeholder:text-black/40 placeholder:text-base"
                    />
                </div>

                <Button
                    className="
                    bg-white text-base text-black font-light
                    h-[46px] px-4 py-3 rounded-[62px] hover:text-white 
                    "
                >
                    ติดตามข่าวสารและโปรโมชั่น
                </Button>
            </div>
        </div>
    )
}
