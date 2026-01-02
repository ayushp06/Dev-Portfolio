import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const photos = [
  {
    src: "/images/DSC02188.JPG",
    alt: "Friends posing together outdoors"
  },
  {
    src: "/images/IMG_4351.JPG",
    alt: "Portrait in a woven chair indoors"
  },
  {
    src: "/images/IMG_7057.jpg",
    alt: "Two athletes in jiu-jitsu gis"
  }
];

export function Photography() {
  return (
    <section id="photography" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl md:text-5xl text-center mb-16 text-white">
          Photography
        </h2>

        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white text-center">Gallery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {photos.map((photo, index) => (
                <div
                  key={photo.src}
                  className="
                    bg-slate-800/50
                    border border-slate-700
                    hover:bg-slate-700
                    hover:border-purple-500/50
                    transition-all
                    rounded-2xl
                    overflow-hidden
                    aspect-[4/3]
                    flex items-center justify-center
                    p-2
                  "
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-contain block"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
