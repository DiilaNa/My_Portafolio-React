import { Button } from "../components/Button.tsx";
import TypewriterEffect from "../components/Typewriter.tsx";
import FloatingIcons from "../components/FloatingIcons.tsx";
import { ArrowDownTrayIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import profileImage from "../assets/Profile.jpg";

const roles = [
  "Data Science Enthusiast",
  "Building Smart Systems",
  "Exploring Machine Learning",
  "Full Stack Developer",
  "Turning Data into Insights",
];
export default function HeroSection() {
  const handleDownloadCV = () => {
    window.open("/cv.pdf", "_blank");
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
      <section
          id="home"
          className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

        {/* Floating Tech Icons */}
        <FloatingIcons />

        {/* Content */}
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-lg md:text-xl font-medium text-accent">
                  Hello, I'm
                </h2>
                <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold text-foreground">
                  Dilan Liyanaarachchi
                </h1>
                <TypewriterEffect roles={roles} />
              </div>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Passionate developer with expertise in building modern web applications.
                I specialize in creating scalable, user-friendly solutions using cutting-edge
                technologies. With a strong foundation in both frontend and backend development,
                I bring ideas to life through clean code and innovative design.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                    size="lg"
                    variant="hero"
                    onClick={scrollToContact}
                    className="group"
                >
                  <EnvelopeIcon className="w-5 h-5 mr-2" />
                  Contact Me
                </Button>
                <Button
                    size="lg"
                    variant="heroOutline"
                    onClick={handleDownloadCV}
                    className="group"
                >
                  <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
                <div>
                  <h3 className="text-3xl font-bold text-gradient">1+</h3>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gradient">5+</h3>
                  <p className="text-sm text-muted-foreground">Projects Done</p>
                </div>
              {/*  <div>
                  <h3 className="text-3xl font-bold text-gradient">30+</h3>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>*/}
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative lg:flex justify-center hidden animate-fade-in">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-30 animate-pulse" />

                {/* Image container */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                  <img
                      src={profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full blur-xl opacity-60 animate-float" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary rounded-full blur-xl opacity-60 animate-float-delayed" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>
  );
}

