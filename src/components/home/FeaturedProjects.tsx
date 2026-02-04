import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/portfolio";

export function FeaturedProjects() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="heading-lg mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-xl">
              A selection of websites and applications I've built and maintained.
            </p>
          </div>
          <Button asChild variant="ghost" className="hidden sm:flex gap-2">
            <Link to="/projects">
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="glass-panel-solid rounded-xl p-6 card-hover group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`Visit ${project.name}`}
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button asChild variant="outline" className="gap-2">
            <Link to="/projects">
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
