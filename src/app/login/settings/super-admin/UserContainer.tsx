"use client";

import { useDisclosure } from "@mantine/hooks";
import {
  useMantineColorScheme,
  Container,
  Collapse,
  Center,
  Stack,
  Badge,
  Flex,
  Text,
  Button,
  Box,
} from "@mantine/core";
import { BiCrown } from "@/icons";
import { AdminCard } from "./AdminCard";
import { GeneralDivider } from "@/components/GeneralDivider";
import { labelType } from "@/types/types";
import { useSettingsStore } from "@/store/setting-store";
import BtnAdd from "@/components/buttons/BtnAdd";

const testArray = [
  "Admin",
  "Super Admin",
  "Admin",
  "Super Admin",
  "Admin",
  "Super Admin",
  "Admin",
  "Super Admin",
  "Admin",
  "Super Admin",
];

export const UserContainer = ({ label }: { label: labelType }) => {
  const [opened, { toggle }] = useDisclosure(false);
  const { colorScheme } = useMantineColorScheme();
  const { setAddAdminlayout, showAddAdminlayout } = useSettingsStore();
  return (
    <Container
      p={12}
      styles={(theme) => ({
        root: {
          width: "100%",
          maxWidth: "100%",
          border:
            colorScheme === "light"
              ? `2px solid ${theme.colors.lightTheme[2]}`
              : `2px solid ${theme.colors.darkTheme[9]}`,
          borderRadius: "6px",
          backgroundColor:
            colorScheme === "light" ? "#fff" : `${theme.colors.darkTheme[7]}`,
        },
      })}
    >
      <Stack>
        <Stack gap={4}>
          <Flex justify={"space-between"} align={"center"}>
            <Flex
              gap={6}
              align={"center"}
              onClick={toggle}
              style={{ cursor: "default" }}
            >
              <Center
                styles={(theme) => ({
                  root: {
                    color:
                      label === "Super Admin"
                        ? colorScheme === "light"
                          ? `${theme.colors.lightTheme[6]}`
                          : `${theme.colors.darkTheme[1]}`
                        : colorScheme === "light"
                        ? `${theme.colors.lightTheme[1]}`
                        : `${theme.colors.darkTheme[9]}`,
                  },
                })}
              >
                <BiCrown style={{ fontSize: "2.5rem" }} />
              </Center>
              <Text
                style={{ fontSize: "2rem" }}
                styles={(theme) => ({
                  root: {
                    color:
                      colorScheme === "light"
                        ? `${theme.colors.lightTheme[3]}`
                        : `${theme.colors.darkTheme[2]}`,
                  },
                })}
              >
                Lista de {label}
              </Text>
              <Badge
                radius={"sm"}
                styles={(theme) => ({
                  root: {
                    backgroundColor:
                      colorScheme === "light"
                        ? `${theme.colors.principalTheme[6]}`
                        : `${theme.colors.darkTheme[1]}`,
                  },
                })}
              >
                9
              </Badge>
            </Flex>
            <Box h={40}>
              <BtnAdd
                fnShow={setAddAdminlayout}
                showDrawer={showAddAdminlayout}
                iconTag="add-user"
                label={`Nuevo ${label}`}
              >
                prueba
                <Button onClick={() => setAddAdminlayout(false)}>close</Button>
              </BtnAdd>
            </Box>
          </Flex>
          <GeneralDivider orientation="horizontal" />
        </Stack>
        <Collapse in={opened}>
          <Stack gap={5}>
            {testArray.map((item, index) =>
              index % 2 === 0 ? (
                <AdminCard
                  admin={item === "Super Admin" ? true : false}
                  key={index}
                />
              ) : (
                <AdminCard
                  admin={item === "Super Admin" ? true : false}
                  key={index}
                />
              ),
            )}
          </Stack>
        </Collapse>
      </Stack>
    </Container>
  );
};
// TODO: Something is happening with the drawner, it's shows even doesn't click on the button
