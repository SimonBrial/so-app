"use client";

import { Container, Stack } from "@mantine/core";
import InsideContainer from "@/components/container/InsideContainer";
import classes from "@/styles/calendar.module.css";
import DayNavCalendar from "./gridView/DayNavCalendar";
import DatesContainer from "./gridView/DatesContainer";

// TODO: Agregar la opcion para añadir eventos.
// TODO: Ajustar los dias del mes, que no se muevan.
// TODO: Refactorizar todo el codigo. ✅

export default function CalendarContainer() {
  return (
    <InsideContainer
      withBackground
      withBorder={false}
      offset={50}
    >
      <Container className={classes.calendarContainer}>
        <Stack style={{ width: "100%" }}>
          <DayNavCalendar />
          <DatesContainer />
        </Stack>
      </Container>
    </InsideContainer>
  );
}
