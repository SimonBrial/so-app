"use client";

import BtnDelete from "@/components/buttons/BtnDelete";
import BtnSee from "@/components/buttons/BtnSee";
import { BiCrown, HiOutlineTrash } from "@/icons";
import {
  useMantineColorScheme,
  Container,
  Avatar,
  Center,
  Flex,
  Text,
} from "@mantine/core";
import { SuperAdminDescription } from "./SuperAdminDescription";
import { IconLayout } from "@/components/IconLayout";
import { SuperAdminDeleteLayout } from "../layout/super-admin/SuperAdminDeleteLayout";
import { BtnEditAdmin } from "../buttons/BtnEditAdmin";

export const AdminCard = ({ admin }: { admin: boolean }) => {
  const { colorScheme } = useMantineColorScheme();
  // const { setShowUserEditLayout, showEditUserLayout } = useSettingsStore();
  return (
    <Container
      styles={(theme) => ({
        root: {
          border:
            colorScheme === "light"
              ? `1px solid ${theme.colors.lightTheme[2]}`
              : `1px solid ${theme.colors.darkTheme[9]}`,
          backgroundColor:
            colorScheme === "light"
              ? `${theme.colors.lightTheme[0]}`
              : `${theme.colors.darkTheme[7]}`,
          borderRadius: "6px",
          padding: "0.6rem 1rem",
          width: "98%",
          maxWidth: "100%",
        },
      })}
    >
      <Flex justify={"space-between"} align={"center"}>
        <Flex align={"center"} gap={8} style={{ cursor: "default" }}>
          <Avatar style={{ fontSize: "1.1rem" }} />
          <Text
            style={{ fontSize: "1.5rem" }}
            styles={(theme) => ({
              root: {
                color:
                  colorScheme === "light"
                    ? `${theme.colors.lightTheme[3]}`
                    : `${theme.colors.darkTheme[2]}`,
              },
            })}
          >
            Simon Briceño
          </Text>
          {admin ? (
            <Center
              styles={(theme) => ({
                root: {
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[8]}`
                      : `${theme.colors.darkTheme[1]}`,
                },
              })}
            >
              <BiCrown style={{ fontSize: "0.95rem" }} />
            </Center>
          ) : (
            <></>
          )}
        </Flex>
        <Flex gap={"xs"}>
          <BtnDelete
            color="green"
            icon={
              <IconLayout>
                <HiOutlineTrash />
              </IconLayout>
            }
            id={crypto.randomUUID()}
            labelBtn="Aceptar"
            title="Registro Eliminado"
            description="El registro ha sido eliminado satisfactoriamente 😎!"
          >
            <SuperAdminDeleteLayout />
          </BtnDelete>
          <BtnSee idToShow="">
            <SuperAdminDescription />
          </BtnSee>
          <BtnEditAdmin /* idToEdit={crypto.randomUUID()} */ />
        </Flex>
      </Flex>
    </Container>
    // labelBtn="Guardar"
    // description="Los datos del usuario han sido edistados satisfactoriamente 😎!"
    // color="green"
    // title="Datos de Usuario Editados"
    /* icon={
              <IconLayout>
                <HiOutlineSave />
              </IconLayout>
            } */
  );
};
