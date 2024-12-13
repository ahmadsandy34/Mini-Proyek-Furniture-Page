import React from 'react';
import { Testimonials } from '../pages/Home';
import TestimonialImg from '../assets/testimonialimg.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// @ts-expect-error import error
import 'swiper/css';
// @ts-expect-error import error
import 'swiper/css/pagination';

interface TestimonialProps {
    testimonials: Testimonials[];
}

const Testi: React.FC<TestimonialProps> = ({ testimonials }) => {
    const total = 5;
    const testimonial = testimonials.slice(0, total);
    return (
        <>
            <section className="w-4/5 mx-auto mt-20">
                <div className="flex lg:flex-row flex-col items-center justify-center gap-5 lg:gap-20">
                    <div className="w-full max-w-lg">
                        <p className='text-2xl lg:text-[40px] lg:leading-[52px] font-semibold pb-2 lg:pb-8 text-left'>What People Are Saying About Us</p>
                        <div className="">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                loop={true}
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 2500, disableOnInteraction: false }}
                                grabCursor={true}
                                modules={[Pagination, Autoplay]}
                                className="mySwiper"
                            >
                                {testimonial.map((testi) => (
                                    <SwiperSlide key={testi.id}>
                                        <div className="w-full max-w-md mx-auto bg-white p-6">
                                            <div className="flex items-center space-x-4">
                                                <img
                                                    src={testi.image}
                                                    alt={testi.name}
                                                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-full object-cover"
                                                />
                                                <div>
                                                    <p className="font-semibold text-sm lg:text-lg">{testi.name}</p>
                                                    <p className="text-[10px] text-black/50 lg:text-sm">{testi.title}</p>
                                                </div>
                                            </div>
                                            <div className="my-2 lg:mt-6">
                                                <p className="text-sm lg:text-xl">"{testi.message}"</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <img
                            className="w-full max-w-xs lg:max-h-[400px] lg:max-w-[555px] mx-auto"
                            src={TestimonialImg}
                            alt="About us image"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testi;
