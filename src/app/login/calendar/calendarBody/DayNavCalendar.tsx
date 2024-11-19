"use client";

import { HiOutlineCalendar, IoChevronBack, IoChevronForward } from "@/icons";
import {
  useMantineColorScheme,
  UnstyledButton,
  Container,
  Center,
  Stack,
  Flex,
  Text,
  Box,
} from "@mantine/core";
import btnClasses from "@/styles/btn-styles.module.css";
import { GeneralDivider } from "@/components/GeneralDivider";
import { months } from "@/data/calendarDaysAndMonth";
import { useCalendarStore } from "@/store/calendar-store";
import { CountIndicator } from "@/components/CountIndicator";
import BtnAdd from "@/components/buttons/BtnAdd";
import { BtnReportGenerate } from "@/components/buttons/BtnReportGenerate";
import CreateNewEventLayout from "../layout/CreateNewEventLayout";

export default function DayNavCalendar() {
  const { colorScheme } = useMantineColorScheme();
  const {
    fnShowCreateEventLayout,
    showCreateEventLayout,
    currentMonth,
    currentYear,
    fnNextMonth,
    fnPrevMonth,
    eventsArray,
  } = useCalendarStore();
  return (
    <Container style={{ maxWidth: "100%", width: "100%", padding: "0" }}>
      <Stack gap={4} style={{ width: "100%" }}>
        <Flex
          align={"center"}
          justify={"space-between"}
          style={{ width: "100%" }}
        >
          <Flex gap={10}>
            <Flex gap={4}>
              <UnstyledButton
                onClick={fnPrevMonth}
                variant="white"
                size={"lg"}
                classNames={{
                  root:
                    colorScheme === "light"
                      ? btnClasses.btnMonth
                      : btnClasses.btnMonth_dark,
                }}
              >
                <Center>
                  <IoChevronBack />
                </Center>
              </UnstyledButton>
              <UnstyledButton
                onClick={fnNextMonth}
                variant="white"
                size={"lg"}
                classNames={{
                  root:
                    colorScheme === "light"
                      ? btnClasses.btnMonth
                      : btnClasses.btnMonth_dark,
                }}
              >
                <Center>
                  <IoChevronForward />
                </Center>
              </UnstyledButton>
            </Flex>
            <Text
              styles={(theme) => ({
                root: {
                  fontSize: "1.5rem",
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[3]}`
                      : `${theme.colors.darkTheme[2]}`,
                },
              })}
            >
              {/* {months.find((month, index) =>
                  monthCount === index ? month : "",
                )}{" "}
                - {yearCount} */}
              {months[currentMonth]} {currentYear}
            </Text>
          </Flex>
          <Flex
            gap={4}
            style={{ height: "2.5rem", width: "50%" }}
            justify={"flex-end"}
          >
            <CountIndicator
              count={eventsArray.length}
              description="Total de eventos para el mes"
              iconSection={<HiOutlineCalendar />}
            />
            <Box style={{ height: "100%", width: "25%" }}>
              <BtnReportGenerate />
            </Box>
            <Box>
              <BtnAdd
                iconTag="add-event"
                label="Nuevo Evento"
                fnShow={() => fnShowCreateEventLayout(showCreateEventLayout)}
                showDrawer={showCreateEventLayout}
              >
                <CreateNewEventLayout />
              </BtnAdd>
            </Box>
          </Flex>
        </Flex>
        <GeneralDivider orientation="horizontal" />
      </Stack>
    </Container>
  );
}
