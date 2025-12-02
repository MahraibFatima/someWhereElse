const About = () => {
    return (
        <div className="relative w-full min-h-screen">

            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/2.jpg"
                    alt="Travel Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-opacity-40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-4 py-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    About Us
                </h1>
                <p className="text-xl md:text-2xl mb-10 max-w-3xl leading-relaxed">
                    Crafting unforgettable experiences through culinary excellence and authentic journeys
                </p>

                <div className="max-w-5xl mx-auto w-full">
                    {/* Mission Section */}
                    <div className="bg-transparent backdrop-blur-sm border-2 border-white rounded-lg p-8 mb-10">
                        <h2 className="text-3xl font-bold mb-6 text-yellow-400">Our Mission</h2>
                        <p className="text-lg md:text-xl leading-relaxed">
                            We believe that every journey should be accompanied by exceptional culinary experiences. 
                            Our mission is to bridge the gap between travel and gastronomy, offering curated food 
                            services that transform ordinary trips into extraordinary memories.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                        <div className="bg-transparent backdrop-blur-sm border-2 border-white rounded-lg p-8">
                            <h2 className="text-3xl font-bold mb-6 text-blue-400">Our Story</h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Founded by passionate travelers and food enthusiasts, we started with a simple idea: 
                                great food should be accessible no matter where your journey takes you.
                            </p>
                            <p className="text-lg leading-relaxed">
                                From humble beginnings as a local food tour operator, we've grown into a comprehensive 
                                travel food service, serving thousands of satisfied travelers worldwide.
                            </p>
                        </div>
                        
                        <div className="bg-transparent backdrop-blur-sm border-2 border-white rounded-lg p-8">
                            <h2 className="text-3xl font-bold mb-6 text-blue-400">Our Values</h2>
                            <ul className="text-lg leading-relaxed space-y-4">
                                <li className="flex items-start">
                                    <span className="text-yellow-400 mr-2">✓</span>
                                    <span>Authenticity in every culinary experience</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-400 mr-2">✓</span>
                                    <span>Sustainable and locally-sourced ingredients</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-400 mr-2">✓</span>
                                    <span>Exceptional service with personal touch</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-400 mr-2">✓</span>
                                    <span>Cultural preservation through food</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Team/Stats Section */}
                    <div className="bg-transparent backdrop-blur-sm border-2 border-white rounded-lg p-8">
                        <h2 className="text-3xl font-bold mb-8 text-white">By The Numbers</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { number: "5000+", label: "Happy Travelers" },
                                { number: "100+", label: "Destinations" },
                                { number: "50+", label: "Local Chefs" },
                                { number: "24/7", label: "Support" }
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-lg text-gray-200">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;