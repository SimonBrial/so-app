"use client";

import HorizontalInputLayout from "@/components/inputs/HorizontalInputLayout";
import {
  MdOutlineAlternateEmail,
  IoLogoInstagram,
  IoLogoFacebook,
  HiOutlineUser,
  HiOutlineSave,
  AiOutlineCar,
  FaDollarSign,
  IoClose,
} from "@/icons";
import PhoneInputLayout from "@/components/inputs/PhoneInputLayout";
import {
  useMantineColorScheme,
  ScrollArea,
  Button,
  Stack,
  Title,
  Flex,
  Box,
} from "@mantine/core";
import { FieldError, FieldErrorsImpl, Merge, useForm } from "react-hook-form";
import { ClientRegisterProcessProps } from "@/interface/interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { processCardSchema } from "@/schema/ProcessCardSchema";
import { NumberHorizontalInput } from "@/components/inputs/NumberHorizontalInput";
import classes from "@/styles/btn-styles.module.css";
import { notifications } from "@mantine/notifications";
import StateSelect from "@/components/inputs/StateSelect";
import SocialMediaInput from "@/components/inputs/SocialMediaInput";
import TitleSimpleLayout from "@/components/layout/TitleSimpleLayout";
import heightClass from "@/styles/height-view.module.css";
import StatusBadge from "@/components/badge/StatusBadge";
import { useProcessStore } from "@/store/process-store";

// TODO: The admin only could edit the tag's value, any input of the process.
// TODO: The createdAt and updatedAt shouldn't be editable, and mus be added to the interface.

const initialValues: ClientRegisterProcessProps = {
  id: crypto.randomUUID(),
  typeStatus: "Espera",
  birthday: new Date(),
  columnId: "Espera",
  date: new Date(),
  clientName: "Simon Briceño",
  phonePost: "5986342",
  firstName: "",
  instagram: "",
  lastName: "",
  phonePre: "0412",
  facebook: "",
  vehicle: "",
  carID: "",
  state: "",
  mail: "",
  tag: {
    CValue: 0,
    LCapacity: 0,
    NSeats: 0,
    services: [false, false, false, false],
  },
};

function getErrorMessage(
  error:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined,
): string | undefined {
  if (typeof error === "string") {
    return error;
  }
  if (error && typeof error.message === "string") {
    return error.message;
  }
  return undefined;
}

