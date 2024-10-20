"use client";

import {
  useMantineColorScheme,
  Container,
  Divider,
  Center,
  Stack,
  Title,
  Flex,
  Text,
} from "@mantine/core";
import AlarmCardDate from "./AlarmCardDate";
import { AlarmObj } from "@/interface/interface";
import { HiOutlineLockClosed, HiOutlineLockOpen, PiRobot } from "@/icons";
import TooltipLayout from "@/components/TooltipLayout";
import { useAlarmStore } from "@/store/alarm-store";

interface AlarmCardProps {
  themeColor: string;
  alarmObj: AlarmObj;
}

export default function AlarmCard({
  themeColor,
  alarmObj,
}: AlarmCardProps): JSX.Element {
  // console.log(folderAssigned);
  const { colorScheme } = useMantineColorScheme();
  const { fnGetAlarm, setCloseDescription } = useAlarmStore();
  return (
    <>
      {alarmObj !== undefined && (
        <Container
          onClick={() => {
            setCloseDescription(false);
            fnGetAlarm(alarmObj.id, alarmObj.folderAssigned);
          }}
          p={10}
          style={{
            border: `1px solid ${themeColor}`,
            width: "100%",
            borderRadius: "6px",
            cursor: "pointer",
            backgroundColor: "#FFFF",
          }}
        >
          <Stack gap={4}>
            <Flex
              align={"center"}
              justify={"space-between"}
              styles={{ root: { color: `${"#696969"}` } }}
            >
              <Stack gap={1} w={"95%"}>
                <Flex align={"center"} justify={"space-between"} gap={5}>
                  <Flex>
                    <Text size="1.2rem">{alarmObj.icon}</Text>
                    <Title
                      order={6}
                      styles={{
                        root: { color: themeColor },
                      }}
                    >
                      {alarmObj.alarmTitle.length > 20 ? (
                        <>{alarmObj.alarmTitle.slice(0, 20)}...</>
                      ) : (
                        alarmObj.alarmTitle
                      )}
                    </Title>
                  </Flex>
                  <Flex mr={5} gap={4}>
                    {alarmObj.privateAlarm ? (
                      <TooltipLayout label="Privado" position="top">
                        <Center
                          styles={(theme) => ({
                            root: {
                              fontSize: "1rem",
                              color:
                                colorScheme === "light"
                                  ? `${theme.colors.lightTheme[3]}`
                                  : `${theme.colors.darkTheme[2]}`,
                            },
                          })}
                        >
                          <HiOutlineLockClosed />
                        </Center>
                      </TooltipLayout>
                    ) : (
                      <TooltipLayout label="Publico" position="top">
                        <Center
                          styles={(theme) => ({
                            root: {
                              fontSize: "1rem",
                              color:
                                colorScheme === "light"
                                  ? `${theme.colors.lightTheme[3]}`
                                  : `${theme.colors.darkTheme[2]}`,
                            },
                          })}
                        >
                          <HiOutlineLockOpen />
                        </Center>
                      </TooltipLayout>
                    )}
                    {alarmObj.automated ? (
                      <TooltipLayout label="Automatizado" position="top">
                        <Center
                          styles={(theme) => ({
                            root: {
                              fontSize: "1rem",
                              color:
                                colorScheme === "light"
                                  ? `${theme.colors.lightTheme[3]}`
                                  : `${theme.colors.darkTheme[2]}`,
                            },
                          })}
                        >
                          <PiRobot />
                        </Center>
                      </TooltipLayout>
                    ) : null}
                  </Flex>
                </Flex>
                <Divider
                  size="md"
                  styles={{ root: { borderColor: themeColor } }}
                />
              </Stack>
            </Flex>
            <AlarmCardDate
              themeColor={themeColor}
              key={crypto.randomUUID()}
              date={alarmObj.createAt}
              label="Creado"
            />
            <AlarmCardDate
              themeColor={themeColor}
              key={crypto.randomUUID()}
              date={alarmObj.toDate}
              label="Para"
            />
            <Container
              h={"2rem"}
              style={{ overflow: "hidden", width: "100%" }}
              p={0}
            >
              <Text
                styles={(theme) => ({
                  root: {
                    textAlign: "start",
                    width: "100%",
                    lineHeight: "16px",
                    fontSize: "0.8rem",
                    color: `${theme.colors.lightTheme[3]}`,
                  },
                })}
              >
                {alarmObj.description}
              </Text>
            </Container>
          </Stack>
        </Container>
      )}
    </>
  );
}
