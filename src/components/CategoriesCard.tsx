import React from 'react'
import { Categories } from '../pages/Home'

type CategoriesCardProps = {
    categories: Categories
}

const CategoriesCard: React.FC<CategoriesCardProps> = ({ categories }) => {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-2">
                <div className="w-[198px] h-[299px] lg:w-[265px] lg:h-[400px] flex items-center justify-center relative">
                    <img src={categories.image} alt={categories.title} className="w-full h-full object-cover" />
                    <div className="absolute bottom-4 text-center">
                        <p className="text-lg lg:text-[28px] font-semibold text-white">{categories.title}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoriesCard
