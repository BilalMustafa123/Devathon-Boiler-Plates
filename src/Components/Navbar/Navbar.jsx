import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Vision', id: 'vision' },
    { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const scrollToComponent = (id) => {
        setNavOpen(false)
        const targetPosition = document.getElementById(id).offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000; // Duration in milliseconds
        let start = null;

        const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const percentage = Math.min(progress / duration, 1);
            window.scrollTo(0, startPosition + distance * percentage);
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }


    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <nav id='navbar' className='h-16 bg-[#001f3f] text-white sticky top-0 z-50'>
            <div className='text-3xl flex px-8 pl-[10%] py-3'>
                <h2 onClick={() => scrollToComponent('hero')} className='hover:cursor-pointer'>
                    Portfolio
                </h2>
                <div className='ml-auto mr-4 max-sm:mr-0'>
                    <ul className='flex text-xl py-2 space-x-4 lg:space-x-8 max-md:hidden'>
                        {navItems.map((navItem, index) => (
                            <li onClick={() => scrollToComponent(navItem.id)}
                                key={index} className='cursor-pointer hover:text-[#0074D9] transition-colors duration-300'>
                                {navItem.name}
                            </li>
                        ))}
                    </ul>
                    <Menu className='my-2 hidden max-md:block cursor-pointer' onClick={toggleNav} />
                </div>
            </div>

            {/* Mobile Dropdown */}
            <div
                className={`fixed top-0 left-0 w-full h-96 bg-[#001f3f] z-0 transition-transform duration-300 ease-in-out ${navOpen ? 'translate-y-0' : '-translate-y-full'} max-md:flex flex-col justify-center`}
            >
                <X className='ml-auto mr-8 cursor-pointer' onClick={toggleNav} />
                <ul className='flex flex-col space-y-4 text-xl py-2 text-center'>
                    {navItems.map((navItem, index) => (
                        <li key={index} onClick={() => scrollToComponent(navItem.id)} className='z-50 cursor-pointer hover:text-blue-400 transition-colors duration-300'>
                            {navItem.name}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;