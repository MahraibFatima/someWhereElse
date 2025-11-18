const Navbar = () => {return (

    <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
                {

                }
                <div className="flex item-center">
                    <span className="text-xl font-bold text-gray-800">logo</span>
                </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
                <a href="#home" className="text-gray-600 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">
                    Home
                </a>
                <a href="#about" className="text-gray-600 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">
                    About
                </a>
                <a href="#services" className="text-gray-600 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">
                    Services
                </a>
                <a href="#contact" className="text-gray-600 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                </a>

                <button className="bg-blue-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                    login
                </button>
            </div>
        </div>
    </nav>
);};

export default Navbar;