import Image from 'next/image'
import React from 'react'


import CalvinKlein from '@/assets/BrandLogo/Calvin-Klein.png'
import Gucci from '@/assets/BrandLogo/Gucci.png'
import Prada from '@/assets/BrandLogo/Prada.png'
import VERSACE from '@/assets/BrandLogo/VERSACE.png'
import Zara from '@/assets/BrandLogo/Zara.png'

export default function BrandBar() {

    const brandList = [
        { Image: CalvinKlein, name: 'Calvin Klein' },
        { Image: Gucci, name: 'Gucci' },
        { Image: Prada, name: 'Prada' },
        { Image: VERSACE, name: 'VERSACE' },
        { Image: Zara, name: 'Zara' },
    ]
    return (
        <div className='overflow-hidden h-20 xl:h-[122px] bg-black group'>
            <ul className='flex items-center justify-between w-max h-full animate-infinite-scroll group-hover:[animation-play-state:paused]'>
                {[...brandList, ...brandList].map((brand, i) => (
                    <li key={i}
                        className="relative h-6 md:h-7 lg:h-8 xl:h-9 w-[calc(100vw/2)] md:w-[calc(100vw/3)] lg:w-[calc(100vw/4)] xl:w-[calc(100vw/5)] flex-shrink-0 "
                    >
                        <Image
                            src={brand.Image}
                            alt={brand.name}
                            fill
                            className="object-contain"
                        />
                    </li>
                ))}

            </ul>
        </div>
    )
}
