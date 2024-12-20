"use client";

import { PriorityBadge } from "@/components/badge/PriorityBadge";
import { GeneralDivider } from "@/components/GeneralDivider";
import TitleSimpleLayout from "@/components/layout/TitleSimpleLayout";
import { IoClose } from "@/icons";
import { EventCardProps } from "@/interface/interface";
import { Button, Flex, Stack, Text, Title } from "@mantine/core";
import dayjs from "dayjs";

interface DescriptionEventLayoutProps {
  descriptionObj: EventCardProps;
  close: () => void;
}

export default function ReadDescriptionEventLayout({
  descriptionObj,
  close,
}: DescriptionEventLayoutProps) {
  return (
    <Stack
      justify="space-between"
      style={{
        padding: "0 0.5rem",
        height: "95vh",
      }}
      gap={6}
    >
      <Stack gap={6}>
        <TitleSimpleLayout title="Descripcion del Evento" />
        <Flex justify={"space-between"} align={"center"} gap={8}>
          <Title order={4}>Titulo</Title>
          <Title order={4}>{descriptionObj.title}</Title>
        </Flex>
        <GeneralDivider orientation="horizontal" />
        <Flex justify={"space-between"} align={"center"}>
          <Title order={4}>Prioridad</Title>
          <PriorityBadge title={descriptionObj.degree} />
        </Flex>
        <GeneralDivider orientation="horizontal" />
        <Flex justify={"space-between"} align={"center"}>
          <Title order={4}>Fecha</Title>
          <Title order={4}>{dayjs(descriptionObj.date).format("DD/MM/YYYY - hh: mm A")}</Title>
        </Flex>
        <GeneralDivider orientation="horizontal" />
        <Flex justify={"space-between"} align={"center"}>
          <Title order={4}>Asignado a</Title>
          <Title order={4}>{descriptionObj.userToAssign}</Title>
        </Flex>
        <GeneralDivider orientation="horizontal" />

        <Title order={4}>Descripcion</Title>
        <GeneralDivider orientation="horizontal" />
        <Text px={10}>{descriptionObj.description}</Text>
      </Stack>
      <Button
          onClick={close}
          fullWidth
          variant="white"
          leftSection={<IoClose />}
          styles={(theme) => ({
            root: {
              border: `2px solid ${theme.colors.lightTheme[6]}`,
              color: `${theme.colors.lightTheme[6]}`,
            },
            section: { fontSize: "1.2rem" },
          })}
        >
          Cancelar
        </Button>
    </Stack>
  );
}
