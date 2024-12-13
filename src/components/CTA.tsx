import React, { useState } from 'react';
import LampBg from '../assets/lampbg.svg';
import DOMPurify from 'dompurify';

interface CTAProps {
    onSubmit: (email: string) => void;
}

const CTA: React.FC<CTAProps> = ({ onSubmit }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(email);
        setEmail('');
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const cleanEmail = DOMPurify.sanitize(e.target.value);
        setEmail(cleanEmail);
    };

    return (
        <section
            className="mt-20 bg-no-repeat bg-center bg-cover relative h-[250px] lg:h-[500px]"
            style={{ backgroundImage: `url(${LampBg})` }}
        >
            <div className="absolute inset-0 lg:inset-auto flex flex-col justify-center items-center lg:items-stretch lg:top-1/4 lg:left-1/2 text-center lg:text-left">
                <p className="text-2xl lg:text-5xl font-semibold lg:leading-[54px] text-white">
                    Get more discount <br /> Off your order
                </p>
                <p className="text-sm lg:text-xl pt-4 pb-6 text-white">Join our mailing list</p>
                <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                        type="email"
                        value={email}
                        onChange={onChange}
                        placeholder="Your email address"
                        className="input input-sm lg:input input-bordered w-full max-w-xs"
                        required
                    />
                    <button type="submit" className="btn btn-sm btn-neutral lg:btn lg:btn-neutral text-white">
                        Shop Now
                    </button>
                </form>
            </div>
        </section>
    );
};

export default CTA;
