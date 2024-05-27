import { ProjectData } from "@/types/ProjectData";
import { Badge, Card, Divider, Group, Image, Text } from "@mantine/core";

export default function ProjectCard({
  projectData,
}: {
  projectData: ProjectData;
}) {
  return (
    <Card
      shadow="sm"
      padding="xl"
      component="a"
      href={projectData.link}
      target="_blank"
      withBorder
      w={300}
    >
      <Card.Section>
        <Image src={projectData.image} height={200} alt={projectData.name} />
      </Card.Section>

      <Divider my="sm" />
      <Text fw={500}>{projectData.name}</Text>
      <Group>
        {projectData.technologies.map((tech) => (
          <Badge color="blue" key={`${projectData.name}-${tech}`} size="sm">
            {tech}
          </Badge>
        ))}
      </Group>

      <Divider my="sm" />

      <Text size="sm">{projectData.description}</Text>
    </Card>
  );
}
