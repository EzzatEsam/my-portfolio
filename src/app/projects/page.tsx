"use client";

import { MyProjects } from "@/lib/data";
import { Flex, SimpleGrid } from "@mantine/core";
import ProjectCard from "@/components/ProjectCard";

import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
export default function Projects() {
  const { height, width } = useWindowDimensions();

  let nCols = width > 1200 ? 3 : width > 1000 ? 2 : 1;
  return (
    <SimpleGrid cols={nCols} spacing="md" verticalSpacing="lg">
      {MyProjects.map((project) => (
        <ProjectCard projectData={project} key={project.name} />
      ))}
    </SimpleGrid>
  );
}
