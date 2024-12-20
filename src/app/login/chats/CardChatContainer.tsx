"use client";

import { useDisclosure } from "@mantine/hooks";
import {
  useMantineColorScheme,
  Collapse,
  Button,
  Stack,
  Group,
  Box,
} from "@mantine/core";
import { CardChatLayout } from "./CardChatLayout";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { socialRedColor } from "@/utils/socialRedColor";
import { CardChatContainerProps } from "@/interface/interface";
import { IoChevronDownOutline } from "@/icons";

export const  CardChatContainer = ({
  header,
}: CardChatContainerProps): JSX.Element => {
  const [opened, { toggle }] = useDisclosure(false);
  const { colorScheme } = useMantineColorScheme();

  // console.log("From CardChatContainer : ", socialRedColor(header));
  return (
    <Box /* maw={400} */ mx="auto" style={{ marginTop: "0.4rem", width: "100%" }}>
      <Group justify="center" mb={5}>
        <Button
          onClick={toggle}
          fullWidth
          size="compact-md"
          variant="gradient"
          gradient={
            header !== "instagram"
              ? {
                  from: socialRedColor(header),
                  to: socialRedColor(header),
                  deg: 90,
                }
              : { from: "pink", to: "violet", deg: 90 }
          }
          styles={{
            root: { position: "relative" },
            section: {
              fontSize: "1.5rem",
              position: "absolute",
              right: "1rem",
              transform: opened ? "rotate(180deg)" : "rotate(0)",
              transition: "all 0.25s ease-in-out",
            },
          }}
          style={{
            borderRadius: "6px",
            borderBottomRightRadius: opened ? "0" : "6px",
            borderBottomLeftRadius: opened ? "0" : "6px",
          }}
          rightSection={<IoChevronDownOutline />}
        >
          {capitalizeFirstLetter(header)}
        </Button>
      </Group>
      <Collapse
        transitionTimingFunction="linear"
        transitionDuration={250}
        in={opened}
        style={(theme) => ({
          border:
            colorScheme === "light"
              ? opened
                ? `1px solid ${theme.colors.lightTheme[2]}`
                : ""
              : opened
              ? `1px solid ${theme.colors.darkTheme[6]}`
              : "",
          borderRadius: "6px",
          backgroundColor:
            colorScheme === "light"
              ? `${theme.colors.lightTheme[1]}`
              : `${theme.colors.darkTheme[7]}`,
          marginTop: "-0.5rem",
          padding: "0.6rem",
        })}
      >
        <Stack gap={3}>
          <CardChatLayout colorUser={header} />
          <CardChatLayout colorUser={header} />
          <CardChatLayout colorUser={header} />
          <CardChatLayout colorUser={header} />
          <CardChatLayout colorUser={header} />
        </Stack>
      </Collapse>
    </Box>
  );
};
