import { useState } from "react";

export function About() {
  const highlights = [
    {
      image: "/images/DSC02188.JPG",
      alt: "Friends posing together"
    },
    {
      image: "/images/IMG_4351.JPG",
      alt: "Sitting in a woven chair indoors"
    },
    {
      image: "/images/IMG_7057.jpg",
      alt: "Two athletes wearing jiu-jitsu gis"
    }
  ];

  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-16 text-white">
          About Me
        </h2>
        
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-slate-700 mb-6">
            I attend Penn State as an Aerospace Engineering student with a minor in Information Sciences & Technology. I work part time as a Data Engineer Intern for the School District of Philadelphia. Additionally, I am a Brazilian Jiu-Jitsu athlete and a professional photographer. Scroll below to view my work!
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {highlights.map((item, index) => (
              <button
                key={index}
                type="button"
                className="relative block w-full overflow-hidden rounded-lg border border-slate-700 bg-slate-800/50 hover:border-purple-400/40 aspect-[4/5]"
                onClick={() => setLightboxSrc(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxSrc(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxSrc}
              alt="Enlarged photograph"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <button
              type="button"
              className="absolute top-3 right-3 px-3 py-1 text-sm text-white bg-slate-900/80 border border-slate-700 rounded"
              onClick={() => setLightboxSrc(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
