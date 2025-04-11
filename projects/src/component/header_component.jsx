import React from 'react'

const HeaderComponent = () => {
    return (
        <div className="main-container flex justify-between items-center px-15 py-2 bg-amber-200 ">
            <div className='logo-section cursor-pointer'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Daraz_logo_color.png" alt="logo" className='h-14' />
            </div>
            <div >
                <ul className='flex px-4 gap-6 font-bold cursor-pointer text-gray-700'>
                    <li className="hover:text-blue-600 transition duration-200">Home</li>
                    <li className="hover:text-blue-600 transition duration-200">About</li>
                    <li className="hover:text-blue-600 transition duration-200">Services</li>
                    <li className="hover:text-blue-600 transition duration-200">Contacts</li>
                </ul>

            </div>
            <div className='action-section cursor-pointer flex items-center gap-1.5'>
                <img src="https://static.vecteezy.com/system/resources/previews/018/930/476/non_2x/facebook-logo-facebook-icon-transparent-free-png.png" alt="" className='h-9' />

                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt="insta" className='h-5' />

            </div>
        </div>
    )
}

export default HeaderComponent