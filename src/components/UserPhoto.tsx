"use client";

import { useState } from "react";
import { AiOutlinePaperClip } from "@/icons";
import {
  useMantineColorScheme,
  UnstyledButton,
  FileButton,
  Avatar,
  Center,
  Stack,
  Title,
  Text,
  Flex,
} from "@mantine/core";

export default function UserPhoto({
  userIconSize,
}: {
  userIconSize: string;
}): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  const [file, setFile] = useState<File | null>(null);
  return (
    <Flex align={"center"} justify={"center"} gap={10} w={"100%"}>
      <Avatar
        variant="transparent"
        radius="xs"
        size={userIconSize}
        color="indigo"
        src=""
      />
      <Stack gap={0}>
        <FileButton onChange={setFile} accept="image/png,image/jpeg">
          {(props) => (
            <UnstyledButton {...props}>
              <Title
                order={6}
                style={{
                  color: colorScheme === "light" ? "#696969" : "#EFF3F5",
                  textAlign: "center",
                }}
              >
                CARGAR FOTO
              </Title>
            </UnstyledButton>
          )}
        </FileButton>

        {file && (
          <Flex styles={({ root: { color: "#696969" } })}>
            <Center styles={{ root: { fontSize: "1.15rem" } }}>
              <AiOutlinePaperClip />
            </Center>
            <Text size="sm">./ {file.name}</Text>
          </Flex>
        )}
      </Stack>
    </Flex>
  );
}
