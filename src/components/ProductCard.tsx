import React from 'react';
import { Product } from "../pages/Home";

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <>
            <div className="">
                <div className="border h-[170px] w-[160px] lg:h-[300px] lg:w-[290px]">
                    <img src={product.image} alt={product.title} className="h-full w-full object-fill" />
                </div>
                <div className="">
                    <p className='text-base lg:text-2xl font-semibold'>{product.title}</p>
                    <div className="flex mt-2 items-center gap-1 lg:gap-2">
                        {product.price_after_discount !== null && <p className='text-xs lg:text-base'>${product.price_after_discount}</p>}
                        <p className={product.price_after_discount !== null ? "text-[10px] lg:text-sm line-through opacity-50" : "text-[10px] lg:text-sm"}>${product.price}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCard