"use client";

import {
  useMantineColorScheme,
  Checkbox,
  Center,
  Group,
  Title,
  Stack,
  Flex,
  Text,
} from "@mantine/core";
import { useEffect, useState } from "react";
import BtnReadMail from "@/components/buttons/BtnReadMail";
import BtnArchive from "@/components/buttons/BtnArchive";
import BtnFavorities from "@/components/buttons/BtnFavorities";
import { MailDataProps } from "@/interface/interface";
import { useMailStore } from "@/store/mail-store";
import dayjs from "dayjs";
import { BtnRecoverMail } from "./buttons/BtnRecoverMail";
import convertHtmlToString from "@/utils/convertHtmlToString";
import BtnMailTrash from "./buttons/BtnMailTrash";

interface MailItemProps extends MailDataProps {
  path: string;
}
export default function MailItem({
  mailFavorite,
  mailArchive,
  description,
  mailRead,
  idMail,
  title,
  path,
  date,
}: MailItemProps): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  const {
    allMailsChecked,
    mailGlobalArray,
    mailArchived,
    fnCheckMail,
    itemChecked,
    fnReadMark,
    fnShowMail,
  } = useMailStore();
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    if (itemChecked.length > 0 /* && allMailsChecked */) {
      itemChecked.find((item) => {
        if (item.idMail === idMail) {
          // console.log("from MailItem (useEffect) --> itemChecked: ", itemChecked);
          setChecked(true);
        }
      });
    }

    if (itemChecked.length === 0 && !allMailsChecked) {
      setChecked(false);
    }
  }, [
    mailArchived as MailDataProps[],
    // itemChecked.length,
    itemChecked,
    allMailsChecked,
    mailGlobalArray,
    mailArchived,
    mailRead,
  ]);
  // console.log("from MailItem --> itemChecked: ", itemChecked);

  // console.log("checked from MailItem component: ", checked);
  // console.log("itemChecked from MailItem component: ", itemChecked);

  return (
    <Group
      mb={5}
      styles={(theme) => ({
        root: {
          padding: "0.4rem 0.8rem",
          border:
            colorScheme === "light"
              ? !mailRead
                ? `2px solid ${theme.colors.lightTheme[6]}`
                : `1px solid ${theme.colors.lightTheme[3]}`
              : !mailRead
              ? `2px solid ${theme.colors.darkTheme[1]}`
              : `1px solid ${theme.colors.darkTheme[2]}`,
          backgroundColor:
            colorScheme === "light" ? "#fff" : theme.colors.darkTheme[7],
          borderRadius: "6px",
          cursor: "default",
          width: "100%",
        },
      })}
    >
      <Flex
        justify={"start"}
        gap={"md"}
        style={{
          width: "100%",
          cursor: "default",
          padding: "0.2rem",
        }}
      >
        <Center px={9}>
          <Checkbox
            /* onClick={() => {
              console.log(!checked ? "yes" : "no");
              fnCheckMail(idMail, path, checked);
            }} */
            onChange={(e) => {
              setChecked(e.currentTarget.checked);
              fnCheckMail(idMail, path, e.currentTarget.checked);
            }}
            checked={checked}
            color="blue"
          />
        </Center>

        <Stack gap={0} style={{ width: "100%" }}>
          <Flex
            justify={"space-between"}
            style={{ margin: "-0.2rem", position: "relative" }}
          >
            <Title
              onClick={() => {
                if (!mailRead) {
                  fnReadMark(idMail);
                }
                fnShowMail(idMail, path);
              }}
              order={5}
              styles={(theme) => ({
                root: {
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[3]}`
                      : `${theme.colors.darkTheme[2]}`,
                  cursor: "pointer",
                },
              })}
            >
              {title}
            </Title>
            <Flex
              p={0}
              gap={1}
              align={"center"}
              justify={"end"}
              styles={(theme) => ({
                root: {
                  position: "absolute",
                  right: "0",
                  top: "-3px",
                  padding: "0",
                  color:
                    colorScheme === "light"
                      ? theme.colors.lightTheme[3]
                      : theme.colors.darkTheme[2],
                },
              })}
            >
              {!path.includes("mails/sent") ? (
                <BtnReadMail status={mailRead} mailId={idMail} path={path} />
              ) : null}

              <BtnFavorities
                status={mailFavorite}
                mailId={idMail}
                size={"small"}
                path={path}
              />
              <BtnArchive status={mailArchive} mailId={idMail} path={path} />
              {path.includes("erased") ? (
                <BtnRecoverMail
                  status={mailArchive}
                  mailId={idMail}
                  path={path}
                />
              ) : null}
              <BtnMailTrash mailId={idMail} path={path} />
            </Flex>
          </Flex>
          <Flex
            justify={"space-between"}
            style={{ margin: "-0.1rem" }}
            align={"center"}
          >
            <Text
              styles={(theme) => ({
                root: {
                  margin: "-0.1rem",
                  color:
                    colorScheme === "light"
                      ? theme.colors.lightTheme[3]
                      : theme.colors.darkTheme[2],
                },
              })}
              size="sm"
            >
              {convertHtmlToString(description).slice(0, 25)}...
            </Text>
            <Text
              size="xs"
              styles={(theme) => ({
                root: {
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[6]}`
                      : `${theme.colors.darkTheme[1]}`,
                },
              })}
            >
              {dayjs(date).format("DD")}/{dayjs(date).format("MM")}/
              {dayjs(date).format("YYYY")}
            </Text>
          </Flex>
        </Stack>
      </Flex>
    </Group>
  );
}
