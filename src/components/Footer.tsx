import React from 'react';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    LineShareButton,
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    WhatsappIcon,
    LineIcon,
} from "react-share";

const Footer: React.FC = () => {
    const shareUrl = 'http://github.com';
    return (
        <>
            <footer className="bg-black text-white text-left pt-8 lg:pt-16 pb-4">
                <div className="w-3/4 mx-auto flex flex-col lg:flex-row justify-between  mb-4">
                    <div className="">
                        <p className="text-2xl font-bold">FurniShop</p>
                    </div>
                    <div className="flex gap-4 my-4 lg:my-0">
                        <FacebookShareButton url={shareUrl}>
                            <FacebookIcon size={40} round bgStyle={{ fill: '#6D5DD3', opacity: 0.3 }} />
                        </FacebookShareButton>
                        <TwitterShareButton url={shareUrl}>
                            <TwitterIcon size={40} round bgStyle={{ fill: '#6D5DD3', opacity: 0.3 }} />
                        </TwitterShareButton>
                        <LinkedinShareButton url={shareUrl}>
                            <LinkedinIcon size={40} round bgStyle={{ fill: '#6D5DD3', opacity: 0.3 }} />
                        </LinkedinShareButton>
                        <WhatsappShareButton url={shareUrl}>
                            <WhatsappIcon size={40} round bgStyle={{ fill: '#6D5DD3', opacity: 0.3 }} />
                        </WhatsappShareButton>
                        <LineShareButton url={shareUrl}>
                            <LineIcon size={40} round bgStyle={{ fill: '#6D5DD3', opacity: 0.3 }} />
                        </LineShareButton>
                    </div>
                </div>
                <div className="w-3/4 mx-auto grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-8 lg:border-t-2 lg:border-white lg:pt-12">
                    <div className="text-sm">
                        <p className="text-lg font-medium mb-4">Our Products</p>
                        <p className="mb-4">The Support Suite</p>
                        <p className="mb-4">The Sales Suite</p>
                        <p className="mb-4">Support</p>
                        <p className="mb-4">Guide</p>
                    </div>
                    <div>
                        <p className="text-lg font-medium mb-4">Top Features</p>
                        <p className="mb-4">Ticketing System</p>
                        <p className="mb-4">Knowledge Base</p>
                        <p className="mb-4">Community Forums</p>
                        <p className="mb-4">Help Desk Software</p>
                    </div>
                    <div className="text-sm lg:justify-self-center">
                        <p className="text-lg font-medium mb-4">Resources</p>
                        <p className="mb-4">Product Support</p>
                        <p className="mb-4">Request Demo</p>
                        <p className="mb-4">Library</p>
                        <p className="mb-4">Peoplepower Blog</p>
                    </div>
                    <div className="text-sm lg:justify-self-center">
                        <p className="text-lg font-medium mb-4">Company</p>
                        <p className="mb-4">About Us</p>
                        <p className="mb-4">Press</p>
                        <p className="mb-4">Investors</p>
                        <p className="mb-4">Events</p>
                    </div>
                    <div className="text-sm lg:justify-self-end">
                        <p className="text-lg font-medium mb-4">Favourite Things</p>
                        <p className="mb-4">For Enterprise</p>
                        <p className="mb-4">For Startups</p>
                        <p className="mb-4">For Benchmark</p>
                        <p className="mb-4">For Small Business</p>
                    </div>
                </div>
                <div className="w-3/4 mx-auto text-center mt-12">
                    <p className="text-sm">© NameBrand 2022 - All Rights Reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Footer