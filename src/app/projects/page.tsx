"use client";

import { MyProjects } from "@/lib/data";
import { Flex, Group, SimpleGrid } from "@mantine/core";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <Group align="flex-start" justify="center" gap={"lg"}>
      {MyProjects.map((project) => (
        <ProjectCard projectData={project} key={project.name} />
      ))}
    </Group>
  );
}
