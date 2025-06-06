import { useEffect } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {


    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
}, [menuOpen])
    return (<nav className = "fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-2xl border-b border-white/10 shadow-lg sticky"> 
        <div className= "md:max-w-full mx-auto md:px-9">
            <div className = "flex justify-end items-center h-16">
                <div className="relative cursor-pointer z-40 md:hidden text-2xl pr-10"  onClick = {() => setMenuOpen((prev) => !prev)}>
                    &#9776; {/* this is the unicode for a hamburger*/}
                </div>

                <div className = "hidden md:flex items-center space-x-8">
                    <a href = "#home" className="text-gray-300 hover:text-white transition-colors">
                        Home
                    </a>
                    <a href = "#about" className="text-gray-300 hover:text-white transition-colors">
                        About
                    </a>
                    <a href = "#projects" className="text-gray-300 hover:text-white transition-colors">
                        Projects
                    </a>
                    <a href = "#contact" className="text-gray-300 hover:text-white transition-colors">
                        Contact
                    </a>
                </div>
            </div>
        </div>
    </nav>
    );
};