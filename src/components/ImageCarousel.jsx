// src/components/ImageCarousel.js
import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    if (!images || images.length === 0) {
        return <div className="text-center p-12 text-gray-600 bg-gray-100 rounded-lg max-w-2xl mx-auto">Brak zdjęć do wyświetlenia</div>;
    }

    return (
        <div className="relative w-full mx-auto overflow-hidden rounded-lg shadow-lg bg-white mt-5">
            <div className="w-full h-96 flex justify-center items-center overflow-hidden">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full h-full object-cover block"
                />
            </div>
            <div className="absolute top-1/2 w-full flex justify-between items-center px-4 -translate-y-1/2">
                <button onClick={goToPrevious} className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white px-3 py-2 rounded-md text-lg transition-colors duration-300">
                    &lt; Poprzedni
                </button>
                <button onClick={goToNext} className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white px-3 py-2 rounded-md text-lg transition-colors duration-300">
                    Następny &gt;
                </button>
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;