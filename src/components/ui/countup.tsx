"use client"
import dynamic from "next/dynamic";
import { Skeleton } from "./skeleton";

const LazyCountUp = dynamic(() => import("react-countup"), {
    loading: () => (
        <Skeleton className="w-[130px] h-[40px] rounded-xl bg-black/50" />
    ),
    ssr: false,
});

type CountupProp = {
    suffix?: string,
    duration: number,
    counter: number,
}
export default function Countup({ suffix, duration, counter }: CountupProp) {
    return (
        <LazyCountUp suffix={suffix} duration={duration} end={counter} />
    )
}
