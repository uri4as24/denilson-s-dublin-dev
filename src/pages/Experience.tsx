import { Layout } from "@/components/layout/Layout";
import { experience } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { MapPin, ExternalLink, Calendar, Briefcase, Sparkles } from "lucide-react";

const nodeColors = ["bg-primary shadow-primary/40", "bg-accent shadow-accent/40", "bg-tertiary shadow-tertiary/40"];
const lineGradient = "from-primary via-accent to-tertiary";

const Experience = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="section-container">
          <div className="mb-10">
            <h1 className="heading-xl mb-4">Experience</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              My professional journey in web development, IT support, and digital solutions.
            </p>
          </div>

          <div className="relative">
            <div className={`absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b ${lineGradient} opacity-40`} />

            <div className="space-y-8">
              {experience.map((role, index) => (
                <div key={role.id} className="relative pl-16 sm:pl-20">
                  <div className={`absolute left-4 sm:left-6 top-8 w-4 h-4 rounded-full ${nodeColors[index % 3]} border-4 border-background z-10 shadow-lg`} />

                  <article className="glass-panel-solid rounded-2xl p-6 sm:p-8 card-hover">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 icon-box-primary flex-shrink-0 mt-0.5 hidden sm:flex">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-xl font-semibold mb-1">{role.title}</h2>
                          <p className="text-primary font-medium">{role.company}</p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1">
                        <span className="text-sm font-medium text-muted-foreground flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {role.period}
                        </span>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {role.location}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {role.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex gap-3">
                          <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* AI tools indicator */}
                    {role.tech.includes("AI Tools") && (
                      <div className="flex items-center gap-2 mb-4 text-xs text-accent">
                        <Sparkles className="h-3.5 w-3.5" />
                        <span className="font-medium">AI-assisted workflow</span>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {role.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs glass-pill">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {role.projects && role.projects.length > 0 && (
                      <div className="pt-4 border-t border-border/50">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Projects</p>
                        <div className="flex flex-wrap gap-2">
                          {role.projects.map((project) => (
                            <a
                              key={project}
                              href={`https://${project}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                            >
                              {project}
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
