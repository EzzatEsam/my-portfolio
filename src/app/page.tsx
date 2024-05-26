import { Flex, Image, Group } from "@mantine/core";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { myLinkedin, myGithub, myEmail, MyItchIo } from "@/lib/data";
import { FaItchIo } from "react-icons/fa6";
export default function About() {
  return (
    <Flex
      mih={50}
      gap="xl"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >
      <div style={{ width: "30vw" }}>
        <h1>Hi there</h1>
        <h2>I am Ezzat Esam</h2>
        <p>
          I am an AI engineer specialized in computer vision, a backend
          developer and a game dev hobbyist. Proficient in Python, C#,
          Typescript, and Go.
        </p>
      </div>
      <Flex direction={"column"} align={"center"} justify={"center"} gap={"lg"}>
        <Image src="/pic.png" h={300} style={{ borderRadius: "50%" }}></Image>
        <Group>
          <Link href={myLinkedin}>
            <FaLinkedin size={30} color="#0A66C2"></FaLinkedin>
          </Link>
          <Link href={myGithub}>
            <FaGithub size={30} color="black"></FaGithub>
          </Link>

          <Link href={MyItchIo}>
            <FaItchIo size={30} color="black"></FaItchIo>
          </Link>

          <Link href={"mailto:" + myEmail}>
            <MdOutlineAlternateEmail size={30} color="red" />
          </Link>
        </Group>
      </Flex>
    </Flex>
  );
}
