import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Skills } from "@/components/home/Skills";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ExperienceSnapshot } from "@/components/home/ExperienceSnapshot";
import { Education } from "@/components/home/Education";
import { ContactCTA } from "@/components/home/ContactCTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <ExperienceSnapshot />
      <Education />
      <ContactCTA />
    </Layout>
  );
};

export default Index;
