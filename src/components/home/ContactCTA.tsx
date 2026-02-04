import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";

export function ContactCTA() {
  return (
    <section className="section-padding bg-muted/20">
      <div className="section-container">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          <div className="relative p-8 sm:p-12 lg:p-16 text-center">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">Get in Touch</p>
            <h2 className="heading-lg mb-4 max-w-lg mx-auto">
              Let's build something{" "}
              <span className="gradient-text">exceptional</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md mx-auto">
              Open to opportunities and freelance projects. Let's discuss how I can help bring your ideas to life.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="rounded-full gap-2 glow-primary px-8">
                <a href={`mailto:${personalInfo.email}`}>
                  Contact Me
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-full px-8 border border-border/50 hover:border-primary/30 hover:bg-primary/5">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-full px-8 border border-border/50 hover:border-primary/30 hover:bg-primary/5">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
