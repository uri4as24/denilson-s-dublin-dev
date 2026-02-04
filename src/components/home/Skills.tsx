import { skills } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  { key: "web" as const, label: "Web Technologies" },
  { key: "cms" as const, label: "CMS & E-commerce" },
  { key: "dev" as const, label: "Development Tools" },
  { key: "it" as const, label: "IT & Infrastructure" },
  { key: "databases" as const, label: "Databases" },
  { key: "tools" as const, label: "Tools" },
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
          {skillCategories.map((category) => (
            <div
              key={category.key}
              className="glass-panel-solid rounded-xl p-6"
            >
              <h3 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills[category.key].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1.5 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
