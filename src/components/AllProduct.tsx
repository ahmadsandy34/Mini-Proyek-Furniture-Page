import React from 'react';
import ProductCard from './ProductCard';
import { Product } from "../pages/Home";

interface AllProductProps {
    products: Product[];
    onNextPage: () => void;
    onPrevPage: () => void;
    currentPage: number;
    postsPerPage: number;
}

const AllProduct: React.FC<AllProductProps> = ({ products, onNextPage, onPrevPage, currentPage, postsPerPage }) => {
    return (
        <section className="w-11/12 mx-auto mt-20">
            <div className="text-center mb-12 lg:mb-20">
                <p className="text-2xl lg:text-[40px] font-semibold lg:leading-[52px]">
                    All Product
                </p>
                <p className="text-sm lg:text-base lg:w-2/4 mx-auto my-4">
                    The products we provide only for you as our service are selected from the best products with number 1 quality in the world.
                </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product || {}} />
                ))}
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center lg:gap-x-4 mt-8 px-4">
                <button
                    onClick={onPrevPage}
                    disabled={currentPage === 1}
                    className={currentPage === 1 ? "font-medium text-slate-300 mt-4 lg:mt-0" : "font-medium text-black mt-4 lg:mt-0"}
                >
                    <i className="bi bi-arrow-left mr-2"></i>Previous
                </button>
                <button
                    onClick={onNextPage}
                    disabled={products.length < postsPerPage}
                    className={products.length < postsPerPage ? "font-medium text-slate-300 mt-4 lg:mt-0" : "font-medium text-black mt-4 lg:mt-0"}
                >
                    Next<i className="bi bi-arrow-right ml-2"></i>
                </button>
            </div>
        </section>
    );
};

export default AllProduct;
