import { products } from '@/data/Products'
import ProductCard from '../ui/ProductCard'
import { Button } from '../ui/button'

export default function TopSelling() {
    const topsellingProducts = products.filter(p => p.tags.includes('topsales'))


    return (
        <div className="container flex flex-col items-center mt-16">
            <h1 className="text-[38px] xl:text-5xl font-semibold">สินค้าขายดี</h1>

            <div className='mt-8 xl:mt-[55px] w-full overflow-x-auto overflow-y-hidden hide-scrollbar lg:overflow-x-visible'>
                <div className='flex gap-4 md:gap-5 min-w-max'>
                    {topsellingProducts.map(product => (
                        <ProductCard key={product.id} ProductData={product} />
                    ))}
                </div>
            </div>

            <Button variant='outline'
                className='
                rounded-4xl w-full h-[46px] text-sm
                md:w-[218px] md:h-[52px] md:text-base mt-9 hover:bg-black hover:text-white
                '
            >
                ดูสินค้าทั้งหมด
            </Button>
        </div>
    )
}
