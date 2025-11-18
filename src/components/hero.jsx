const Hero = () => {    
    return (
        <div className="relative h-screen">
            {/* Background Image with Tailwind bg-[url()] */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1726288300127-09bf1b76b1bf?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
                {/* Optional overlay */}
                <div className="absolute inset-0 bg-pink bg-opacity-30"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-5xl font-bold mb-4">Travel Somewhere Else</h1>
                <p className="text-xl mb-8 max-w-2xl">Discover amazing places and create unforgettable memories</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300">
                    Explore Now
                </button>
            </div>
        </div>
    );
};

export default Hero;