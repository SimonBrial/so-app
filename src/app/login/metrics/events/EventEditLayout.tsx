import { GeneralDivider } from "@/components/GeneralDivider";
import { TitleLayout } from "@/components/layout/TitleLayout";
import { degreeType } from "@/types/types";
import {
  useMantineColorScheme,
  ScrollArea,
  Select,
  Stack,
  Title,
  Flex,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import heightClasses from "@/styles/height-view.module.css";
import { ContainerInside } from "@/components/container/ContainerInside";

export default function EventEditLayout() {
  const { colorScheme } = useMantineColorScheme();
  const priorityArr: degreeType[] = [
    "Importante",
    "Muy Importante",
    "Nada Importante",
    "Normal",
    "Poco Importante",
  ];
  return (
    <Stack
      p={0}
      style={{ width: "100%" }}
      justify="space-between"
    >
      <TitleLayout title="Editar Tarea" icon="" color="" onText={false} />
      <Stack p={0} style={{ width: "100%" }} justify="space-between">
        <Stack p={0} style={{ width: "100%" }} gap={6}>
          {/* <HorizontalInputLayout
            asterisk={false}
            icon={<MdOutlineTitle />}
            inputSize="250px"
            title="Titulo"
             
          />
          <HorizontalInputLayout
            asterisk={false}
            icon={<MdOutlineTitle />}
            inputSize="250px"
            title="Estado"
             
          /> */}
          <Flex align={"center"} justify={"space-between"}>
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
              Prioridad
            </Title>
            <Select
              placeholder="Grado de Prioridad"
              data={priorityArr}
              style={{ width: "250px" }}
            />
          </Flex>
          <Flex align={"center"} justify={"space-between"}>
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
              Fecha
            </Title>
            <DateInput
              placeholder="Seleccionar Fecha"
              defaultValue={new Date()}
              style={{ width: "250px" }}
              clearable
            />
          </Flex>
          <Stack gap={6}>
            <GeneralDivider
              orientation="horizontal"
               
            />
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
              Descripcion de la Tarea
            </Title>
            <ContainerInside
              allWhite
              width="100%"
              withBorder
               
            >
              <ScrollArea
                scrollbarSize={2}
                p={0}
                className={heightClasses.metrics_event_container_edit}
              >
                {/* <TextEditor /> */} prueba
              </ScrollArea>
            </ContainerInside>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
