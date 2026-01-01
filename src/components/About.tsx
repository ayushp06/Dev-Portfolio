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
            Currently, I am a Data Engineer Intern for the School District of Philadelphia. I automate workflow by turning messy, manual data processes into streamlined systems. Using Java, I’ve helped teams reclaim 5-6 hours of their day by automating the heavy lifting, everything from cross-checking thousands of rows to building custom validation tools.
          </p>
          <p className="text-lg text-slate-700 mb-6">
            I served as a Research Assistant in the Students Space Programs Laboratory (SSPL), where I developed a C++ flight computer integrated with barometric and gyroscopic sensors for a two-stage rocket that successfully launched to 3,000 ft. I also contributed to NASA's LunaRecycle Challenge, optimizing a metal-smelting system for lunar manufacturing using SOLIDWORKS and ANSYS Mechanical.
          </p>
          <p className="text-lg text-slate-700 mb-6">
            As the Vehicle Dynamics Project Manager for Nittany Motorsports, I led lap-time simulation development in ChassisSIM and MATLAB to enhance vehicle setup and performance through data-driven engineering.
          </p>
          <p className="text-lg text-slate-700">
            Outside the lab, I build full-stack and embedded systems from a Chrome productivity extension (LockedIn) using React, TypeScript, and Firebase to an AI Satellite Anomaly Detector and real-time 3D Orbit Tracker built with Python, TensorFlow, and PyQt5.
          </p>
        </div>
      </div>
    </section>
  );
}
