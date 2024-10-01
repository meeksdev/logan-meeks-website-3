// import { Link } from 'react-aria-components';
// import { NavLink } from "react-router-dom";
import Image from 'next/image';
import Link from 'next/link';
import HeroImage from '/public/Hero-Image.jpg';

function Hero() {
    return (
        <>
            <div className="relative overflow-hidden h-[75vh]">
                <Image priority src={HeroImage} alt={'Background Image of Blurred Code'} placeholder="blur" fill sizes="100vw" className="object-cover block" />
                <section className="absolute inset-0 flex h-[75vh] flex-col items-center justify-around text-white">
                    <h1 className="max-w-[1080px] lg:text-6xl text-balance text-center sm:text-4xl text-2xl font-bold">
                        Affordable Web Solutions Delivering Big Results for Small Businesses
                    </h1>
                    <p className="max-w-[1080px] text-balance text-center sm:text-2xl text-lg">
                        Unlock the potential of your online business with stunning website designs and custom applications tailored to your vision & goals.
                    </p>
                    <Link
                        href="/contact"
                        className="ml-2 w-fit rounded-full border-[1px] border-shakespeare px-3 text-2xl hover:bg-shakespeare-500 pressed:bg-shakespeare-600"
                    >
                        Contact Me
                    </Link>
                </section>
            </div>
        </>
    );
}

export default Hero;