export default function UpdateCardLayout({
  onShow,
}: {
  onShow: (show: boolean) => void;
}) {
  const { colorScheme } = useMantineColorScheme();
  const { setShowCreateClient } = useProcessStore();
  const {
    formState: { errors },
    handleSubmit,
    register,
    control,
    reset,
    watch,
  } = useForm<ClientRegisterProcessProps>({
    mode: "onChange",
    resolver: zodResolver(processCardSchema),
    defaultValues: initialValues,
  });

  const fnSubmit = async (data: ClientRegisterProcessProps) => {
    try {
      console.log(data);
      if (Object.keys(errors).length === 0) {
        console.log(data);
        reset(initialValues);
        setShowCreateClient(false);
        notifications.show({
          id: crypto.randomUUID(),
          color: "#2BDD66",
          title: "Registro Creado",
          message:
            "El Registro ha sido creado y agregado a la Base de Datos satisfactoriamente 😎!",
          autoClose: 1000,
          withCloseButton: true,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log(errors);

  const phonePost = watch("phonePost");
  const phonePre = watch("phonePre");
  return (
    <form
      onSubmit={handleSubmit(fnSubmit)}
      style={{ height: "100%", cursor: "default" }}
    >
      <Stack style={{ height: "100%", maxHeight: "100%" }} gap={8}>
        <TitleSimpleLayout title="Editar RCV" />
        <Stack
          // align="center"
          justify="space-between"
          style={{
            height: "97%",
            padding: "0.5rem",
          }}
        >
          <ScrollArea
            maw={"100%"}
            scrollbarSize={2}
            offsetScrollbars
            className={heightClass.processLayout}
          >
            {/* <UserPhoto userIconSize="6rem" /> */}
            <Stack gap={6} w={"100%"} style={{ height: "100%" }}>
              <HorizontalInputLayout
                // errorDescription={errors.firstName?.message}
                errorDescription={getErrorMessage(errors.firstName?.message)}
                icon={<HiOutlineUser />}
                register={register}
                label="firstName"
                control={control}
                inputSize="235px"
                title="Nombre"
                asterisk
                max={30}
                required
                min={3}
              />
              <HorizontalInputLayout
                errorDescription={getErrorMessage(errors.lastName?.message)}
                icon={<HiOutlineUser />}
                register={register}
                label="lastName"
                control={control}
                inputSize="235px"
                title="Apellido"
                asterisk
                max={30}
                required
                min={3}
              />
              {/* <SelectInput
              errorDescription={errors.columnId?.message}
              searchable={false}
              control={control}
              inputSize="235px"
              label="columnId"
              dataArr={[
                "Generacion",
                "Entregado",
                "Rechazado",
                "Espera",
                "Pagado",
              ]}
              title="Status"
              asterisk
            /> */}
              <Flex justify={"space-between"} align={"center"}>
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
                  Status
                </Title>
                <Box>
                  <StatusBadge title="Espera" />
                </Box>
              </Flex>
              <HorizontalInputLayout
                errorDescription={getErrorMessage(errors.vehicle?.message)}
                asterisk
                icon={<AiOutlineCar />}
                inputSize="235px"
                label="vehicle"
                max={20}
                min={2}
                register={register}
                required
                title="Vehiculo"
                control={control}
              />
              <HorizontalInputLayout
                errorDescription={getErrorMessage(errors.carID?.message)}
                asterisk
                icon={<AiOutlineCar />}
                inputSize="235px"
                label="carID"
                max={20}
                min={2}
                register={register}
                required
                title="Placa"
                control={control}
              />
              <StateSelect
                errorDescription={getErrorMessage(errors.state?.message)}
                asterisk
                inputSize="235px"
                label="state"
                max={20}
                min={2}
                register={register}
                required
                control={control}
              />
              <HorizontalInputLayout
                errorDescription={getErrorMessage(errors.mail?.message)}
                asterisk
                icon={<MdOutlineAlternateEmail />}
                inputSize="235px"
                label="mail"
                max={20}
                min={2}
                register={register}
                required
                title="Correo"
                control={control}
              />
              <PhoneInputLayout
                errorCodePhone={getErrorMessage(errors.phonePre?.message)}
                errorDescription={getErrorMessage(errors.phonePost?.message)}
                asterisk
                inputSize="235px"
                label=""
                max={20}
                min={2}
                register={register}
                required
                control={control}
              />
              <TitleSimpleLayout title="Redes Sociales" />
              <SocialMediaInput
                errorDescription={getErrorMessage(errors.facebook?.message)}
                asterisk={false}
                socialMediaIcon={<IoLogoFacebook />}
                socialMediaName="Facebook"
                register={register}
                inputSize="235px"
                control={control}
                label="facebook"
                max={20}
                required
                min={2}
              />
              <Flex justify={"space-between"} align={"center"}>
                <Title
                  order={5}
                  styles={(theme) => ({
                    root: {
                      color:
                        colorScheme === "light"
                          ? `${theme.colors.lightTheme[3]}`
                          : `${theme.colors.darkTheme[2]}`,
                    },
                  })}
                >
                  Whatsapp
                </Title>
                {phonePre || phonePost ? (
                  <Flex
                    gap={4}
                    align={"center"}
                    justify={"end"}
                    styles={(theme) => ({
                      root: {
                        color:
                          colorScheme === "light"
                            ? `${theme.colors.lightTheme[3]}`
                            : `${theme.colors.darkTheme[2]}`,
                        width: "55%",
                        textAlign: "center",
                        marginRight: "2rem",
                      },
                    })}
                  >
                    <Title order={5}>{phonePre}</Title> -{" "}
                    <Title order={5}>{phonePost}</Title>
                  </Flex>
                ) : (
                  <Title order={5}>Indicar Telefono</Title>
                )}
              </Flex>
              <SocialMediaInput
                errorDescription={getErrorMessage(errors.instagram?.message)}
                asterisk={false}
                socialMediaIcon={<IoLogoInstagram />}
                socialMediaName="Instagram"
                register={register}
                inputSize="235px"
                control={control}
                label="instagram"
                max={20}
                required
                min={2}
              />
              <TitleSimpleLayout title="Tarifa de la RCV" />
              <NumberHorizontalInput
                errorDescription={getErrorMessage(errors.tag?.message)}
                icon={<FaDollarSign />}
                control={control}
                inputSize="235px"
                title="Tarifa"
                label="tag"
                asterisk
              />
            </Stack>
          </ScrollArea>
          <Flex align={"center"} gap={"sm"} style={{ width: "100%" }}>
            <Button
              onClick={() => onShow(false)}
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
              type="submit"
              fullWidth
              variant="filled"
              leftSection={<HiOutlineSave />}
              classNames={{
                root:
                  colorScheme === "light"
                    ? classes.btnAdd
                    : classes.btnAdd_dark,
              }}
              styles={{
                section: { fontSize: "1.2rem" },
              }}
            >
              Guardar
            </Button>
          </Flex>
        </Stack>
      </Stack>
    </form>
  );
}
