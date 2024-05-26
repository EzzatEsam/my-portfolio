"use client";
import { myEmail, myGithub, myLinkedin, myName } from "@/lib/data";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Flex, Stack, Text, Card, Divider } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <Stack>
      <Text size="xl">{myName}</Text>
      <Divider my="md" label="Email" />
      <Text>
        <Link href={"mailto:" + myEmail}>
          <MdOutlineAlternateEmail /> {myEmail}
        </Link>
      </Text>
      <Divider my="md" label="LinkedIn" />
      <Text>
        <Link href={myLinkedin}>
          <FaLinkedin size={25} /> {myLinkedin}
        </Link>
      </Text>
      <Divider my="md" label="Github" />
      <Text>
        <Link href={myGithub}>
          <FaGithub size={25} /> {myGithub}
        </Link>
      </Text>
      <Divider my={"md"} label="Phone" />
      <Text> +20 112 278 8260 </Text>
      <Text> +20 101 647 5725 </Text>
    </Stack>
  );
}
