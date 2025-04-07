import { useEffect, useState } from "react"

// export default function LearnUseEffect() {
//     const [count, setCount] = useState(0);
//     const [clicked, setClicked] = useState(0);
//     useEffect(() => {
//         setCount(count + 1);
//     }, [clicked])
//     return (
//         <>
//             <div>
//                 <h1>Learn  Use Effect</h1>
//                 <div>{count}</div>
//                 <div>

//                     <button onClick={() => setClicked(clicked + 1)}>Click</button>
//                 </div>
//             </div>
//         </>
//     )
// }
export default function LearnUseEffect() {
    const [products, setProducts] = useState([]);
    const [clicked, setClicked] = useState(0);
    const getData = async () => {
        const res = await fetch("https://67f36feeec56ec1a36d5c7fb.mockapi.io/api/v1/products");
        const data = await res.json();
        console.log("______" + data);
        setProducts(data);
    };
    useEffect(() => {
        // const getData = async () => {
        //     const res = await fetch("https://67f36feeec56ec1a36d5c7fb.mockapi.io/api/v1/products");
        //     const data = await res.json();
        //     console.log("______" + data);
        //     setProducts(data);
        // }
        getData();
    }, [])
    return (
        <>
            <div>
                <h1>Learn  Use Effect</h1>
                <div>
                    <p>{products?.length}</p>
                    <button onClick={getData}>Fetch Data</button>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
                    {
                        products?.map((product) => {
                            return (
                                <div
                                    key={product.id}
                                    style={{
                                        border: '1px solid #ccc',
                                        borderRadius: '10px',
                                        padding: '16px',
                                        width: '200px',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                        textAlign: 'center',
                                    }}
                                >
                                    <h1 style={{ fontSize: '18px', marginBottom: '10px' }}>{product.name}</h1>
                                    <img
                                        src={product.avatar}
                                        alt={product.name}
                                        height={100}
                                        style={{ borderRadius: '8px', objectFit: 'cover', width: '100%', height: '100px' }}
                                    />
                                </div>
                            );
                        })
                    }
                </div>


            </div>
        </>
    )
}
