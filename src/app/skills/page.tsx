"use client";
import { Flex, Text } from "@mantine/core";
import { mySkills } from "@/lib/data";
import SkillSetView from "@/components/skillSetComponent";
export default function Skills() {
  return (
    <Flex align="center" justify="center" direction={"column"} gap={"lg"}>
      {/* <ul style={{ listStyle: "none" }}> */}
      {mySkills.map((skillSet) => (
        // <li key={skillSet.name}>
        <SkillSetView skillSet={skillSet} key={skillSet.name} />
        // </li>
      ))}
      {/* </ul> */}
    </Flex>
  );
}
