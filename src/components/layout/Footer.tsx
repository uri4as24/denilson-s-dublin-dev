import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-panel border-t-0 border-l-0 border-r-0 mt-8">
      <div className="section-container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-lg font-bold">
              DL<span className="text-primary">.</span>
            </Link>
            <div className="flex items-center gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-tertiary transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <Link to="/projects" className="hover:text-foreground transition-colors">Projects</Link>
            <Link to="/experience" className="hover:text-foreground transition-colors">Experience</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </nav>

          <p className="text-sm text-muted-foreground">
            © {currentYear} {personalInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
