import { useState } from "react";

export function About() {
  const highlights = [
    { image: "/images/DSC02188.JPG", alt: "Friends posing together" },
    { image: "/images/IMG_4351.JPG", alt: "Sitting in a woven chair indoors" },
    { image: "/images/IMG_7057.jpg", alt: "Two athletes wearing jiu-jitsu gis" },
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
            I attend Penn State as an Aerospace Engineering student with a minor
            in Information Sciences & Technology. I work part time as a Data
            Engineer Intern for the School District of Philadelphia.
            Additionally, I am a Brazilian Jiu-Jitsu athlete and a professional
            photographer. Scroll below to view my work!
          </p>
        </div>

        <div className="mt-10 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {highlights.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setLightboxSrc(item.image)}
                className="
                  group relative w-full aspect-[4/3]
                  overflow-hidden
                  border border-slate-700
                  bg-slate-800/50
                  hover:bg-slate-700
                  hover:border-purple-500/50
                  transition-all
                  p-2
                "
              >
                {/* Inner frame (no rounding) */}
                <div
                  className="
                    h-full w-full
                    overflow-hidden
                    border border-white/10
                    bg-slate-950/10
                    flex items-center justify-center
                    transform-gpu
                    transition-transform duration-500
                    group-hover:scale-[1.03]
                  "
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-contain p-2 block"
                  />
                </div>
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
            {/* Lightbox frame (no rounding) */}
            <div className="overflow-hidden border border-slate-700 bg-slate-900/40 p-2 shadow-2xl">
              <div className="overflow-hidden border border-white/10 bg-slate-950/10">
                <img
                  src={lightboxSrc}
                  alt="Enlarged photograph"
                  className="w-full h-auto max-h-[80vh] object-contain block"
                />
              </div>
            </div>

            {/* Close button (no rounding) */}
            <button
              type="button"
              onClick={() => setLightboxSrc(null)}
              className="
                absolute top-6 right-6
                inline-flex items-center justify-center
                px-4 py-2
                text-sm font-medium
                text-slate-200
                bg-slate-800/60
                border border-slate-700
                backdrop-blur
                hover:bg-slate-700
                hover:border-purple-500/50
                transition-all
                shadow-lg shadow-black/20
              "
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
