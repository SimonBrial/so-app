"use client";

import { PriorityBadge } from "@/components/badge/PriorityBadge";
import { GeneralDivider } from "@/components/GeneralDivider";
import TitleSimpleLayout from "@/components/layout/TitleSimpleLayout";
import { EventsArray } from "@/interface/interface";
import { useCalendarStore } from "@/store/calendar-store";
import {
  useMantineColorScheme,
  Container,
  Stack,
  Flex,
  Text,
} from "@mantine/core";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function DeleteEventLayout({
  eventToDeleteId,
}: {
  eventToDeleteId: string;
}) {
  const { colorScheme } = useMantineColorScheme();
  const { eventsToDelete, fnGetEventToDelete } = useCalendarStore();
  const [eventSelected, setEventSelected] = useState<EventsArray>();

  useEffect(() => {
    const eventFound = fnGetEventToDelete(eventToDeleteId);
    if (eventFound !== undefined && typeof eventFound !== "string") {
      setEventSelected(eventFound);
    }
  }, [eventsToDelete]);
  /* console.log(eventsToDelete)
  console.log(eventToDeleteId);
  console.log(eventSelected); */
  return (
    <Stack gap={8}>
      <TitleSimpleLayout title="Eliminar Evento" />
      <Container
        styles={(theme) => ({
          root: {
            maxWidth: "100%",
            width: "100%",
            padding: "1.2rem 1rem",
            borderRadius: "6px",
            height: "100%",
            border:
              colorScheme === "light"
                ? `1px solid ${theme.colors.lightTheme[2]}`
                : `1px solid ${theme.colors.darkTheme[9]}`,
            backgroundColor:
              colorScheme === "light" ? "#fff" : `${theme.colors.darkTheme[7]}`,
          },
        })}
      >
        {eventSelected ? (
          <Stack gap={6}>
            <Stack gap={1} w={"100%"}>
              <Flex align={"center"} gap={10}>
                <Text
                  size="1.1rem"
                  styles={(theme) => ({
                    root: {
                      color:
                        colorScheme === "light"
                          ? theme.colors.lightTheme[3]
                          : theme.colors.darkTheme[2],
                    },
                  })}
                >
                  Titulo:
                </Text>
                <Text
                  size="1.1rem"
                  styles={(theme) => ({
                    root: {
                      color:
                        colorScheme === "light"
                          ? theme.colors.principalTheme[6]
                          : theme.colors.principalTheme[7],
                    },
                  })}
                >
                  {eventSelected.title}
                </Text>
              </Flex>
              <GeneralDivider orientation="horizontal" />
            </Stack>
            <Stack gap={1} w={"100%"}>
              <Flex align={"center"} gap={10}>
                <Text
                  size="1.1rem"
                  styles={(theme) => ({
                    root: {
                      color:
                        colorScheme === "light"
                          ? theme.colors.lightTheme[3]
                          : theme.colors.darkTheme[2],
                    },
                  })}
                >
                  Prioridad:
                </Text>
                <PriorityBadge title={eventSelected.degree} />
              </Flex>
              <GeneralDivider orientation="horizontal" />
            </Stack>
            <Stack gap={1} w={"100%"}>
              <Flex align={"center"} gap={10}>
                <Text
                  size="1.1rem"
                  styles={(theme) => ({
                    root: {
                      color:
                        colorScheme === "light"
                          ? theme.colors.lightTheme[3]
                          : theme.colors.darkTheme[2],
                    },
                  })}
                >
                  Fecha:
                </Text>
                <Text
                  size="1.1rem"
                  styles={(theme) => ({
                    root: {
                      color:
                        colorScheme === "light"
                          ? theme.colors.principalTheme[6]
                          : theme.colors.principalTheme[7],
                    },
                  })}
                >
                  {dayjs(eventSelected.date).format("DD/MM/YYYY - hh: mm A")}
                </Text>
              </Flex>
              <GeneralDivider orientation="horizontal" />
            </Stack>
            <Stack gap={1} w={"100%"}>
              <Flex align={"center"} gap={10}>
                <Text
                  size="1.1rem"
                  styles={(theme) => ({
                    root: {
                      color:
                        colorScheme === "light"
                          ? theme.colors.lightTheme[3]
                          : theme.colors.darkTheme[2],
                    },
                  })}
                >
                  Asignado por:
                </Text>
                <Text
                  size="1.1rem"
                  styles={(theme) => ({
                    root: {
                      color:
                        colorScheme === "light"
                          ? theme.colors.principalTheme[6]
                          : theme.colors.principalTheme[7],
                    },
                  })}
                >
                  {eventSelected.userToassign}
                </Text>
              </Flex>
              <GeneralDivider orientation="horizontal" />
            </Stack>
            <Stack gap={1} w={"100%"}>
              <Flex align={"center"} gap={10}>
                <Text
                  size="1.1rem"
                  styles={(theme) => ({
                    root: {
                      color:
                        colorScheme === "light"
                          ? theme.colors.lightTheme[3]
                          : theme.colors.darkTheme[2],
                    },
                  })}
                >
                  Asignado a:
                </Text>
                <Text
                  size="1.1rem"
                  styles={(theme) => ({
                    root: {
                      color:
                        colorScheme === "light"
                          ? theme.colors.principalTheme[6]
                          : theme.colors.principalTheme[7],
                    },
                  })}
                >
                  {eventSelected.userToassign}
                </Text>
              </Flex>
              <GeneralDivider
                orientation="horizontal"
                key={crypto.randomUUID()}
              />
            </Stack>
            <Stack gap={1} w={"100%"}>
              <Text
                size="1.1rem"
                styles={(theme) => ({
                  root: {
                    color:
                      colorScheme === "light"
                        ? theme.colors.lightTheme[3]
                        : theme.colors.darkTheme[2],
                  },
                })}
              >
                Descripcion
              </Text>
              <GeneralDivider
                orientation="horizontal"
                key={crypto.randomUUID()}
              />
              <Container
                styles={(theme) => ({
                  root: {
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor:
                      colorScheme === "light"
                        ? theme.colors.lightTheme[3]
                        : theme.colors.darkTheme[2],
                    borderRadius: "6px",
                    width: "100%",
                    padding: "0.5rem",
                    marginTop: "0.4rem",
                  },
                })}
              >
                <Text
                  size="0.9rem"
                  styles={(theme) => ({
                    root: {
                      color:
                        colorScheme === "light"
                          ? theme.colors.lightTheme[3]
                          : theme.colors.darkTheme[2],
                    },
                  })}
                >
                  {eventSelected.description}
                </Text>
              </Container>
            </Stack>
          </Stack>
        ) : (
          <Text
            size="1.1rem"
            styles={(theme) => ({
              root: {
                color:
                  colorScheme === "light"
                    ? theme.colors.lightTheme[3]
                    : theme.colors.darkTheme[2],
              },
            })}
          >
            Hubo un error al intentar borrar el Evento
          </Text>
        )}
      </Container>
    </Stack>
  );
}
