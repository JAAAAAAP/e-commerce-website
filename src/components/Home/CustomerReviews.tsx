"use client"
import React from "react";
import { useMediaQuery } from 'react-responsive';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "../ui/carousel";
import ReviewsCard from "../ui/ReviewsCard";
import { reviewData } from "@/data/Reviews";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function CustomerReviews() {
    const [api, setApi] = React.useState<CarouselApi>()
    const isLG = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });

    return (
        <div className='flex flex-col gap-6 lg:gap-10 items-center mt-20 container'>
           
            <div className='flex items-center justify-between w-full'>
                <h1 className='text-[32px] lg:text-5xl font-semibold'>ความคิดเห็นจากลูกค้า</h1>
                
                <div className="flex gap-4 ">
                    <div onClick={() => api?.scrollPrev()} className="bg-transparent text-black">
                        <ArrowLeft />
                    </div>
                    <div onClick={() => api?.scrollNext()} className="bg-transparent text-black">
                        <ArrowRight />
                    </div>
                </div>
            </div>

            <Carousel
                opts={{
                    align: "center",
                    slidesToScroll: isLG ? 2 : 1,
                }}
                setApi={setApi}
                className="w-full"
            >
                <CarouselContent className="gap-5 ml-0">
                    {reviewData.map(review => (
                        <CarouselItem key={review.id} className="pl-0 lg:basis-[422px] xl:basis-[400px]">
                            <ReviewsCard reviewData={review} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
