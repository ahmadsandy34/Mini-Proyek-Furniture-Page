import React from 'react'
import WeCreateImg from '../assets/wecreateimg.svg'
import Checklist from '../assets/checklist.svg'

const WeCreate: React.FC = () => {
    return (
        <>
            <section className="w-4/5 mx-auto mt-20">
                <div className="flex lg:flex-row flex-col items-center justify-center gap-5 lg:gap-20">
                    <div className='hidden lg:block'>
                        <img
                            className="lg:max-h-[400px] lg:max-w-[555px]"
                            src={WeCreateImg}
                            alt="About us image"
                        />
                    </div>
                    <div className="max-w-lg">
                        <p className='text-2xl lg:text-[40px] lg:leading-snug font-semibold py-2'>We Create Your Home More Aestetic</p>
                        <p className='text-sm lg:text-xl py-2'>Furnitre power is a software as services for multiperpose business management system, </p>
                        <div className="flex flex-row gap-4 mt-4 py-2">
                            <div className="">
                                <img src={Checklist} alt="Checklist" />
                            </div>
                            <div className="">
                                <p className="lg:text-xl font-semibold">Valuation Services</p>
                                <p className="text-sm lg:text-base">Sometimes features require a short description.  This can be detailed description</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 mt-4 py-2">
                            <div className="">
                                <img src={Checklist} alt="Checklist" />
                            </div>
                            <div className="">
                                <p className="lg:text-xl font-semibold">Development of Furniture Modelss</p>
                                <p className="text-sm lg:text-base">Sometimes features require a short description. This can be detailed description</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:hidden mt-5'>
                        <img
                            className="lg:max-h-[400px] lg:max-w-[555px]"
                            src={WeCreateImg}
                            alt="About us image"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default WeCreate