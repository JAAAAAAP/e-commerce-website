import Image from 'next/image'
import HeroImg from '../../../public/Hero.png'
import HeroImgMobile from '../../../public/HeroMobile.png'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'

import Countup from '../ui/countup'

export default function Hero() {
    return (
        <div className='bg-[#F2F0F1] h-auto md:h-[350px] lg:h-[450px] xl:h-[663px]'>

            <div className='container relative flex flex-col md:flex-row-reverse justify-between items-center md:h-full'>

                <div className='hidden md:flex items-end h-full w-full'>
                    <Image src={HeroImg} alt='' className='' />
                </div>

                <div className='flex flex-col w-full max-w-[596px] gap-5 mt-10 md:gap-4 md:mt-0 lg:gap-5 xl:gap-8'>

                    <h1 className='text-4xl md:text-3xl/8 lg:text-4xl/9 xl:text-[64px]/[72px] font-semibold'>ค้นหาสไตล์ที่ใช่ ผ่านเสื้อผ้าที่คุณเลือก</h1>

                    <span className='text-base leading-5 lg:leading-[22px] text-black/60 w-full xl:w-[545px]'>
                        เลือกชมเสื้อผ้าหลากหลายสไตล์
                        ที่เราคัดสรรและออกแบบมาอย่างพิถีพิถัน
                        เพื่อสะท้อนความเป็นตัวคุณ
                        และเติมเต็มสไตล์ที่เป็นเอกลักษณ์ของคุณ
                    </span>

                    <Button
                        className='
                        rounded-4xl md:w-44 md:h-9 lg:h-11 lg:w-[210px] xl:h-[52px] cursor-pointer
                        font-light text-base ring-black hover:ring-2 hover:text-black hover:bg-transparent
                        '
                    >
                        ช้อปเลย
                    </Button>

                    <div className='flex flex-wrap justify-center md:flex-nowrap lg:justify-between w-full'>

                        <div className='flex flex-col '>
                            <h3 className='text-2xl xl:text-[40px] font-medium'><Countup counter={200} duration={3} suffix='+' /></h3>
                            <span className='text-black/60 font-light text-sm lg:text-base '>แบรนด์ชั้นนำ</span>
                        </div>

                        <Separator orientation="vertical" className='min-h-[52px] mx-8 md:mx-auto lg:min-h-16 xl:mx-8 xl:min-h-[84px]' />

                        <div className='flex flex-col '>
                            <h3 className='text-2xl xl:text-[40px] font-medium'><Countup counter={2000} duration={3} suffix='+' /></h3>
                            <span className='text-black/60 font-light text-sm lg:text-base'>สินค้าเกรดพรีเมียม</span>
                        </div>

                        <Separator orientation="vertical" className='hidden md:min-h-[52px] md:block md:mx-auto lg:min-h-16 xl:mx-8 xl:min-h-[84px]' />

                        <div className='flex flex-col mt-3 md:mt-0'>
                            <h3 className='text-2xl xl:text-[40px] font-medium'><Countup counter={30000} duration={3} suffix='+' /></h3>
                            <span className='text-black/60 font-light text-sm lg:text-base'>เสียงตอบรับจากลูกค้า</span>
                        </div>
                    </div>
                </div>


            </div>

            <Image src={HeroImgMobile} alt='' className='w-full md:hidden' />


        </div>
    )
}
