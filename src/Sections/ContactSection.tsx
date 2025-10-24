import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input.tsx";
import { Textarea } from "../components/TextArea.tsx";
import { Github, Linkedin,Facebook , Instagram ,Mail, Send } from "lucide-react";
import { useToast } from "../hooks/useToast.ts";

export default function ContactSection() {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Message Sent!",
            description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
    };

    const socialLinks = [
        { icon: Github, href: "https://github.com/DiilaNa", label: "GitHub" },
        { icon: Linkedin, href: "www.linkedin.com/in/dilan-liyanaarachchi-8a0a01244", label: "LinkedIn" },
        { icon: Mail, href: "mailto:liyanaarachchidilan@gmail.com", label: "Email" },
        { icon: Instagram, href: "https://www.instagram.com/dilan_liyanaarachchi?igsh=MjU0YnV5c3ZlZGh0", label: "Instagram" },
        { icon: Facebook, href: "https://www.facebook.com/share/17YDSNkJHu/", label: "FaceBook" },


    ];

    return (
        <>
            <section
                id="contact"
                className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-background to-card/30"
            >
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-12 animate-fade-in">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                                Get In Touch
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Have a project in mind or just want to say hi? Feel free to reach out!
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            {/* Contact Form */}
                            <div className="backdrop-blur-sm bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50 shadow-lg animate-fade-in">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <Input
                                            id="name"
                                            placeholder="Your name"
                                            value={formData.name}
                                            onChange={(e) =>
                                                setFormData({ ...formData, name: e.target.value })
                                            }
                                            required
                                            className="bg-background/50"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="your.email@example.com"
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({ ...formData, email: e.target.value })
                                            }
                                            required
                                            className="bg-background/50"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Textarea
                                            id="message"
                                            placeholder="Your message..."
                                            value={formData.message}
                                            onChange={(e) =>
                                                setFormData({ ...formData, message: e.target.value })
                                            }
                                            required
                                            rows={5}
                                            className="bg-background/50 resize-none"
                                        />
                                    </div>

                                    <Button type="submit" className="w-full group">
                                        Send Message
                                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </form>
                            </div>

                            {/* Social Links & Info */}
                            <div className="space-y-6 animate-fade-in">
                                <div className="backdrop-blur-sm bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50 shadow-lg">
                                    <h3 className="text-2xl font-bold mb-4">Connect With Me</h3>
                                    <p className="text-muted-foreground mb-6">
                                        Follow me on social media or send me an email. I'm always
                                        open to discussing new projects and opportunities.
                                    </p>

                                    <div className="grid grid-cols-2 gap-4">
                                        {socialLinks.map((social) => (
                                            <a
                                                key={social.label}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                                            >
                                                <social.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                                                <span className="font-medium">{social.label}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-card/50 border-t border-border/50 py-8">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-muted-foreground text-center md:text-left">
                            © {new Date().getFullYear()} Dilan Liyanaarachchi. All rights reserved.
                        </p>

                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
