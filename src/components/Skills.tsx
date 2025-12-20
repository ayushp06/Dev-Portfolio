import { Badge } from "./ui/badge";

export function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"]
    },
    {
      category: "Frontend",
      skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Django", "PostgreSQL", "MongoDB", "REST APIs"]
    },
    {
      category: "Tools & DevOps",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Linux", "Kubernetes"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Skills & Technologies</span>
        </h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary"
                    className="text-base py-2 px-4 bg-slate-800/50 text-slate-200 hover:bg-slate-700 border border-slate-700 hover:border-purple-500/50 transition-all"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}