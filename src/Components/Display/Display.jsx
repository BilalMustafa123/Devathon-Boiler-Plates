import React from 'react'
import image from '../../assets/shoes.jpeg'
const prod = [
    {
        src: "https://png.pngtree.com/png-vector/20231230/ourmid/pngtree-dropshipping-men-hole-sole-jogging-shoes-png-image_11389148.png", alt: "Chal Nikal", price: "100Rs", name: "Shoes"
    },
    {
        src: "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-realistic-t-shirt-png-image_9906363.png", alt: "Chal Nikal", price: "1000Rs", name: "Hoddie"
    },
    {
        src: "/assets/black-shirt.jpeg", alt: "Chal Nikal", price: "1500Rs", name: "Jacket"
    },
    {
        src: "/assets/shoes.jpeg", alt: "Chal Nikal", price: "100Rs", name: "Shoes"
    },
    {
        src: "/assets/shirt.jpeg", alt: "Chal Nikal", price: "1000Rs", name: "Hoddie"
    },
    {
        src: "/assets/black-shirt.jpeg", alt: "Chal Nikal", price: "1500Rs", name: "Jacket"
    },
    {
        src: "/assets/shoes.jpeg", alt: "Chal Nikal", price: "100Rs", name: "Shoes"
    },
    {
        src: "/assets/shirt.jpeg", alt: "Chal Nikal", price: "1000Rs", name: "Hoddie"
    },
    {
        src: "/assets/black-shirt.jpeg", alt: "Chal Nikal", price: "1500Rs", name: "Jacket"
    },



]

const Display = () => {
    return (
        <div className="bg-white">
            <h1 className="text-4xl font-extrabold text-gray-900 mt-24 text-center">Explore Our Book Collection</h1>
            <div className='grid grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-1 gap-8 min-h-56 py-16 px-12'>
                {prod.map((item, index) => (
                    <div className='min-h-64 flex flex-col items-center justify-center bg-gray-50 rounded-lg shadow-lg px-4 py-4' key={index}>
                        <div class="relative w-48 h-48 overflow-hidden">
                            <img src={item.src} class="object-cover w-full h-full" alt={item.alt} />
                            {/* <div class="absolute inset-0 bg-white/30"></div> */}
                        </div>

                        <div className="mt-4 text-lg font-semibold">{item.name}</div>
                        <div className='flex flex-row justify-between items-center w-full mt-2 -600'>
                            <div className=' font-extrabold'>{item.price}</div>
                            <div>
                                <button className='bg-green-400 rounded-full px-3 py-[5px] flex items-center content-center text-center justify-center text-xm'>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>


                ))}
            </div>
        </div>
    );

}

export default Display