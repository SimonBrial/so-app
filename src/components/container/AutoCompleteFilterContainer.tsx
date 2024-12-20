"use client";

import {
  useMantineColorScheme,
  Container,
  Stack,
  Title,
  Flex,
} from "@mantine/core";
import { BadgeClose } from "../badge/BadgeClose";
import { PillFilter } from "../PillFilter";
import { AutoCompleteData } from "@/interface/interface";
import { GeneralDivider } from "../GeneralDivider";
import BtnCheckAllMails from "@/app/login/mails/buttons/BtnCheckAllMails";
import BtnReload from "@/app/login/mails/buttons/BtnReload";

export default function AutoCompleteFilterContainer({
  label,
}: AutoCompleteData): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  let resolve: JSX.Element | JSX.Element[];

  const pills = (label: string | string[]): JSX.Element | JSX.Element[] => {
    if (typeof label === "string") {
      resolve = <PillFilter tag={label} />;
    } else if (Array.isArray(label)) {
      resolve = label.map((value: string, index: number) => {
        return <PillFilter tag={value} key={index} />;
      });
    }
    return resolve;
  };

  return (
    <Container
      style={{
        width: "100%",
        maxWidth: "100%",
        padding: "0",
      }}
    >
      <Stack style={{ width: "100%" }} gap={4}>
        <Flex justify="space-between" align="center">
          <Flex justify="flex-start" align="center" gap={"xs"}>
            <BtnReload />
            <BtnCheckAllMails />
            <Title
              order={5}
              styles={(theme) => ({
                root: {
                  color:
                    colorScheme === "light"
                      ? `1px solid ${theme.colors.lightTheme[2]}`
                      : `1px solid ${theme.colors.darkTheme[2]}`,
                },
              })}
            >
              Buscar:{" "}
            </Title>
            {pills(label)}
          </Flex>
          <BadgeClose status={true} />
        </Flex>
        <GeneralDivider orientation="horizontal"   />
      </Stack>
    </Container>
  );
}
