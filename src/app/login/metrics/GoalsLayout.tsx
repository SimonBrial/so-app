import { GeneralDivider } from "@/components/GeneralDivider";
import { TitleLayout } from "@/components/layout/TitleLayout";
import { Badge, Container, Flex, Stack, Title } from "@mantine/core";
import React from "react";

export const GoalsLayout = () => {
  /* const periodeGoals: string[] = [
    "Mensual",
    "Trimestral",
    "Semestral",
    "Anual",
  ]; */
  // TODO: Hay que considerar añadirle un icono para indicar la descripción de cada input
  return (
    <Container style={{ width: "100%", padding: "0" }}>
      <Stack>
        <Stack>
          <TitleLayout color="" icon="" onText={false} title="Bases" />
          <Stack gap={6}>
            {/* <HorizontalInputLayout
              asterisk={false}
              icon={<HiOutlineDocumentText />}
              inputSize="200px"
              title="Total de RCB"
            />
            <PercentageInput
              asterisk={false}
              icon={<MdOutlinePercent />}
              inputSize="200px"
              title="Indice de RCB"
            />
            <PercentageInput
              asterisk={false}
              icon={<MdOutlinePercent />}
              inputSize="200px"
              title="Margen de Error"
            />
            <SelectInput
              title="Periodo"
              periodeArr={periodeGoals}
              inputSize="200px"
            /> */}
          </Stack>
        </Stack>
        <Stack>
          <TitleLayout color="" icon="" onText={false} title="Asignacion" />
          <Stack gap={6} px={10}>
            <Flex align={"center"} justify={"space-between"} px={50}>
              <Title order={4}>Por Asignar</Title>
              <Badge>20</Badge>
            </Flex>
            <Flex align={"center"} justify={"space-between"} px={50}>
              <Title order={4}>Total</Title>
              <Badge>20</Badge>
            </Flex>
            <GeneralDivider orientation="horizontal"  />
          </Stack>
          <Stack gap={6}>
            {/* <NumberHorizontalInput
              asterisk={false}
              icon={<HiOutlineUser />}
              inputSize="200px"
              title="Mario Hurtado"
            />
            <NumberHorizontalInput
              asterisk={false}
              icon={<HiOutlineUser />}
              inputSize="200px"
              title="Simon Briceño"
            />
            <NumberHorizontalInput
              asterisk={false}
              icon={<HiOutlineUser />}
              inputSize="200px"
              title="Manuel Manuel"
            /> */}
            prueba
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
