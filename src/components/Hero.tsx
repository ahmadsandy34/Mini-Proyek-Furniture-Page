import React from 'react';
import { Header } from '../pages/Home';
import { Data } from '../pages/Home';

interface HeroProps {
    header: Header;
    data: Data;
}

const Hero: React.FC<HeroProps> = ({ header, data }) => {
    return (
        <>
            <header
                className="hero bg-right lg:bg-bottom h-[750px] lg:h-[1000px] relative"
                style={{
                    backgroundImage: `url(${header.banner || 'https://images.unsplash.com/photo-1555041469-a586c61ea929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'})`,
                }}>
                <div className="hero-overlay bg-opacity-30 lg:bg-opacity-20"></div>
                <div className="hero-content text-neutral-content text-center pb-32">
                    <div className="w-3/4">
                        <h1 className="mb-5 text-2xl lg:text-[64px] lg:leading-[76.8px] font-bold">{header.title || 'Loading...'}</h1>
                        <p className="text-sm lg:text-xl my-4 lg:my-12 lg:w-3/4 mx-auto">
                            {header.description || 'Loading...'}
                        </p>
                        <button className="bg-gray-100/40 py-[9px] px-[35px] lg:py-4 lg:px-20 rounded-lg text-sm lg:text-xl font-semibold text-white backdrop-blur-xl mt-5">Shop Now</button>
                    </div>
                </div>
                <div className="absolute bottom-0 bg-[#286F6C] w-3/4 mx-auto rounded-lg text-white text-center mb-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                        <div className="p-2 border-e border-white ">
                            <p className='text-2xl lg:text-[40px] font-semibold lg:mb-2'>{data.experience || 'Loading...'}</p>
                            <p className='text-sm lg:text-xl lg:w-2/4 mx-auto'>Year Experience</p>
                        </div>
                        <div className="p-2 lg:border-e lg:border-white">
                            <p className='text-2xl lg:text-[40px] font-semibold lg:mb-2'>{data.country || 'Loading...'}</p>
                            <p className='text-sm lg:text-xl lg:w-2/4 mx-auto'>Opened in the country</p>
                        </div>
                        <div className="p-2 border-e border-white">
                            <p className='text-2xl lg:text-[40px] font-semibold lg:mb-2'>{data.sold || 'Loading...'}</p>
                            <p className='text-sm lg:text-xl lg:w-2/5 mx-auto'>Furniture sold</p>
                        </div>
                        <div className="p-2">
                            <p className='text-2xl lg:text-[40px] font-semibold lg:mb-2'>{data.variant || 'Loading...'}</p>
                            <p className='text-sm lg:text-xl lg:w-2/4 mx-auto'>Variant Furniture</p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};



export default Hero;
