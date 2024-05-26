import { Flex } from "@mantine/core";

export default function Home() {
  return (
    <Flex align="center" justify="center" style={{ height: "85vh" }}>
      <object
        data="cv.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      ></object>
    </Flex>
  );
}
