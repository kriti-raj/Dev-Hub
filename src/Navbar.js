// import React from "react"
// import DevHub from './components/assets/DEV_HUB.svg'
// import DevHub from './components/assets/DEV_HUB1.svg'
import DevHub from './components/assets/DEV_HUB2.svg'
// import DevHub from './components/assets/DEV_HUB3.svg'
const Navbar = () => {
    return (
        <>
            <header className="bg-gray-400 shadow-lg fixed top-0 left-0 right-0 z-10 flex justify-center items-center">
                <button className="flex justify-center">
                    <img
                        src={DevHub}
                        alt="logo"
                        className="w-9/12"
                    />
                </button>
            </header>
        </>
    )
}

export default Navbar;