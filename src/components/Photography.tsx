import { useMemo, useState } from "react";
import CircularGallery from "./CircularGallery";
import { Dialog, DialogContent } from "./ui/dialog";

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

export function Photography() {
  const [selected, setSelected] = useState<{ image: string; text: string } | null>(null);
  const galleryItems = useMemo(
    () => photos.map((photo) => ({ image: photo.src, text: photo.alt })),
    [],
  );

  return (
    <section id="photography" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl md:text-5xl text-center mb-16 text-white">
          Photography
        </h2>

        <div className="relative h-[1300px] sm:h-[1450px] lg:h-[1550px]">
          <CircularGallery
            items={galleryItems}
            bend={3}
            textColor="#f8fafc"
            borderRadius={0.05}
            scrollEase={0.02}
            onSelect={setSelected}
          />
        </div>

        <Dialog open={!!selected} onOpenChange={(open: boolean) => !open && setSelected(null)}>
          <DialogContent className="max-w-4xl bg-slate-900/95 border-slate-700">
            {selected ? (
              <div className="space-y-4">
                <img
                  src={selected.image}
                  alt={selected.text}
                  className="w-full max-h-[75vh] object-contain rounded-md border border-slate-700"
                />
                <p className="text-sm text-slate-200/80 text-center">{selected.text}</p>
              </div>
            ) : null}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
