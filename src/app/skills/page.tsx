"use client";
import { Flex, Text } from "@mantine/core";
import { mySkills } from "@/lib/data";
import SkillSetView from "@/components/skillSetComponent";
export default function Skills() {
  return (
    <Flex align="center" justify="center" direction={"column"} gap={"lg"}>
      {mySkills.map((skillSet) => (
        <SkillSetView skillSet={skillSet} />
      ))}
    </Flex>
  );
}
