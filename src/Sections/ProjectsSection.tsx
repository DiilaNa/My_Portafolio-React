import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/Card.tsx";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiReact, SiSpringboot, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb, SiPostgresql } from "react-icons/si";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce application with user authentication, product management, and payment integration.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
        technologies: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        ],
        githubUrl: "https://github.com/yourusername/ecommerce-platform",
        liveUrl: "https://ecommerce-demo.com",
    },
    {
        id: 2,
        title: "Task Management App",
        description: "Collaborative task management tool with real-time updates and team collaboration features.",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
        technologies: [
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        ],
        githubUrl: "https://github.com/yourusername/task-manager",
        liveUrl: "https://taskmanager-demo.com",
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "Modern, responsive portfolio website with smooth animations and interactive UI components.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
        technologies: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        ],
        githubUrl: "https://github.com/yourusername/portfolio",
        liveUrl: "https://yourportfolio.com",
    },
    {
        id: 4,
        title: "Weather Dashboard",
        description: "Real-time weather application with forecasts, maps, and location-based weather alerts.",
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop",
        technologies: [
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
            { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        ],
        githubUrl: "https://github.com/yourusername/weather-dashboard",
        liveUrl: "https://weather-demo.com",
    },
];

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Featured Projects
            </span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Here are some of my recent projects that showcase my skills and experience
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {projects.map((project, index) => (
                        <Card
                            key={project.id}
                            className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] animate-fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <CardHeader>
                                <CardTitle className="text-xl sm:text-2xl">{project.title}</CardTitle>
                                <CardDescription className="text-sm sm:text-base">
                                    {project.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => {
                                        const Icon = tech.icon;
                                        return (
                                            <Badge
                                                key={tech.name}
                                                variant="secondary"
                                                className="flex items-center gap-1.5 px-3 py-1 bg-secondary/50 hover:bg-secondary/80 transition-colors"
                                            >
                                                <Icon className="w-4 h-4" style={{ color: tech.color }} />
                                                <span className="text-xs sm:text-sm">{tech.name}</span>
                                            </Badge>
                                        );
                                    })}
                                </div>
                            </CardContent>

                            <CardFooter className="flex flex-wrap gap-3">
                                <Button
                                    variant="hero"
                                    size="sm"
                                    className="flex-1 min-w-[120px]"
                                    onClick={() => window.open(project.githubUrl, "_blank")}
                                >
                                    <Github className="w-4 h-4 mr-2" />
                                    GitHub
                                </Button>
                                <Button
                                    variant="heroOutline"
                                    size="sm"
                                    className="flex-1 min-w-[120px]"
                                    onClick={() => window.open(project.liveUrl, "_blank")}
                                >
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Live Demo
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;