import { reviewType } from "@/data/Reviews";
import { Card, CardContent } from "./card";
import StarRating from "./StarRating";
import { CircleCheck } from "lucide-react";

interface ReviewsCardProps {
  reviewData: reviewType
}

export default function ReviewsCard({ reviewData }: ReviewsCardProps) {

  return (
    <Card className="px-8 py-7 w-full xl:w-[400px] h-60 shadow-none rounded-[20px]">
      <CardContent className="flex flex-col gap-3 lg:gap-[15px]">
        
        <StarRating rating={5} classname="w-[22px] h-[22px]" />

        <div className="flex flex-col gap-2 lg:gap-3">
          <div className="flex items-center gap-1">
            <h2 className="text-xl font-semibold">{reviewData.user_name}</h2>
            <CircleCheck className="text-white fill-green-500 w-6 h-6" />
          </div>

          <p className="text-black/60">&quot;{reviewData.comment}&quot;</p>
        </div>
      </CardContent>
    </Card>
  )
}
