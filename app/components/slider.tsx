"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function Slider({ images }) {
  const [current, setCurrent] = useState(0);
  const count = images.length;

  const prevSlide = () => {
    setCurrent((current - 1 + count) % count);
  };
  const nextSlide = () => {
    setCurrent((current + 1) % count);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={
            index === current
              ? "opacity-100 transition-opacity duration-700"
              : "opacity-0 absolute inset-0 transition-opacity duration-700"
          }
        >
          {/* Use Next.js Image for optimization (lazy load, blur) */}
          <Image 
            src={src} 
            alt={`Slide ${index+1}`} 
            width={800} 
            height={500} 
            className="object-cover w-full h-auto"
            priority={index === 0}
          />
        </div>
      ))}
      {/* Prev/Next buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-80 p-2 rounded-full shadow"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-80 p-2 rounded-full shadow"
      >
        ›
      </button>
    </div>
  );
}
