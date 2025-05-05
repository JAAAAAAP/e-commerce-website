import { productType } from '@/data/Products'
import Image from 'next/image'
import StarRating from './StarRating'
import { Badge } from './badge'

interface ProductCardProps {
  ProductData: productType
}

export default function ProductCard({ ProductData }: ProductCardProps) {
  return (
    <div className='flex flex-col w-[198px] gap-2.5 lg:w-full  xl:w-[295px] xl:gap-4'>

      <div className='w-full h-[200px] xl:h-[298px]'>
        <Image src={ProductData.image} alt='' className='rounded-[20px] w-full h-full' />
      </div>

      <div className='flex flex-col gap-1 xl:gap-2'>

        <h2 className='text-base xl:text-xl font-medium capitalize'>{ProductData.name}</h2>

        <div className='flex items-center gap-1.5 text-sm '>
          <StarRating rating={ProductData.rating} classname='w-[15px] h-[15px] xl:w-[18px] xl:h-[18px]' />
          <span>{ProductData.rating.toFixed(1)}/5</span>
        </div>

        <div className='flex items-center gap-[5px] xl:gap-2.5 text-xl xl:text-2xl font-medium'>
          <span>฿{ProductData.price}</span>
          {ProductData.originalPrice &&
            <span className='text-black/40 line-through'>฿{ProductData.originalPrice}</span>
          }
          {ProductData.discountPercent &&
            <Badge
              className='
              bg-red-100 text-red-500 rounded-[62px] w-[42px] h-5 xl:w-[58px] xl:h-7 
              font-light text-[10px] xl:text-[12px]
              '
            >
              -{ProductData.discountPercent}%
            </Badge>
          }
        </div>
      </div>
    </div>
  )
}
