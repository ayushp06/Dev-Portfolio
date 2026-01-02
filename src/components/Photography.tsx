import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import type { Splide as SplideInstance } from "@splidejs/splide";
import { useEffect, useRef } from "react";
import { Card, CardContent } from "./ui/card";

const photos = [
  { src: "/images/DSC02188.JPG", alt: "Friends posing together outdoors" },
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

export function Photography() {
  const mainRef = useRef<{ splide: SplideInstance } | null>(null);
  const thumbsRef = useRef<{ splide: SplideInstance } | null>(null);

  useEffect(() => {
    const main = mainRef.current?.splide;
    const thumbs = thumbsRef.current?.splide;
    if (main && thumbs) {
      main.sync(thumbs);
    }
  }, []);

  return (
    <section id="photography" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl md:text-5xl text-center mb-16 text-white">
          Photography
        </h2>

        <Card className="bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
          <CardContent className="p-6 space-y-6">
            {/* MAIN IMAGE BOX (AUTO-RESIZES TO IMAGE) */}
            <div className="border border-slate-700 bg-slate-900/60 overflow-hidden">
              <Splide
                ref={mainRef}
                aria-label="Photography gallery"
                className="
                  [&_.splide__track]:h-auto
                  [&_.splide__list]:items-start
                  [&_.splide__slide]:h-auto
                "
                options={{
                  type: "slide",
                  perPage: 1,
                  rewind: true,
                  pagination: false,
                  arrows: true,
                  speed: 600,
                  drag: true,
                  keyboard: "global",
                  autoHeight: true,
                  updateOnMove: true,
                  classes: {
                    arrows: "splide__arrows px-3 pb-3",
                    arrow:
                      "splide__arrow bg-slate-800/80 border border-slate-700 text-white hover:bg-slate-700 transition-all rounded-full shadow-md",
                  },
                }}
              >
                {photos.map((photo) => (
                  <SplideSlide key={photo.src}>
                    <div className="flex items-center justify-center p-4">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        loading="lazy"
                        className="
                          block
                          max-w-full
                          h-auto
                          max-h-[70vh]
                          object-cover
                        "
                      />
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div>

            {/* THUMBNAILS (CROPPED, NOT STRETCHED) */}
            <div className="border border-slate-700 bg-slate-900/40 p-3 overflow-hidden">
              <Splide
                ref={thumbsRef}
                aria-label="Photography thumbnails"
                options={{
                  fixedWidth: 120,
                  fixedHeight: 84,
                  gap: "0.75rem",
                  rewind: true,
                  pagination: false,
                  isNavigation: true,
                  focus: "center",
                  arrows: false,
                  drag: true,
                  breakpoints: {
                    768: {
                      fixedWidth: 90,
                      fixedHeight: 64,
                      gap: "0.5rem",
                    },
                  },
                }}
              >
                {photos.map((photo) => (
                  <SplideSlide
                    key={`${photo.src}-thumb`}
                    className="
                      [&.is-active>button]:border-purple-500/70
                      [&.is-active>button]:shadow-[0_0_0_1px_rgba(168,85,247,0.55)]
                    "
                  >
                    <button
                      type="button"
                      className="
                        h-full w-full
                        border border-slate-700
                        bg-slate-900/60
                        hover:border-purple-500/60
                        transition-all duration-200
                        overflow-hidden
                        "
                      aria-label={`View ${photo.alt}`}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        loading="lazy"
                        className="h-full w-full object-cover block"
                      />
                    </button>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
