import { GraduationCap, Award } from "lucide-react";
import { education, certifications } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

export function Education() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <h2 className="heading-lg mb-10">Education & Certifications</h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 icon-box-accent">
                <GraduationCap className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold">Education</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.degree} className="glass-panel-solid rounded-2xl p-5 card-hover">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-semibold mb-1">{edu.degree}</h4>
                      <p className="text-muted-foreground text-sm">{edu.institution}</p>
                    </div>
                    {edu.current ? (
                      <Badge className="text-xs bg-accent text-accent-foreground">Current</Badge>
                    ) : (
                      <span className="text-sm text-muted-foreground whitespace-nowrap">{edu.period}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 icon-box-tertiary">
                <Award className="h-5 w-5 text-tertiary" />
              </div>
              <h3 className="text-lg font-semibold">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.name} className="glass-panel-solid rounded-2xl p-5 card-hover">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-semibold mb-1 text-sm">{cert.name}</h4>
                      <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{cert.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
