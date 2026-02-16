import { skills } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Globe, ShoppingCart, GitBranch, Server, Database, Terminal } from "lucide-react";

const skillCategories = [
  { key: "web" as const, label: "Web Technologies", icon: Globe, color: "text-primary", box: "icon-box-primary" },
  { key: "cms" as const, label: "CMS & E-commerce", icon: ShoppingCart, color: "text-accent", box: "icon-box-accent" },
  { key: "dev" as const, label: "Development Tools", icon: GitBranch, color: "text-tertiary", box: "icon-box-tertiary" },
  { key: "it" as const, label: "IT & Infrastructure", icon: Server, color: "text-tertiary", box: "icon-box-tertiary" },
  { key: "databases" as const, label: "Databases", icon: Database, color: "text-accent", box: "icon-box-accent" },
  { key: "tools" as const, label: "Tools", icon: Terminal, color: "text-primary", box: "icon-box-primary" },
];

export function Skills() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <h2 className="heading-lg mb-4">Skills & Technologies</h2>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          A comprehensive toolkit for building modern web experiences and managing IT infrastructure.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.key}
                className="glass-panel-solid rounded-2xl p-6 card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 ${category.box}`}>
                    <Icon className={`h-4.5 w-4.5 ${category.color}`} />
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">
                    {category.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills[category.key].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1.5 text-sm glass-pill"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
