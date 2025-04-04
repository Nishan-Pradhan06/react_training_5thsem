const lists = [
    {
        id: 1,
        u_name: "Aarav Sharma",
        age: 25,
    },
    {
        id: 2,
        u_name: "Sophia Patel",
        age: 23,
    },
    {
        id: 3,
        u_name: "Rohan Mehta",
        age: 27,
    },
    {
        id: 4,
        u_name: "Isabella Thomas",
        age: 22,
    },
    {
        id: 5,
        u_name: "Liam Wilson",
        age: 28,
    },
    {
        id: 6,
        u_name: "Emma Brown",
        age: 24,
    },
];


export default function LandingPage() {
    return (
        <>
            <h1>Landing Page</h1>
            <div>
                <input />

            </div>
            <div>
                {
                    lists.map((list) => (<Card key={list.id} data={list} />

                    ))
                }
            </div>
        </>
    )
}

const Card = ({ data }) => {
    return (
        <div>
            <h2>{data.u_name}</h2>
            <p>{data.age}</p>
        </div>
    )
}