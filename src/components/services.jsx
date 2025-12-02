import React from 'react';
import servicesData from './data/services';

const Service = () => {
    return (
        <div className="relative w-full min-h-screen">
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/5.jpg"
                    alt="Travel Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-opacity-40"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-4 py-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
                    Our Services
                </h2>
                <p className="text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
                    Explore our premium services designed to make your experience unforgettable.
                    Each service is carefully crafted with excellence in mind.
                </p>
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white border-b-2 border-white pb-3">
                    Our Food
                </h3>
                <div className="max-w-6xl mx-auto w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesData.map((service, index) => (
                            <div
                                key={index}
                                className="bg-transparent backdrop-blur-sm border-2 border-white rounded-lg shadow-lg p-6 transition-all duration-300"
                            >
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-56 object-cover rounded-lg mb-4 border-2 border-white"
                                />
                                <h3 className="font-bold text-2xl mb-3 text-white">{service.title}</h3>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-yellow-400 font-semibold flex items-center text-lg">
                                        ⭐ {service.rating}
                                    </span>
                                    <span className="font-bold text-green-400 text-xl">{service.price}</span>
                                </div>
                                <p className="text-gray-200 mb-6 text-lg leading-relaxed">{service.description}</p>
                                <button className="w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors font-medium text-lg border-2 border-white">
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;