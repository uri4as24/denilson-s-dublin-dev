import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";

export function ContactCTA() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="glass-panel rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="heading-md mb-4">
            Let's build something{" "}
            <span className="gradient-text">clean and fast</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Open to opportunities and freelance projects. Let's discuss how I can help bring your ideas to life.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-lg gap-2">
              <a href={`mailto:${personalInfo.email}`}>
                <Mail className="h-4 w-4" />
                Email Me
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-lg gap-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-lg gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
