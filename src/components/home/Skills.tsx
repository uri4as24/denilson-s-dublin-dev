import { skills } from "@/data/portfolio";

const skillCategories = [
  { key: "web" as const, label: "Web" },
  { key: "cms" as const, label: "CMS" },
  { key: "dev" as const, label: "Dev Tools" },
  { key: "it" as const, label: "IT" },
  { key: "databases" as const, label: "Data" },
  { key: "tools" as const, label: "Tools" },
];

export function Skills() {
  return (
    <section className="section-padding bg-muted/20">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Tech Stack</p>
          <h2 className="heading-lg">Skills & Technologies</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skillCategories.map((category) => (
            <div
              key={category.key}
              className="p-5 sm:p-6 rounded-2xl subtle-border bg-card/30"
            >
              <h3 className="text-xs font-semibold text-primary mb-4 uppercase tracking-widest">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {skills[category.key].map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs rounded-full bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
