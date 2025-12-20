import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates, team workspaces, and productivity analytics.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with forecasts, interactive maps, and location-based alerts.",
      technologies: ["Vue.js", "Tailwind", "Weather API"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "DevOps Automation Tool",
      description: "CI/CD pipeline automation tool that streamlines deployment processes and monitors application health.",
      technologies: ["Python", "Docker", "Kubernetes", "AWS"],
      github: "https://github.com",
      demo: null
    },
    {
      title: "Social Media Analytics",
      description: "Analytics platform for social media metrics with data visualization and reporting features.",
      technologies: ["React", "D3.js", "Express", "Redis"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "AI Chatbot Assistant",
      description: "Intelligent chatbot using natural language processing for customer support automation.",
      technologies: ["Python", "TensorFlow", "Flask", "React"],
      github: "https://github.com",
      demo: null
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Featured Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col bg-slate-800/50 border-slate-700 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">{project.title}</CardTitle>
                <CardDescription className="text-slate-400">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="border-blue-400/50 text-blue-300 bg-blue-950/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-slate-600 text-slate-200 hover:bg-slate-700"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  {project.demo && (
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}