import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { experience } from "@/data/portfolio";

export function ExperienceSnapshot() {
  const latestExperience = experience.slice(0, 3);

  return (
    <section className="section-padding bg-muted/20">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Career</p>
            <h2 className="heading-lg">Experience</h2>
          </div>
          <Button asChild variant="ghost" className="hidden sm:flex gap-2 text-muted-foreground hover:text-foreground">
            <Link to="/experience">
              View Full Timeline
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="space-y-4">
          {latestExperience.map((role, index) => (
            <div
              key={role.id}
              className="group relative p-6 sm:p-8 rounded-2xl subtle-border bg-card/30 hover:bg-card/60 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                <div className="flex items-center gap-4 sm:w-48 flex-shrink-0">
                  <span className="text-xs text-muted-foreground font-mono">0{index + 1}</span>
                  <span className="text-sm text-muted-foreground">{role.period}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">{role.title}</h3>
                  <p className="text-primary/80 text-sm mb-3">{role.company}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {role.description[0]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button asChild variant="ghost" className="gap-2">
            <Link to="/experience">
              View Full Experience
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
