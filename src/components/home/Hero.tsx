import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { personalInfo } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="section-padding min-h-[90vh] flex items-center">
      <div className="section-container">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-muted-foreground mb-6 animate-fade-in">
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

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl animate-slide-up opacity-0 stagger-3 text-balance">
            {personalInfo.summary}
          </p>

          <div className="flex flex-wrap gap-2 mb-10 animate-slide-up opacity-0 stagger-4">
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

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up opacity-0 stagger-5">
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
    </section>
  );
}
