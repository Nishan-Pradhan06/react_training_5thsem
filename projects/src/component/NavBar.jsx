import React from 'react'
import { Link, NavLink } from 'react-router'
import { FaRegUserCircle } from "react-icons/fa";
import { useCheckAuth } from '../pages/auth/LoginPage';

const links = [
    {
        path: "/",
        name: "Home"
    },
    {
        path: "/shop",
        name: "Shop"
    },
    {
        path: "/categories",
        name: "Categories "
    },
    {
        path: "/cart",
        name: "Cart 🛒"
    },
]

export default function NavBar() {
    const { handleLogout, isLoggedIn } = useCheckAuth();

    return (
        <div className="main-container flex justify-between items-center px-15 py-1 bg-white shadow-md">
            <Link to="/">
                <div className='logo-section cursor-pointer'>
                    <img src="https://www.creativefabrica.com/wp-content/uploads/2022/01/08/goat-logo-Graphics-23166794-1-1-580x363.png" alt="logo" className='h-18' />
                </div>
            </Link>
            <div >
                <ul className='flex px-4 gap-6 font-bold cursor-pointer text-gray-700'>
                    {links.map(({ name, path }) => (


                        <li key={path} className='hover:text-blue-600 transition duration-200'>

                            <NavLink className={({ isActive }) => {
                                isActive ? "text-blue-600 " : "text-black"
                            }}

                                to={path}
                            >
                                {name}
                            </NavLink>
                        </li>

                    ))}
                </ul>

            </div>
            {isLoggedIn ? (
                <Link to={"/login"}>
                    <div className='action-section cursor-pointer flex items-center h-3.5'>
                        <button className='text-red-500 hover:text-red-700 cursor-pointer' onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </Link>
            ) :
                (
                    <Link to={"/login"}>
                        <div className='action-section cursor-pointer flex items-center h-3.5'>
                            <FaRegUserCircle size={24} />
                        </div>
                    </Link>

                )
            }
        </div>
    )
}