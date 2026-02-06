import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { personalInfo } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="section-padding min-h-[90vh] flex items-center">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Profile Photo - Shows first on mobile */}
          <div className="flex-shrink-0 order-first lg:order-last animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/30 rounded-full blur-md" />
              <Avatar className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 border-2 border-primary/50 shadow-2xl shadow-primary/20">
                <AvatarImage 
                  src="/profile.jpg" 
                  alt={`${personalInfo.name} - Web Developer`}
                  className="object-cover"
                />
                <AvatarFallback className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-primary/10 text-primary">
                  DL
                </AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Text Content */}
          <div className="max-w-3xl text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-6 animate-fade-in">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{personalInfo.location}</span>
            </div>

            <h1 className="heading-xl mb-4 animate-slide-up opacity-0 stagger-1">
              Hi, I'm{" "}
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground font-medium mb-6 animate-slide-up opacity-0 stagger-2">
              {personalInfo.title}
            </p>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 animate-slide-up opacity-0 stagger-3 text-balance">
              {personalInfo.summary}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10 animate-slide-up opacity-0 stagger-4">
              {personalInfo.badges.map((badge) => (
                <Badge
                  key={badge}
                  variant="secondary"
                  className="px-3 py-1 text-sm font-medium"
                >
                  {badge}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-slide-up opacity-0 stagger-5">
              <Button asChild size="lg" className="rounded-lg gap-2 glow-primary">
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-lg"
              >
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
