import { SkillSet } from "@/lib/SkillSet";
import { Card, Flex, Group, Text } from "@mantine/core";

export default function SkillSetView({ skillSet }: { skillSet: SkillSet }) {
  return (
    <Flex align="center" justify="center" direction={"column"} gap={"lg"}>
      <Text size="lg">{skillSet.name}</Text>
      <Group>
        {skillSet.innerSKills.map((skill) => (
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Flex
              align="center"
              justify="center"
              direction={"column"}
              gap={"lg"}
            >
              {skill.logo}
            </Flex>
            <Text size="sm">{skill.name}</Text>
          </Card>
        ))}
      </Group>
    </Flex>
  );
}
