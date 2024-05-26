"use client";
import { Text, Timeline } from "@mantine/core";

export default function Home() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Timeline active={2} bulletSize={24} lineWidth={2}>
        <Timeline.Item title="Zewail city of science and technology">
          <Text c="dimmed" size="sm">
            Bachelor of Science, BSc, Communication and Information Engineering
          </Text>
          <Text size="xs">2019 - 2024</Text>
        </Timeline.Item>
        <Timeline.Item title="Zewyet Bem secondary school">
          <Text c="dimmed" size="sm">
            Thanwya amma - Math - 98.4 %
          </Text>
          <Text size="xs">2017 - 2019</Text>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
