import { Navigate, useNavigate } from "react-router";

export default function LoginPage() {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get("username");
        const password = formData.get("password");
        console.log("Username:", username);
        console.log("Password:", password);
        e.target.reset();
        const credentials = { username, password };
        try {
            const res = await fetch("https://fakestoreapi.com/auth/login", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials),
            });
            const data = await res.json();
            console.log(data);
            if (data.token) {
                localStorage.setItem("token", data.token);
                navigate("/");
            }
        } catch (error) {
            console.error(error);
        }


    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50 font-sans">
            <h1 className="mb-5 text-xl font-bold text-gray-800">Login Page</h1>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
                <div className="mb-4">
                    <label htmlFor="username" className="block mb-2 font-medium text-gray-700">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-2 font-medium text-gray-700">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                    Login
                </button>
            </form>
        </div>
    );
}
