import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  link: string;
  category: string[];
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="glass-panel-solid rounded-xl p-6 card-hover group h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
          {project.name}
        </h3>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0 ml-2"
          aria-label={`Visit ${project.name}`}
        >
          <ExternalLink className="h-5 w-5" />
        </a>
      </div>
      <p className="text-muted-foreground text-sm mb-4 flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <Badge key={tech} variant="outline" className="text-xs">
            {tech}
          </Badge>
        ))}
      </div>
    </article>
  );
}
