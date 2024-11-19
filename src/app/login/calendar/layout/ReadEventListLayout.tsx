"use client";

import TitleSimpleLayout from "@/components/layout/TitleSimpleLayout";
import { IoClose } from "@/icons";
import { Button, ScrollArea, Stack } from "@mantine/core";
import { useCalendarStore } from "@/store/calendar-store";
import { BigEventCard } from "../cards";

interface EventListLayoutProps {
  close: () => void;
  day: Date;
}

export default function ReadEventListLayout({ close, day }: EventListLayoutProps) {
  const { fnEventListGenerator } = useCalendarStore();

  return (
    <Stack
      justify="space-between"
      style={{
        padding: "0 0.5rem",
        height: "95vh",
      }}
      gap={6}
    >
      <Stack gap={6} style={{ width: "100%" }}>
        <TitleSimpleLayout title="Eventos del dia" />
        <ScrollArea h={500} scrollbarSize={2} offsetScrollbars>
          <Stack gap={6}>
          {fnEventListGenerator(day).map((event) => {
            const { degree, description, id, title, userToAssign } =
              event;
            return (
              <BigEventCard
                userToAssign={userToAssign}
                description={description}
                degree={degree}
                title={title}
                key={id}
                admin
              />
            );
          })}
          </Stack>
        </ScrollArea>
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
