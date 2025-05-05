import Image from "next/image";
import Logo from "@/assets/Logo.png";
import { ChevronDown, CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";
import { Input } from "./ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

const navItems = [
    { title: "ร้านค้า", icon: <ChevronDown size={16} /> },
    { title: "ลดราคา" },
    { title: "สินค้ามาใหม่" },
    { title: "แบรนด์" }
]

export default function NavBar() {

    return (
        <div className="flex justify-between items-center container h-16 lg:h-24">


            <div className="flex gap-2">
                <Sidebar />
                <Image src={Logo} alt="Luxono" className="hidden lg:block lg:w-12 cursor-pointer" />
                <h1 className="text-3xl lg:text-4xl font-bold cursor-pointer">Luxono</h1>
            </div>

            <ul className="hidden lg:flex items-center gap-6 font-light h-10">
                {navItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-1 cursor-pointer hover:text-black/80 transition-all duration-200 ease-in-out">
                        <span>{item.title}</span>
                        {item.icon}
                    </li>
                ))}
            </ul>

            <div className="hidden lg:flex items-center gap-3 xl:w-full max-w-[577px] h-12 bg-[#F0F0F0] rounded-4xl px-4">
                <Search className="text-black/40" />
                <Input
                    placeholder="ค้นหาสินค้า..."
                    className="border-none shadow-none placeholder:text-base p-0"
                />
            </div>

            <div className="flex gap-3.5">
                <Search className="lg:hidden" />
                <ShoppingCart />
                <CircleUserRound />
            </div>
        </div>
    )
}

const Sidebar = () => (
    <Sheet>
        <SheetTrigger className="lg:hidden"><Menu /></SheetTrigger>
        <SheetContent side="left">
            <SheetHeader className="py-0 gap-5">
                <SheetTitle className="text-4xl">Luxono</SheetTitle>
                <ul className="flex flex-col text-2xl gap-2">
                    {navItems.map((item, index) => (
                        <li key={index} className="flex justify-between items-center gap-1 cursor-pointer hover:text-black/80 transition-all duration-200 ease-in-out">
                            <span>{item.title}</span>
                            {item.icon}
                        </li>
                    ))}
                </ul>
            </SheetHeader>
        </SheetContent>
    </Sheet>

)