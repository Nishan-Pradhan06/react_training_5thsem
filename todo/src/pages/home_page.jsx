import { Fragment } from "react";

const isAdmin = true;
export default function HomePage() {
    let count = 4;
    return (
        <Fragment>
            {isAdmin ? <h1>Welcome, Admin</h1> : <h1>Hello, Nishan Pradhan</h1>}

            <p>WELCOME TO JUMANJI....... WE NEED YOU. WE WANT YOU!!!!!</p>

            <ChildComp count={count} greet={"Hello,"} name={"nishan"} />

            <SecondChildComp />
            <SubChildComp count={count} />
        </Fragment>
    );
}

export const ChildComp = ({ count, greet, ...rest }) => {
    return (
        <>
            <div style={{ backgroundColor: "gray", border: "1px solid" }}>
                <p>Child Component</p>
                <div>{count}</div>
                <div>{greet}{rest.name}</div>
            </div>
        </>
    )
}

export const SecondChildComp = (props) => {
    return (
        <>
            <div style={{ backgroundColor: "InfoBackground" }}>
                <h1>Second Child Component</h1>

            </div>
        </>
    )
}


export const SubChildComp = ({ count }) => {
    return (
        <>
            <div>
                <h1>SubChild Comp</h1>
                {count}
            </div>
        </>
    )
}