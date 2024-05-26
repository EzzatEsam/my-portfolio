import "@mantine/core/styles.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MantineProvider } from "@mantine/core";
import { NavigationProgress } from "@mantine/nprogress";
import BasicAppShell from "@/components/appShell";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ezzat Esam Elsayed",
  description: "Communication and Information Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider>
          <NavigationProgress />
          <BasicAppShell>{children}</BasicAppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
