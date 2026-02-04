import { Code, Globe, Gauge, Wrench } from "lucide-react";
import { aboutBullets } from "@/data/portfolio";

const icons = [Globe, Code, Gauge, Wrench];

export function About() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">What I Do</p>
          <h2 className="heading-lg">Building Digital Experiences</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {aboutBullets.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                key={item.title}
                className="group relative p-6 sm:p-8 rounded-2xl subtle-border bg-card/30 hover:bg-card/60 transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
