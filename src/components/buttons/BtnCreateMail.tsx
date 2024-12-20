import {
  useMantineColorScheme,
  Button,
  Drawer,
  Stack,
  Flex,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "@/styles/btn-styles.module.css";
import BtnSend from "./BtnSend";
import { BtnCancel } from "./BtnCancel";
import { BiMailSend, HiOutlinePencil } from "@/icons";

export default function BtnCreateMail() {
  const [opened, { open, close }] = useDisclosure(false);
  const { colorScheme } = useMantineColorScheme();
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        closeOnClickOutside={false}
        position="right"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        withCloseButton={false}
        styles={{
          content: {
            backgroundColor: colorScheme === "light" ? "#F8F8F8" : "#262749",
            padding: "0",
          },
        }}
      >
        <Stack gap={8}>
          {/* <NewEmailLayout /> */}
          <Flex gap={4}>
            <BtnCancel fnCancel={close}   />
            <BtnSend
              description="El correo ha sido enviado satisfactoriamente!"
              iconTag={<BiMailSend />}
              id={crypto.randomUUID()}
              title="Correo Enviado"
              labelBtn="Enviar Correo"
              close={close}
               
            />
          </Flex>
        </Stack>
      </Drawer>
      <Button
        leftSection={<HiOutlinePencil />}
        onClick={open}
        classNames={{
          root: colorScheme === "light" ? classes.btnAdd : classes.btnAdd_dark,
        }}
      >
        Crear Nuevo Correo
      </Button>
    </>
  );
}
