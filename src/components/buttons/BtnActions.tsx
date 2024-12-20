/* eslint-disable object-shorthand */
"use client";

import { Button, Flex, useMantineColorScheme } from "@mantine/core";
import { IoClose } from "../../icons";
import { BtnActionProps } from "@/interface/interface";
import classes from "@/styles/btn-styles.module.css";
import { notifications } from "@mantine/notifications";

export default function BtnActions({
  description,
  labelBtn,
  title,
  close,
  color,
  icon,
  id,
}: BtnActionProps): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Flex align={"center"} gap={"sm"} style={{ height: "2.25rem" }}>
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
      <Button
        fullWidth
        variant="filled"
        leftSection={icon}
        classNames={{
          root: colorScheme === "light" ? classes.btnAdd : classes.btnAdd_dark,
        }}
        styles={({
          section: { fontSize: "1.2rem" },
        })}
        onClick={() =>
          notifications.show({
            id: id,
            color: color,
            title: title,
            message: description,
            autoClose: 1000,
            withCloseButton: true,
          })
        }
      >
        {labelBtn}
      </Button>
    </Flex>
  );
}
