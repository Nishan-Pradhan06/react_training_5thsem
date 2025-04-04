import { use, useState } from "react";

const laptops = [
    {
        id: 1,
        laptop_name: "Dell XPS 13",
        description: "A sleek, ultra-portable laptop with a 13.4-inch display, ideal for professionals on the go.",
    },
    {
        id: 2,
        laptop_name: "MacBook Pro 16",
        description: "A high-performance laptop designed for creators, featuring the M3 Pro chip and stunning Retina display.",
    },
    {
        id: 3,
        laptop_name: "HP Spectre x360",
        description: "A premium 2-in-1 laptop with a convertible design, long battery life, and vibrant OLED touchscreen.",
    },
    {
        id: 4,
        laptop_name: "Lenovo ThinkPad X1 Carbon",
        description: "A business-class laptop known for its durability, lightweight carbon fiber build, and excellent keyboard.",
    },
    {
        id: 5,
        laptop_name: "Asus ROG Zephyrus G14",
        description: "A compact gaming laptop that delivers powerful performance with Ryzen processors and RTX graphics.",
    },
    {
        id: 6,
        laptop_name: "Acer Swift 3",
        description: "An affordable, lightweight laptop with solid specs for students and casual users.",
    },
];


export default function LaptopsPage() {
    const [count, setCount] = useState(2);

    function handleInc() {
        setCount(count + 1);
    }
    function handleDec() {
        setCount(count - 1);
    }

    function handleCountType(Type) {
        if (Type === "inc") {
            setCount(count + 1);
        }
        else {
            setCount(count - 1);

        }

    }
    return (
        <>
            <h1>Laptops Page</h1>
            <div >
                <div style={{ backgroundColor: "lightblue", padding: "10px", borderRadius: "5px" }}>
                    {count}
                </div>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
                {/* {
                    laptops.map((laptop) => (<LaptopCard key={laptop.id} data={laptop} />

                    ))
                } */}
            </div>

            <h1>with function</h1>
            <div>
                <button onClick={handleInc}>Increment</button>
                <button onClick={handleDec}>Decrement</button>
            </div>
            <h1>with function parameter</h1>
            <div>
                <button onClick={handleInc}>Increment</button>
                <button onClick={handleDec}>Decrement</button>
            </div>
        </>
    )
}

const LaptopCard = ({ data }) => {
    return (
        <div>
            <h2>{data.laptop_name}</h2>
            <p>{data.description}</p>
        </div>
    )
}

// export default function NishanPradhan() {
//     const [count, setCount] = useState(0);
//     return (
//         <>
//             <div style={{ backgroundColor: "orange", width: 50, height: 50 }}>
//                 <h1>Counter APP</h1>
//                 <div >{count}</div>
//             </div>
//             <button onClick={() => setCount(count + 1)}>INCREMENT</button>

//         </>
//     )
// }