import { Card, CardContent } from "../components/Card.tsx";
import {
    SiReact,
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiSpringboot,
    SiSpring,
    SiPython,
    SiMysql,
    SiPostgresql,
    SiMongodb,
    SiGit,
    SiGithub,
    SiDocker,
    SiNodedotjs,
    SiPandas,
    SiNumpy,
    SiTensorflow,
    SiJupyter,
    SiPytorch, SiExpress,
} from "react-icons/si";
import { Coffee , Brain} from "lucide-react";
import { Code2, Database, Wrench } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend Development",
        icon: Code2,
        skills: [
            { name: "React", icon: SiReact, color: "#61DAFB", level: 90 },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 85 },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 90 },
            { name: "HTML5", icon: SiHtml5, color: "#E34F26", level: 95 },
            { name: "CSS3", icon: SiCss3, color: "#1572B6", level: 90 },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 88 },
        ],
    },
    {
        title: "Backend Development",
        icon: Database,
        skills: [
            { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F", level: 85 },
            { name: "Spring", icon: SiSpring, color: "#6DB33F", level: 82 },
            { name: "Java", icon: Coffee, color: "#007396", level: 88 },
            { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: 75 },
            { name: "Express.js", icon: SiExpress, color: "#3776AB", level: 70 },
        ],
    },
    {
        title: "Database & Tools",
        icon: Wrench,
        skills: [
            { name: "MySQL", icon: SiMysql, color: "#4479A1", level: 85 },
            { name: "PostgresSQL", icon: SiPostgresql, color: "#4169E1", level: 80 },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 75 },
            { name: "Git", icon: SiGit, color: "#F05032", level: 90 },
            { name: "GitHub", icon: SiGithub, color: "#181717", level: 88 },
            { name: "Docker", icon: SiDocker, color: "#2496ED", level: 70 },
        ],
    },
    {
        title: "Data Science & Machine Learning",
        icon: Brain,
        skills: [
            { name: "Python", icon: SiPython, color: "#3776AB", level: 90 },
            { name: "Pandas", icon: SiPandas, color: "#150458", level: 65 },
            { name: "NumPy", icon: SiNumpy, color: "#013243", level: 60 },
            { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00", level: 50 },
            { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C", level: 65 },
            { name: "Jupyter Notebook", icon: SiJupyter, color: "#F37626", level: 85 },
        ],
    },
];

const SkillsSection = () => {
    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 sm:mb-16 animate-fade-in">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="text-gradient">Skills & Technologies</span>
                    </h2>
                    <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
                        A comprehensive overview of my technical expertise and tools I work with
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {skillCategories.map((category, categoryIndex) => {
                        const CategoryIcon = category.icon;
                        return (
                            <Card
                                key={category.title}
                                className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] animate-fade-in"
                                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                            >
                                <CardContent className="p-6 sm:p-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                            <CategoryIcon className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                                            {category.title}
                                        </h3>
                                    </div>

                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                        {category.skills.map((skill, skillIndex) => {
                                            const SkillIcon = skill.icon;
                                            return (
                                                <div
                                                    key={skill.name}
                                                    className="group/skill flex flex-col items-center gap-2 p-3 sm:p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in"
                                                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                                                >
                                                    <div className="relative">
                                                        <SkillIcon
                                                            className="w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-300 group-hover/skill:scale-110"
                                                            style={{ color: skill.color }}
                                                        />
                                                        <div className="absolute inset-0 blur-xl opacity-0 group-hover/skill:opacity-50 transition-opacity duration-300"
                                                             style={{ backgroundColor: skill.color }}
                                                        />
                                                    </div>
                                                    <span className="text-xs sm:text-sm font-medium text-foreground text-center">
                            {skill.name}
                          </span>

                                                    {/* Skill Level Bar */}
                                                    <div className="w-full h-1.5 bg-secondary/50 rounded-full overflow-hidden mt-1">
                                                        <div
                                                            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover/skill:shadow-[0_0_10px_rgba(124,58,237,0.5)]"
                                                            style={{
                                                                width: `${skill.level}%`,
                                                                transitionDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
