"use client";
import {
  AppShell,
  Burger,
  Button,
  Flex,
  Group,
  Skeleton,
  Text,
  NavLink,
  Avatar,
  Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";


export default function BasicAppShell(props: any) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text>Ezzat Esam Elsayed</Text>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <NavLink label="About" href="/" />
        <NavLink label="Education" href="education" />
        <NavLink label="Skills" href="skills" />
        <NavLink label="Projects" href="projects" />
        <NavLink label="Contact" href="contact" />
        <NavLink label="Resume" href="resume" />
      </AppShell.Navbar>
      <AppShell.Main>{props.children}</AppShell.Main>
    </AppShell>
  );
}
