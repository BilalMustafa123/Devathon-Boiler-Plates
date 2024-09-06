import { useState } from "react";
import bgImage from "../../assets/bg-black.jpeg";
import { FaRegTrashCan } from "react-icons/fa6";

const Items = [
    {
        id: 1,
        name: "Football",
        price: 200,
        img: "https://via.placeholder.com/16",
    },
    {
        id: 2,
        name: "Basketball",
        price: 150,
        img: "https://via.placeholder.com/16",
    },
    {
        id: 3,
        name: "Tennis Ball",
        price: 50,
        img: "https://via.placeholder.com/16",
    },
];

function Cart() {
    const [items, setItems] = useState(Items);
    const [quantities, setQuantities] = useState(
        items.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
    );

    // Handle quantity increment
    const handleIncrement = (id) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: prevQuantities[id] + 1,
        }));
    };

    // Handle quantity decrement
    const handleDecrement = (id) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1,
        }));
    };
    const handleDelete = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const totalAmount = items.reduce(
        (total, item) => total + item.price * quantities[item.id],
        0
    );
    return (
        <div className="p-10 bg-slate-100">
            <div className="flex flex-row gap-4 justify-center">
                <div className="w-[60%]">
                    <table className="rounded-lg w-full overflow-hidden">
                        <thead>
                            <tr className="bg-gradient-to-r from-teal-700 to-teal-400 uppercase text-sm leading-normal w-full text-white">
                                <th className="p-[2%] text-left text-[13px] w-[10%]">No.</th>
                                <th className="p-[2%] text-left text-[13px] w-[30%]">Item</th>
                                <th className="p-[2%] text-left text-[13px] w-[20%]">Qty</th>
                                <th className="p-[2%] text-left text-[13px] w-[20%]">Price</th>
                                <th className="p-[2%] text-center text-[13px] w-[20%]">
                                    Delete
                                </th>
                            </tr>
                        </thead>
                        <div className="mt-4 flex"></div>
                        <tbody className="px-4 py-10">
                            {items.map((item, index) => {
                                const totalPrice = item.price * quantities[item.id];
                                return (
                                    <tr
                                        key={item.id}
                                        className="relative px-12 py-8" // Make the row relative to position the separator
                                    >
                                        <td className="p-[4%] text-left font-bold text-blue-600 text-[16px] w-[10%] bg-white">
                                            {index + 1}.
                                        </td>
                                        <td className="p-[2%] text-left text-[13px] w-[40%] bg-white">
                                            <div className="flex flex-row gap-3 items-center">
                                                <img
                                                    src={bgImage}
                                                    alt="item"
                                                    className="h-8 w-8 rounded-full"
                                                />
                                                <h1 className="font-bold text-[16px]">{item.name}</h1>
                                            </div>
                                        </td>
                                        <td className="p-[2%] text-left text-[13px] w-[20%] bg-white">
                                            <div className="flex flex-row items-center gap-2">
                                                <button
                                                    className="px-3 py-1 bg-gray-50 rounded"
                                                    onClick={() => handleDecrement(item.id)}
                                                >
                                                    -
                                                </button>
                                                <span>{quantities[item.id]}</span>
                                                <button
                                                    className="px-3 py-1 bg-gray-50 rounded"
                                                    onClick={() => handleIncrement(item.id)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td className="p-[2%] text-left text-[13px] w-[10%] bg-white">
                                            ${totalPrice}
                                        </td>
                                        <td className="p-[2%] text-center text-[13px] w-[20%] bg-white">
                                            <button
                                                className="px-4 py-2 text-red-600 rounded"
                                                onClick={() => handleDelete(item.id)}
                                            >
                                                <FaRegTrashCan className="h-5 w-5" />
                                            </button>
                                        </td>
                                        {/* Separator */}
                                        {index < items.length - 1 && (
                                            <div
                                                className="absolute inset-x-5 bottom-0 border-b-[1px] border-gray-300 w-[90%]"
                                                style={{ left: "5%" }} // Center the separator within the row
                                            ></div>
                                        )}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col px-5 py-5 rounded-lg bg-white w-80 h-[15rem]">
                    {/* Use flex-grow to make the content area flexible */}
                    <div className="flex-grow">
                        <h1 className="text-center font-bold text-2xl">Details</h1>
                        <h1 className="text-[16px] font-semibold mt-10">Total Amount: ${totalAmount}</h1>
                    </div>
                    <button className="flex justify-center rounded-lg py-2 hover:shadow-gray-500 shadow-md duration-300 self-center bg-green-500 text-white w-[80%] text-center mt-auto">
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;