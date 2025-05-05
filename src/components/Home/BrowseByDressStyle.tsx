import Image from 'next/image'
import Casual from '../../../public/Casual.png'
import Formal from '../../../public/Formal.png'
import Party from '../../../public/Party.png'
import Gym from '../../../public/Gym.png'
export default function BrowseByDressStyle() {
    return (
        <div className="container flex flex-col items-center bg-[#F0F0F0] rounded-[40px] mt-20 px-6 pt-10 pb-[27px] gap-7 lg:pt-[70px] lg:pb-[76px] lg:px-16 lg:gap-16">
            <h1 className="text-[32px] text-center lg:text-5xl font-semibold">ค้นหาชุดตามสไตล์</h1>
            
            <div className="flex flex-col lg:grid lg:grid-cols-3 w-full gap-5">
                
                <div className="relative rounded-[20px] overflow-hidden h-[190px] md:h-[225px] lg:h-[289px]">
                    <div className='absolute h-full w-full'>
                        <Image src={Casual} alt='' className='w-full h-full object-fill lg:object-cover xl:object-fill' />
                    </div>
                    <h2 className='absolute text-4xl font-medium translate-y-[25px] translate-x-9'>ลำลอง</h2>
                </div>

                <div className="col-span-2 relative rounded-[20px] overflow-hidden h-[190px] md:h-[225px] lg:h-[289px]">
                    <div className='absolute h-full w-full'>
                        <Image src={Formal} alt='' className='w-full h-full object-cover' />
                    </div>
                    <h2 className='absolute text-4xl font-medium translate-y-[25px] translate-x-9'>ทางการ</h2>
                </div>

                <div className="col-span-2 relative rounded-[20px] overflow-hidden h-[190px] md:h-[225px] lg:h-[289px]">
                    <div className='absolute h-full w-full'>
                        <Image src={Party} alt='' className='w-full h-full object-cover' />
                    </div>
                    <h2 className='absolute text-4xl font-medium translate-y-[25px] translate-x-9'>ปาร์ตี้</h2>
                </div>

                <div className="relative rounded-[20px] overflow-hidden h-[190px] md:h-[225px] lg:h-[289px]">
                    <div className='absolute h-full w-full'>
                        <Image src={Gym} alt='' className='w-full h-full object-fill lg:object-cover xl:object-fill' />
                    </div>
                    <h2 className='absolute text-4xl font-medium translate-y-[25px] translate-x-9'>ฟิตเนส</h2>
                </div>
            </div>
        </div>
    )
}
