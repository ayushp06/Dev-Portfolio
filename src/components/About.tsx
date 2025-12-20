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
        <h2 className="text-4xl md:text-5xl text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">About Me</span>
        </h2>
        
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-slate-300 mb-6">
            I'm a passionate software engineer with a strong foundation in computer science and years of experience 
            building web applications. I love solving complex problems and turning ideas into reality through code.
          </p>
          <p className="text-lg text-slate-300">
            My journey in programming started with curiosity and has evolved into a career where I get to work on 
            challenging projects, collaborate with talented teams, and continuously learn new technologies. 
            Whether it's frontend, backend, or DevOps, I enjoy working across the full stack.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {highlights.map((item, index) => {
            return (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all backdrop-blur-sm overflow-hidden">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4 overflow-hidden" style={{ width: '400px', height: '400px' }}>
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full"
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}