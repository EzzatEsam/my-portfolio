"use client";

import { MyProjects } from "@/lib/data";
import { Flex, SimpleGrid } from "@mantine/core";
import ProjectCard from "@/components/ProjectCard";
export default function Projects() {
  return (
    <SimpleGrid cols={3} spacing="lg" verticalSpacing="lg">
      {MyProjects.map((project) => (
        <ProjectCard projectData={project} key={project.name} />
      ))}
    </SimpleGrid>
  );
}
