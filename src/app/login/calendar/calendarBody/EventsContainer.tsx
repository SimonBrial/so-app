"use client";

import { useMantineColorScheme, Container, Stack } from "@mantine/core";
import classes from "@/styles/calendar.module.css";
import { useCalendarStore } from "@/store/calendar-store";
import { SmallEventCard } from "../cards";

export default function EventsContainer({ eventDay }: { eventDay: Date }) {
  const { colorScheme } = useMantineColorScheme();
  const { fnEventListGenerator } = useCalendarStore();

  return (
    <Container
      classNames={{
        root:
          colorScheme === "light"
            ? classes.container_dayEvents
            : classes.container_dayEvents_dark,
      }}
    >
      <Stack
        gap={2}
        p={0}
        style={{
          height: "100%",
        }}
        className={classes.dayEvents}
      >
        {fnEventListGenerator(eventDay).map((event) => (
          <SmallEventCard smallCardData={event} key={event.id} />
        ))}
      </Stack>
    </Container>
  );
}

/* const generateEventList = (
    day: number,
    eventsArray: EventsArray[],
  ): (React.JSX.Element | undefined)[] => {
    return eventsArray.map((event, index) => {
      const { date, title, degree, description, id, userToAssign } = event;
      if (day === date.getDate()) {
        return (
          <div key={index} className="StyledEvent">
            {areDateOnSameDay(
              getDateObjet(day, currentMonth, currentYear),
              event.date,
            ) && (
              <SmallEventCard
                userToAssign={userToAssign}
                description={description}
                cardSize="small"
                degree={degree}
                title={title}
                key={index}
                date={date}
                id={id}
              />
            )}
          </div>
        );
      }
    });
  }; */
