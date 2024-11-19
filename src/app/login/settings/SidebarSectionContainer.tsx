"use cliente";

import React from "react";
import { SidebarSectionSelection } from "./SidebarSectionSelection";
import { Stack, Text, useMantineColorScheme } from "@mantine/core";
import { GeneralDivider } from "@/components/GeneralDivider";

export const SidebarSectionContainer = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Stack
      gap={4}
      styles={(theme) => ({
        root: {
          color:
            colorScheme === "light"
              ? theme.colors.lightTheme[3]
              : theme.colors.darkTheme[2],
        },
      })}
    >
      <Text>Secciones de la Sidebar</Text>
      <GeneralDivider orientation="horizontal"   />
      <SidebarSectionSelection
         
        label="Dashboard"
        selected
      />
      <SidebarSectionSelection
         
        label="Process"
        selected
      />
      <SidebarSectionSelection
         
        label="Chats"
        selected
      />
      <SidebarSectionSelection
         
        label="Base de Datos"
        selected
      />
      <SidebarSectionSelection
         
        label="Calendario"
        selected
      />
      <SidebarSectionSelection
         
        label="Correo"
        selected
      />
      <SidebarSectionSelection
         
        label="Recordatorios"
        selected
      />
      <SidebarSectionSelection
         
        label="Bloc de Notas"
        selected
      />
      <GeneralDivider orientation="horizontal"   />
    </Stack>
  );
};
