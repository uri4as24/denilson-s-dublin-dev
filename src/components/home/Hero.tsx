import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { personalInfo } from "@/data/portfolio";
import profilePhoto from "@/assets/profile-photo.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />

      <div className="section-container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 text-muted-foreground mb-8 animate-fade-in">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-medium">{personalInfo.location}</span>
              </div>
            </div>

            <h1 className="heading-xl mb-6 animate-slide-up opacity-0 stagger-1">
              Hi, I'm{" "}
              <span className="gradient-text block sm:inline">{personalInfo.name}</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground font-light mb-6 animate-slide-up opacity-0 stagger-2 tracking-wide">
              {personalInfo.title}
            </p>

            <p className="text-muted-foreground mb-8 max-w-lg animate-slide-up opacity-0 stagger-3 text-balance leading-relaxed">
              {personalInfo.summary}
            </p>

            <div className="flex flex-wrap gap-2 mb-10 animate-slide-up opacity-0 stagger-4">
              {personalInfo.badges.map((badge) => (
                <Badge
                  key={badge}
                  variant="outline"
                  className="px-3 py-1.5 text-xs font-medium bg-transparent border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
                >
                  {badge}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up opacity-0 stagger-5">
              <Button asChild size="lg" className="rounded-full gap-2 glow-primary px-8">
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="rounded-full px-8 border border-border/50 hover:border-primary/30 hover:bg-primary/5"
              >
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in opacity-0 stagger-2">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 via-cyan-400/20 to-primary/30 rounded-full blur-2xl opacity-60 animate-pulse" />
              
              {/* Ring */}
              <div className="relative p-1 rounded-full bg-gradient-to-tr from-primary via-cyan-400 to-primary">
                <div className="p-1 rounded-full bg-background">
                  <img
                    src={profilePhoto}
                    alt={personalInfo.name}
                    className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl glass-panel flex items-center justify-center float-animation">
                <span className="text-2xl">💻</span>
              </div>
              <div className="absolute -bottom-2 -left-6 w-16 h-16 rounded-xl glass-panel flex items-center justify-center float-animation" style={{ animationDelay: '1s' }}>
                <span className="text-xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
