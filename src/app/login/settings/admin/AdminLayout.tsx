"use client";

import InsideContainer from "@/components/container/InsideContainer";
import { Flex, useMantineColorScheme } from "@mantine/core";
import React from "react";

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <InsideContainer
       
      withBorder={false}
      withBackground
      offset={130}
    >
      <Flex
        gap={16}
        styles={({
          root: {
            border: colorScheme === "light" ? "1px solid #cdcdcd" : "none",
            borderRadius: "6px",
            padding: "1rem",
            height: "100%",
            width: "100%",
          },
        })}
      >
        {children}
      </Flex>
    </InsideContainer>
  );
};
