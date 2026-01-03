import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  { src: "/images/DSCF0207.JPG", alt: "Black and white portrait" },
  { src: "/images/DSCF0209.JPG", alt: "City street photography" },
  { src: "/images/DSCF0219.JPG", alt: "Portrait in natural light" },
  { src: "/images/DSCF0222.JPG", alt: "Urban architecture shot" },
  { src: "/images/DSCF0504.JPG", alt: "Portrait with warm tones" },
  { src: "/images/DSCF0541.JPG", alt: "Outdoor portrait" },
  { src: "/images/DSCF0661.JPG", alt: "Lifestyle photography" },
  { src: "/images/DSCF0682.JPG", alt: "Portrait with shallow depth of field" },
  { src: "/images/DSCF0748.JPG", alt: "Portrait with colorful backdrop" },
];

export const Photography = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handlePrevious = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const difference = touchStartX.current - touchEndX.current;
    const isLeftSwipe = difference > 50;
    const isRightSwipe = difference < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const currentPhoto = photos[currentIndex];
  const nextPhoto = photos[(currentIndex + 1) % photos.length];
  const prevPhoto = photos[(currentIndex - 1 + photos.length) % photos.length];

  return (
    <section id="photography" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Main Carousel Container */}
      <div
        className="relative w-full h-full flex items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Previous Photo - Hidden */}
        <div className="absolute inset-0 opacity-0 pointer-events-none">
          <img
            src={prevPhoto.src}
            alt={prevPhoto.alt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Current Photo */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <img
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />
        </div>

        {/* Next Photo - Hidden */}
        <div className="absolute inset-0 opacity-0 pointer-events-none">
          <img
            src={nextPhoto.src}
            alt={nextPhoto.alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Previous photo"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Next photo"
      >
        <ChevronRight size={32} />
      </button>

      {/* Photo Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium">
        {currentIndex + 1} / {photos.length}
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setCurrentIndex(index);
            }}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "bg-white h-3 w-3"
                : "bg-white/50 h-2 w-2 hover:bg-white/75"
            }`}
            aria-label={`Go to photo ${index + 1}`}
          />
        ))}
      </div>

      {/* Touch hint for mobile */}
      <div className="absolute top-6 right-6 z-20 text-white/50 text-xs">
        <p>← / → or swipe</p>
      </div>
    </section>
  );
};
