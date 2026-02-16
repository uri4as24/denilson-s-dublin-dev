import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";

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

          {/* Glass pill filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "glass-pill text-muted-foreground hover:text-foreground"
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
              <p className="text-muted-foreground">No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
