import { use, useReducer } from "react";
// import LoginCss from "./login.css";
import "./login.css";

// const initialState = {
//     username: "nishan",
//     password: "goat",
// };
// const reducer = (state, action) => {
//     if (action.type === "username") {
//         return { ...state, username: action.payload };
//     }
//     else {
//         if (action.payload == "goat") {
//             window.alert("Login Successful");
//             return state;
//         }
//         else {

//             return { ...state, password: action.payload };
//         }
//     }
// }


// export default function LoginPage() {
//     const [formData, dispatch] = useReducer(reducer, initialState);
//     console.log("---form Data----", formData);
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const formData = new FormData(e.target);
//         const username = formData.get("username");
//         const password = formData.get("password");
//         console.log("Username:", username);
//         console.log("Password:", password);
//         e.target.reset();
//     }
//     return (
//         <div className="login-page">
//             <h1>Login Page</h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="username">Username:</label>
//                     <input type="text" id="username" name="username"
//                         value={formData.username}
//                         onChange={(e) =>
//                             dispatch({ type: "username", payload: e.target.value })} />
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password:</label>
//                     <input type="password" id="password" name="password"
//                         value={formData.password}
//                         onChange={(e) => dispatch({ type: "password", payload: e.target.value })} />

//                 </div>
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// }

export default function LoginPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get("username");
        const password = formData.get("password");
        console.log("Username:", username);
        console.log("Password:", password);
        e.target.reset();
    }
    return (
        <div className="login-page">
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password"
                    />

                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}