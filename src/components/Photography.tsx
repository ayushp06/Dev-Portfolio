import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  {
    src: "/images/DSC02188.JPG",
  },
  {
    src: "/images/IMG_4351.JPG",
  },
  {
    src: "/images/IMG_7057.jpg",
  }
];

export function Photography() {
  const [current, setCurrent] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const prev = () => setCurrent((current - 1 + photos.length) % photos.length);
  const next = () => setCurrent((current + 1) % photos.length);

  useEffect(() => {
    const id = setInterval(() => {
      if (!isHovering) next();
    }, 2600);
    return () => clearInterval(id);
  }, [isHovering, current]);

  return (
    <section id="photography" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-16 text-white">
          Photography
        </h2>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent>
              <div
                className="relative h-[420px] overflow-hidden rounded-lg border border-slate-700 bg-slate-900/70"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {photos.map((photo, index) => {
                  const position = (index - current + photos.length) % photos.length;
                  const isCenter = position === 0;
                  const isRight = position === 1;
                  const isLeft = position === photos.length - 1;

                  let translate = "translate(-50%, -50%)";
                  let scale = "scale(0.82)";
                  let opacity = 0;
                  let zIndex = 1;
                  let filter = "blur(3px) saturate(75%)";

                  if (isCenter) {
                    translate = "translate(-50%, -50%)";
                    scale = "scale(1)";
                    opacity = 1;
                    zIndex = 3;
                    filter = "none";
                  } else if (isRight) {
                    translate = "translate(calc(-50% + 52%), -50%)";
                    opacity = 0.75;
                    zIndex = 2;
                  } else if (isLeft) {
                    translate = "translate(calc(-50% - 52%), -50%)";
                    opacity = 0.75;
                    zIndex = 2;
                  }

                  return (
                    <div
                      key={photo.src}
                      className="absolute top-1/2 left-1/2 w-[70%] md:w-[58%] lg:w-[46%] transition-all duration-500 ease-out shadow-2xl"
                      style={{
                        transform: `${translate} ${scale}`,
                        opacity,
                        zIndex,
                        pointerEvents: isCenter ? "auto" : "none",
                        filter
                      }}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-[360px] object-cover rounded-lg border border-slate-700"
                      />
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                        <div>
                          <p className="text-lg font-semibold">{photo.caption}</p>
                          <p className="text-sm text-slate-300">{photo.alt}</p>
                        </div>
                        <div className="hidden md:flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-slate-900/70 text-white border-slate-600 hover:bg-slate-800"
                            onClick={prev}
                          >
                            Prev
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-slate-900/70 text-white border-slate-600 hover:bg-slate-800"
                            onClick={next}
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="absolute inset-0 flex items-center justify-between px-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full bg-slate-900/70 text-white border-slate-600 hover:bg-slate-800"
                    onClick={prev}
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full bg-slate-900/70 text-white border-slate-600 hover:bg-slate-800"
                    onClick={next}
                    aria-label="Next photo"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {photos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`h-2.5 w-2.5 rounded-full transition-all ${
                        index === current ? "bg-purple-400 w-4" : "bg-slate-600 hover:bg-slate-500"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between text-slate-300">
                <div>
                  <p className="text-lg font-semibold">{photos[current].caption}</p>
                  <p className="text-sm text-slate-400">{photos[current].alt}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
