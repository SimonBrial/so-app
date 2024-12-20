"use client";

import { GeneralDivider } from "@/components/GeneralDivider";
import HorizontalInputLayout from "@/components/inputs/HorizontalInputLayout";
import { LuCalendarPlus, IoClose, MdOutlineTitle } from "@/icons";
import {
  useMantineColorScheme,
  Button,
  Stack,
  Title,
  Flex,
} from "@mantine/core";
import { useCalendarStore } from "@/store/calendar-store";
import classesBtn from "@/styles/btn-styles.module.css";
import StatusSelect from "@/components/inputs/StatusSelect";
import { degreeType } from "@/types/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { eventCalendarSchema } from "@/schema/EventCalendarSchema";
import TitleSimpleLayout from "@/components/layout/TitleSimpleLayout";
import { CalendarInput } from "@/components/inputs/CalendarInput";
import TextAreaInput from "@/components/inputs/TextAreaInput";
import RememberWarning from "@/components/RememberWarning";
import { notifications } from "@mantine/notifications";
import { EventsArray } from "@/interface/interface";
import SelectInput from "@/components/inputs/SelectInput";

interface ICalendarNewEventLayoutProps {
  id: string;
  title: string;
  description: string;
  priority: degreeType;
  date: Date;
  // If the user is SUPER ADMIN, add the input to assign to an user
  userToAssign: string;
}

const initialValues: ICalendarNewEventLayoutProps = {
  id: crypto.randomUUID(),
  title: "",
  description: "",
  priority: "Muy Importante",
  date: new Date(),
  userToAssign: "",
};

export default function CreateNewEventLayout() {
  const { colorScheme } = useMantineColorScheme();
  const {
    fnShowCreateEventLayout,
    showCreateEventLayout,
    fnCreateEvent,
    // eventsArray,
  } = useCalendarStore();

  // console.log("eventsArray: ", eventsArray);

  const {
    formState: { errors },
    handleSubmit,
    register,
    control,
    reset,
  } = useForm<ICalendarNewEventLayoutProps>({
    mode: "onChange",
    resolver: zodResolver(eventCalendarSchema),
    defaultValues: initialValues,
  });

  const onSubmit = async (data: ICalendarNewEventLayoutProps) => {
    try {
      if (data !== undefined) {
        console.log(data);

        const { date, description, priority, title, id, userToAssign } = data;

        const eventToCreate: EventsArray = {
          userToAssign: userToAssign,
          description: description,
          degree: priority,
          title: title,
          date: date,
          id: id,
        };

        await fnCreateEvent(eventToCreate);
        fnShowCreateEventLayout(showCreateEventLayout);
        notifications.show({
          id: crypto.randomUUID(),
          color: "#2BDD66",
          title: "El Evento creado",
          message:
            "Se ha creado el evento y agregado al calendario satisfactoriamente 😎!",
          autoClose: 1000,
          withCloseButton: true,
        });
        // reset(initialValues);
      }
    } catch (err) {
      console.log(err);
    }
  };
  /* const p = watch("priority");
    console.log(p) */
  console.log("errors: ", errors);
  console.log("control: ", control);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ height: "100%" }}>
      <Stack
        justify="space-between"
        style={{
          padding: "0 0.5rem",
          height: "95vh",
        }}
        gap={6}
      >
        <Stack gap={6}>
          <TitleSimpleLayout title="Crear Nuevo Evento" />
          <Stack gap={6} pt={6}>
            <Flex justify={"space-between"} align={"center"}>
              <Title order={4}>Asignado por</Title>
              <Title order={4}>Mario Hurtado</Title>
            </Flex>
            <GeneralDivider orientation="horizontal" />
          </Stack>
          <HorizontalInputLayout
            errorDescription={errors.title?.message}
            register={register}
            icon={<MdOutlineTitle />}
            control={control}
            inputSize="200px"
            label="title"
            title="Titulo"
            asterisk
            max={20}
            required
            min={3}
          />
          <SelectInput
            errorDescription={errors.userToAssign?.message}
            control={control}
            inputSize="200px"
            label="userToAssign"
            asterisk
            dataArr={["Simon Briceño", "Mario Hurtado"]} // TODO: This array must be dynamic because the number of admins can vary
            searchable
            title="Asignar a"
          />
          <StatusSelect
            errorDescription={errors.priority?.message}
            register={register}
            control={control}
            inputSize="200px"
            typeArray="task"
            label="priority"
            required
            asterisk
            max={20}
            min={3}
          />
          <CalendarInput
            errorDescription={errors.date?.message}
            register={register}
            icon={<></>}
            control={control}
            inputSize="200px"
            title="Fecha"
            label="date"
            withTitle
            asterisk
            max={20}
            required
            min={3}
          />
          <Stack gap={6}>
            <GeneralDivider orientation="horizontal" />
            <TextAreaInput
              errorDescription={errors.description?.message}
              icon={<MdOutlineTitle />}
              control={control}
              inputSize="200px"
              title="Descripcion del Evento"
              label="description"
              asterisk
              required
              maxRows={20}
              minRows={10}
            />
          </Stack>
        </Stack>
        <Stack>
          {/* Falta: de ser super admin, puede asignar nuevos eventos, caso
          contrario no */}
          <RememberWarning />
          <Flex align={"center"} gap={"sm"} style={{ height: "2.25rem" }}>
            <Button
              onClick={() => {
                fnShowCreateEventLayout(showCreateEventLayout);
                reset(initialValues);
              }}
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
              leftSection={<LuCalendarPlus />}
              classNames={{
                root:
                  colorScheme === "light"
                    ? classesBtn.btnAdd
                    : classesBtn.btnAdd_dark,
              }}
              styles={{
                section: { fontSize: "1.2rem" },
              }}
              onClick={() => {
                if (Object.keys(errors).length > 0) {
                  notifications.show({
                    id: crypto.randomUUID(),
                    color: "#F0185C",
                    title: "Errores en el formulario",
                    message:
                      "Existen algunos errores en el formulario, debe solucionarlos para crear el evento.",
                    autoClose: 1000,
                    withCloseButton: true,
                  });
                }
              }}
            >
              Crear Evento
            </Button>
          </Flex>
        </Stack>
      </Stack>
    </form>
  );
}
