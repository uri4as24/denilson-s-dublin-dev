import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { experience } from "@/data/portfolio";

const dotColors = ["bg-primary", "bg-accent", "bg-tertiary"];

export function ExperienceSnapshot() {
  const latestExperience = experience.slice(0, 3);

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="heading-lg mb-4">Experience</h2>
            <p className="text-muted-foreground max-w-xl">
              My professional journey in web development and IT.
            </p>
          </div>
          <Button asChild variant="ghost" className="hidden sm:flex gap-2">
            <Link to="/experience">
              View Full Timeline
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-tertiary hidden sm:block opacity-40" />

          <div className="space-y-6">
            {latestExperience.map((role, index) => (
              <div key={role.id} className="relative pl-0 sm:pl-16">
                <div className={`absolute left-4 top-6 w-4 h-4 rounded-full ${dotColors[index % 3]} border-4 border-background hidden sm:block shadow-lg`} />

                <article className="glass-panel-solid rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl icon-box-primary flex-shrink-0 sm:hidden">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                        <h3 className="font-semibold">{role.title}</h3>
                        <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {role.period}
                        </span>
                      </div>
                      <p className="text-primary text-sm mb-3">{role.company}</p>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {role.description[0]}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button asChild variant="outline" className="gap-2 rounded-full">
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
