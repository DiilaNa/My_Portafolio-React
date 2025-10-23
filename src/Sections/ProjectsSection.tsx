import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/Card.tsx";
import { Button } from "../components/Button.tsx";
import { Badge } from "../components/Badge.tsx";
import { SiReact, SiSpringboot, SiHtml5, SiCss3, SiJavascript, SiTypescript,/* SiTailwindcss,*/ /*SiNodedotjs,*/ SiMongodb,SiMysql , } from "react-icons/si";
import { Github, ExternalLink } from "lucide-react";
import { FaJava } from "react-icons/fa";
import { SiHibernate} from "react-icons/si";
import needitdone from "../assets/Homepage.png"
import bookme from "../assets/Bookme.png"
import mentalhealth from  "../assets/MentalHealthCenter.png"
import petcarecenter from  "../assets/PerCareCenter.png"
import poss from "../assets/pos.webp"
import portfolio from  "../assets/portfolio.png"

const projects = [
    {
        id: 1,
        title: "NeedItDone – Home Service Hiring Platform",
        description: "This is a web-based platform that allows homeowners to post jobs,while workers can browse and apply for job opportunities.." ,
        image: needitdone,
        technologies: [
            { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
            { name: "MySql", icon: SiMysql, color: "#0e87dd" },
            { name: "Javascript", icon: SiJavascript, color: "#dfff00" },
            { name: "Html", icon: SiHtml5, color: "#ea7a10" },
            { name: "Css", icon: SiCss3, color: "#0e87dd" },
        ],
        githubUrl: "https://github.com/DiilaNa/NeedItDone-AAD_Final_Project_IJSE.git",
        liveUrl: "",
    },
    {
        id: 2,
        title: "University event Ticket Booking System",
        description: "BookMe streamlines campus event ticketing, providing students with a reliable way to attend university events while giving organizers full control over ticket sales.",
        image: bookme,
        technologies: [
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        ],
        githubUrl: "https://github.com/DiilaNa/BookMe.git",
        liveUrl: "",
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "Modern, responsive portfolio website with smooth animations and interactive UI components.",
        image: portfolio,
        technologies: [
            { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
            { name: "CSS3", icon: SiCss3, color: "#1572B6" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        ],
        githubUrl: "https://github.com/DiilaNa/MyPortafolio.git",
        liveUrl: "https://diilana.github.io/MyPortafolio/",
    },
    {
        id: 4,
        title: "Point of Sales System",
        description: "A web-based POS interface developed as part of a course module that demonstrates core sales functionalities such as adding products, calculating totals, and managing temporary data in the browser.",
        image:poss,
        technologies: [
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
            { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        ],
        githubUrl: "https://github.com/DiilaNa/POS_SYSTEM.git",
        liveUrl: "https://diilana.github.io/POS_SYSTEM/",
    },
    {
        id: 5,
        title: "Mental Health Care Center",
        description: "A Standalone desktop application developed as a module work which follows a layered architecture , with Hibernate ORM for seamless database interaction.",
        image: mentalhealth,
        technologies: [
            { name: "JavaFx", icon: FaJava, color: "#F7DF1E" },
            { name: "MySql", icon: SiMysql, color: "#268ee3" },
            { name: "Hibernate", icon: SiHibernate, color: "#E34F26" },
        ],
        githubUrl: "https://github.com/DiilaNa/Serenity_Mental_Health_Therapy_Center-Hibernate.git",
        liveUrl: "",
    },
    {
        id: 6,
        title: "Pet Care Management System",
        description: "A Standalone application to manage pet records that follows Layered architecture  which completed as my first semester final project",
        image: petcarecenter,
        technologies: [
            { name: "JavaFx", icon:  FaJava, color: "#F7DF1E" },
            { name: "MySql", icon: SiMysql, color: "#0c93dc" },
        ],
        githubUrl: "https://github.com/DiilaNa/IJSE-Final_Project-Layered_Architecture.git",
        liveUrl: "",
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
                                <CardDescription className="text-sm sm:text-base ">
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
                                {project.liveUrl && (
                                <Button
                                    variant="heroOutline"
                                    size="sm"
                                    className="flex-1 min-w-[120px]"
                                    onClick={() => window.open(project.liveUrl, "_blank")}
                                >
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Live Demo
                                </Button>
                                    )}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;