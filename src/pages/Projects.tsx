import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

const categories = ["All", "WordPress", "Frontend", "SEO", "IT"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <Layout>
      <section className="section-padding">
        <div className="section-container">
          <div className="mb-10">
            <h1 className="heading-xl mb-4">Projects</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              A collection of websites and web applications I've designed, developed, and maintained.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeFilter === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                No projects found for this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
