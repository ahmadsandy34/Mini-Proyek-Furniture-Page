import React, { useRef } from 'react';
import { Categories } from '../pages/Home';
import CategoriesCard from './CategoriesCard';

interface NewInProps {
    categories: Categories[];
}

const NewIn: React.FC<NewInProps> = ({ categories }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleDrag = (e: React.MouseEvent) => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= e.movementX;
        }
    };

    return (
        <section className="w-4/5 mx-auto mt-20">
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-20 items-center justify-center">
                <div className="flex flex-row lg:flex-col gap-5 lg:gap-20">
                    <div className="basis-1/2">
                        <p className="text-2xl lg:text-[40px] font-semibold lg:leading-tight">New In <br /> Store Now</p>
                    </div>
                    <div className="basis-1/2">
                        <p className="text-sm lg:text-base">Get the latest items immediately with promo prices</p>
                    </div>
                    <div className="hidden lg:block">
                        <p className="font-medium">Check All  <i className="bi bi-arrow-right ml-2"></i></p>
                    </div>
                </div>
                <div
                    className="overflow-x-auto"
                    ref={containerRef}
                    onMouseMove={handleDrag}
                >
                    <div className="flex flex-row gap-5">
                        {categories.map((categories, index) => (
                            <CategoriesCard key={index} categories={categories} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewIn;
