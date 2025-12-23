import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function Projects() {
  const projects = [
    {
      title: "LockedIn Productivity Chrome Extension",
      description: "A full-stack Chrome extension designed to boost productivity by tracking hours spent on a site and logging them, allowing users to compete with their friends.",
      technologies: ["React.js", "TypeScript", "FirebaseDB", "Google Clound OAuth", "Chrome APIs"],
      github: "https://github.com/ayushp06/LockedIn",
      demo: "https://www.linkedin.com/posts/ayushpandejee_chromeextension-productivity-fullstackdevelopment-activity-7394765228569440256-hXAs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8ZqEoBd3W36a8NxexLQ5Qg0weC5SVIP5s"
    },
    {
      title: "NASA TLE Satellite Tracker",
      description: "A PyQt5-based desktop application that visualizes real-time satellite orbits in 3D using active NORAD TLE data through the Skyfield API. It allows users to interactively track the position and altitude of over 50 active satellites.",
      technologies: ["Python", "PyQt5", "Skyfield API", "NORAD TLE", "Matplotlib"],
      github: "https://github.com/ayushp06/NASA-TLE-Orbit-Tracker",
      demo: "https://www.linkedin.com/posts/ayushpandejee_im-excited-to-share-an-application-that-activity-7353811791237292032-i5hO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8ZqEoBd3W36a8NxexLQ5Qg0weC5SVIP5s"
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