"use client";

import { FaAt, IoClose, IoIosSend, MdTitle } from "@/icons";
import {
  useMantineColorScheme,
  ScrollArea,
  Button,
  Modal,
  Stack,
  Title,
  Flex,
  Text,
} from "@mantine/core";
import classes from "@/styles/btn-styles.module.css";
import { ContainerInside } from "@/components/container/ContainerInside";
import HorizontalInputLayout from "@/components/inputs/HorizontalInputLayout";
import { GeneralDivider } from "@/components/GeneralDivider";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { MailDataProps } from "@/interface/interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { mailSchema } from "@/schema/MailSchema";
import TextEditor from "@/components/TextEditor";
import heightClasses from "@/styles/height-view.module.css";
import { useRouter } from "next/navigation";
import { notifications } from "@mantine/notifications";
import { useDisclosure } from "@mantine/hooks";
import { useMailStore } from "@/store/mail-store";
import ArchiveContainer from "../create/ArchiveContainer";

const initialValues: MailDataProps = {
  date: new Date(),
  description: "<p></p>",
  idMail: crypto.randomUUID(),
  mail: [""],
  mailArchive: false,
  mailFavorite: false,
  mailRead: true,
  title: "",
  userName: "",
  photo: "",
  docs: [],
};

export default function CreateMailLayout() {
  // const [mails, setMails] = useState<string | string[]>([]);
  const [docs, setDocs] = useState<File[]>([]);
  const { colorScheme } = useMantineColorScheme();
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter();
  const { fnSaveMailSent } = useMailStore();

  const {
    formState: { errors },
    handleSubmit,
    register,
    control,
    reset,
  } = useForm<MailDataProps>({
    mode: "onChange",
    resolver: zodResolver(mailSchema),
    defaultValues: initialValues,
  });

  /* const handleMailsChange = (newMails: string | string[]) => {
    setMails(newMails);
  }; */

  function getStringSizeInKBOrMB(inputString: string) {
    const byteSize = inputString.length * 2; // Cada carácter ocupa 2 bytes en UTF-16
    return byteSize / (1024 * 1024);
  }

  const fnSubmit = async (data: MailDataProps) => {
    try {
      if (data !== undefined && Object.keys(errors).length === 0) {
        console.log(getStringSizeInKBOrMB(data.description));
        const dataComplete: MailDataProps = {
          date: new Date(),
          description: data.description,
          idMail: crypto.randomUUID(),
          mail:
            typeof data.mail === "string" ? data.mail.split(",") : data.mail,
          mailArchive: false,
          mailFavorite: false,
          mailRead: false,
          title: data.title,
          userName: initialValues.userName,
          docs: docs,
        };

        const description = getStringSizeInKBOrMB(data.description);
        const totalSize = docs.reduce((acc, current) => acc + current.size, 0);
        const archiveSize = totalSize / 1024 / 1024;

        if (description + archiveSize > 25.0) {
          open();
        }

        if (description + archiveSize <= 25.0) {
          console.log(dataComplete);
          await fnSaveMailSent(dataComplete);
          notifications.show({
            id: crypto.randomUUID(),
            color: "#2BDD66",
            title: "Correo Enviado 📨",
            message: "Correo enviado satisfactoriamente!",
            autoClose: 1000,
            withCloseButton: true,
          });
          reset(initialValues);
          router.push("/login/mails");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        centered
        styles={{
          root: {
            backgroundColor: colorScheme === "light" ? "#F8F8F8" : "#262749",
          },
        }}
      >
        <Stack
          styles={({
            root: {
              padding: "0.5rem",
            },
          })}
        >
          <Title order={3} style={{ textAlign: "center" }}>
            Capacidad excedida
          </Title>
          <GeneralDivider orientation="horizontal" />
          <Text
            styles={({
              root: {
                border: "1px solid #696969",
                padding: "0.5rem",
                borderRadius: "6px",
              },
            })}
          >
            El tamaño del correo no debe ser mayor a 25 MB y debe contener todos
            y cada uno de los inputs requeridos. Por favor corrija los datos y
            elimine algunos archivos para poder enviar el correo.
          </Text>
          <Button
            onClick={close}
            styles={(theme) => ({
              root: {
                backgroundColor:
                  colorScheme === "light"
                    ? theme.colors.lightTheme[6]
                    : theme.colors.darkTheme[1],
              },
            })}
          >
            Cerrar
          </Button>
        </Stack>
      </Modal>
      <ContainerInside width="100%" allWhite={false} withBorder>
        <form onSubmit={handleSubmit(fnSubmit)}>
          <Stack gap={"sm"} align="end">
            <HorizontalInputLayout
              asterisk
              control={control}
              errorDescription={errors.title?.message}
              icon={<MdTitle />}
              inputSize="82%"
              label="title"
              max={20}
              min={3}
              register={register}
              required
              title="Asunto"
            />
            <GeneralDivider orientation="horizontal" />
            <HorizontalInputLayout
              asterisk
              control={control}
              errorDescription={errors.mail?.message}
              icon={<FaAt />}
              inputSize="82%"
              label="mail"
              max={20}
              min={3}
              register={register}
              required
              title="Destinatarios"
            />
            <GeneralDivider orientation="horizontal" />
            <Flex style={{ width: "100%", position: "relative" }} gap={8}>
              <Stack align={"space-between"} style={{ width: "100%" }}>
                <Flex
                  align={"end"}
                  gap={10}
                  style={{
                    width: "100%",
                  }}
                >
                  <Title
                    order={4}
                    styles={(theme) => ({
                      root: {
                        color:
                          colorScheme === "light"
                            ? theme.colors.lightTheme[3]
                            : theme.colors.darkTheme[2],
                      },
                    })}
                  >
                    Cuerpo del Correo
                  </Title>
                  <Text size="xs" style={{ color: "red" }}>
                    {errors.description?.message}
                  </Text>
                </Flex>
                <Flex gap={8} style={{ height: "100%" }}>
                  <ScrollArea
                    scrollbarSize={2}
                    className={heightClasses.createTemplate_scroll_container}
                    // h={450}
                    styles={(theme) => ({
                      root: {
                        width: "100%",
                        border:
                          colorScheme === "light"
                            ? `1px solid ${theme.colors.lightTheme[2]}`
                            : `1px solid ${theme.colors.darkTheme[6]}`,
                        backgroundColor:
                          colorScheme === "light"
                            ? "#fff"
                            : `${theme.colors.darkTheme[7]}`,
                        borderRadius: "6px",
                        padding: "0.2rem",
                      },
                    })}
                  >
                    <Controller
                      name={"description"}
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <TextEditor
                          errorDescription={errors.description?.message}
                          onEditorContent={onChange}
                          description={value}
                        />
                      )}
                    />
                  </ScrollArea>
                  <ArchiveContainer arr={docs} setDocs={setDocs} />
                </Flex>
              </Stack>
            </Flex>
            {/* <Text size="sm">{errors.description?.message}</Text> */}
            <Flex
              gap={8}
              style={{ width: "40%", marginRight: "0" }}
              justify={"end"}
            >
              <Button
                fullWidth
                color="red"
                onClick={() => {
                  reset(initialValues);
                  router.push("/login/mails");
                }}
                leftSection={<IoClose />}
                styles={({
                  section: {
                    fontSize: "1.2rem",
                  },
                })}
                className={
                  colorScheme === "light"
                    ? classes.btnCancel
                    : classes.btnCancel_dark
                }
              >
                Cancelar
              </Button>
              <Button
                leftSection={<IoIosSend />}
                fullWidth
                styles={({
                  section: {
                    fontSize: "1.2rem",
                  },
                })}
                className={
                  colorScheme === "light" ? classes.btnAdd : classes.btnAdd_dark
                }
                type="submit"
              >
                Enviar Correo
              </Button>
            </Flex>
          </Stack>
        </form>
      </ContainerInside>
    </>
  );
}
