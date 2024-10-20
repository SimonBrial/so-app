"use client";

import { Container, Stack } from "@mantine/core";
import InsideContainer from "@/components/container/InsideContainer";
import classes from "@/styles/calendar.module.css";
import DayNavCalendar from "./gridView/DayNavCalendar";
import DatesContainer from "./gridView/DatesContainer";

export default function CalendarContainer() {
  return (
    <InsideContainer withBackground={false} withBorder={false} offset={0}>
      <Container
        className={classes.calendarContainer}
        // style={{ backgroundColor: "red", border: "1px solid red" }}
      >
        <Stack style={{ width: "100%", height: "100%" }}>
          <DayNavCalendar />
          <DatesContainer />
        </Stack>
      </Container>
    </InsideContainer>
  );
}
