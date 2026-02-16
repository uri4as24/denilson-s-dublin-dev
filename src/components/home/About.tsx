import { Code, Globe, Gauge, Wrench } from "lucide-react";
import { aboutBullets } from "@/data/portfolio";

const icons = [Globe, Code, Gauge, Wrench];
const iconColors = ["text-primary", "text-accent", "text-tertiary", "text-primary"];
const boxClasses = ["icon-box-primary", "icon-box-accent", "icon-box-tertiary", "icon-box-primary"];

export function About() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <h2 className="heading-lg mb-4">What I Do</h2>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Combining technical expertise with a passion for creating seamless digital experiences.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {aboutBullets.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                key={item.title}
                className="glass-panel-solid rounded-2xl p-6 card-hover"
              >
                <div className={`w-12 h-12 ${boxClasses[index]} mb-4`}>
                  <Icon className={`h-6 w-6 ${iconColors[index]}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
