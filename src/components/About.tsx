import { Card, CardContent } from "./ui/card";

export function About() {
  const highlights = [
    {
      image: "/images/DSC02188.JPG"
    },
    {
      image: "/images/IMG_4351.JPG"
    },
    {
      image: "/images/IMG_7057.jpg"
    }
  ];

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
      </div>
    </section>
  );
}
