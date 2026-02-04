import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50">
      <div className="section-container py-12">
        <div className="flex flex-col items-center gap-8">
          <Link to="/" className="text-2xl font-bold tracking-tighter">
            DL<span className="text-primary">.</span>
          </Link>

          <nav className="flex items-center gap-8 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors duration-300">
              Home
            </Link>
            <Link to="/projects" className="hover:text-foreground transition-colors duration-300">
              Projects
            </Link>
            <Link to="/experience" className="hover:text-foreground transition-colors duration-300">
              Experience
            </Link>
            <Link to="/contact" className="hover:text-foreground transition-colors duration-300">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-5">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="w-full pt-8 border-t border-border/30 text-center">
            <p className="text-xs text-muted-foreground">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
