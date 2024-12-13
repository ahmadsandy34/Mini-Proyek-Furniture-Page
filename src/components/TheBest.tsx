import React from 'react'
import TheBestImg from '../assets/thebestimg.svg'

const TheBest: React.FC = () => {
    return (
        <>
            <section className="w-4/5 mx-auto mt-20">
                <div className="flex lg:flex-row flex-col items-center justify-center gap-5 lg:gap-20">
                    <div className="max-w-lg">
                        <p className='text-2xl lg:text-[40px] lg:leading-[52px] font-semibold pb-2 lg:pb-8'>The Best Furniture Manufacturer Of Your Choice</p>
                        <p className='text-sm lg:text-xl py-2 leading-6 lg:leading-[34px]'>Furnitre power is a software as services for multiperpose business management system, expecially for them who are running two or more business exploree the future Furnitre power is a software as services \</p>
                    </div>
                    <div className='mt-5'>
                        <img
                            className="lg:max-h-[400px] lg:max-w-[555px]"
                            src={TheBestImg}
                            alt="About us image"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default TheBest