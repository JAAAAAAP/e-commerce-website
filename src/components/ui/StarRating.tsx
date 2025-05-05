interface StarRatingProps {
    rating: number
    classname?: string

}

export default function StarRating({ rating,classname }: StarRatingProps) {

    const fullStars = Math.floor(rating)
    const halfStars = rating % 1 >= 0.5 ? 1 : 0


    return (
        <div className="flex">

            {[...Array(fullStars)].map((_, index) => (
                <svg key={`full-${index}`} className={classname} xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            ))}

            {halfStars === 1 && (
                <svg xmlns="http://www.w3.org/2000/svg" className={classname} fill="gold" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    <path d="M12 2v15.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61z" fill="white" />
                </svg>
            )}
        </div>
    )
}
