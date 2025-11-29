import Navbar from './navbar.jsx';

const Hero = () => {
    return (
        <div className="h-screen mt-5">
            <div className="absolute inset-0 z-0">
                <img
                    src="/public/assets/1.jpg"
                    alt="Travel Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-opacity-40"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                    Travel Somewhere New
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
                    Discover amazing places and create unforgettable memories around the world
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Explore Now
                </button>
            </div>
        </div>
    );
};

export default Hero;