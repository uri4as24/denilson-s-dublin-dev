import { GraduationCap, Award } from "lucide-react";
import { education, certifications } from "@/data/portfolio";

export function Education() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Background</p>
          <h2 className="heading-lg">Education & Certifications</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold">Education</h3>
            </div>

            <div className="space-y-3">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="p-5 rounded-2xl subtle-border bg-card/30"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-medium mb-1">{edu.degree}</h4>
                      <p className="text-muted-foreground text-sm">
                        {edu.institution}
                      </p>
                    </div>
                    {edu.current ? (
                      <span className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                        Current
                      </span>
                    ) : (
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        {edu.period}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold">Certifications</h3>
            </div>

            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="p-5 rounded-2xl subtle-border bg-card/30"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-medium mb-1 text-sm">{cert.name}</h4>
                      <p className="text-muted-foreground text-sm">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {cert.period}
                    </span>
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
