"use client";

import { useDisclosure } from "@mantine/hooks";
import { AlarmFolderArray, AlarmObj } from "@/interface/interface";
import {
  Container,
  Collapse,
  Divider,
  Center,
  Title,
  Stack,
  Badge,
  Flex,
  Text,
  Grid,
} from "@mantine/core";
import { PiFolderSimpleDashed } from "@/icons";
import BtnFolderActions from "../buttons/BtnFolderActions";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import ReadAlarmCardLayout from "./ReadAlarmCardLayout";

export default function ReadAlarmFolder({
  folderObj,
}: {
  folderObj: AlarmFolderArray;
}): JSX.Element {
  const [opened, { toggle }] = useDisclosure(false);

  function cardItems(): JSX.Element[] {
    if (folderObj.alarmsArray.length > 0) {
      return folderObj.alarmsArray.map((item: AlarmObj) => {
        return (
          <Grid.Col key={item.id} span={4}>
            <ReadAlarmCardLayout themeColor={folderObj.themeColor} alarmObj={item} />
          </Grid.Col>
        );
      });
    }

    return [];
  }
  return (
    <Container
      p={12}
      w={"100%"}
      style={{
        border: `2px solid ${folderObj.themeColor}`,
        borderRadius: "6px",
        backgroundColor: `${folderObj.themeColor}33`,
        maxWidth: "100%",
      }}
    >
      <Stack pb={5} style={{ width: "100%" }}>
        <Flex
          align={"center"}
          justify={"space-between"}
          styles={{ root: { color: folderObj.themeColor } }}
        >
          <Stack gap={1} w={"60%"} onClick={toggle}>
            <Flex
              align={"center"}
              gap={5}
              style={{
                cursor: `${cardItems().length > 3 ? "pointer" : "default"}`,
              }}
            >
              <Text size="1.6rem">{folderObj.icon}</Text>
              <Title order={3}>{capitalizeFirstLetter(folderObj.title)}</Title>
              <Badge
                radius="sm"
                style={{ marginLeft: "0.5rem" }}
                styles={{
                  root: { backgroundColor: `${folderObj.themeColor}` },
                  label: { fontSize: "0.9rem", color: "#FFF" },
                }}
              >
                {folderObj.alarmsArray.length > 0
                  ? folderObj.alarmsArray.length
                  : 0}
              </Badge>
            </Flex>
            <Divider size="md" color={folderObj.themeColor} />
          </Stack>
          {/* <Tooltip
            label="Editar"
            withArrow
            offset={5}
            position="top"
            color="#FD0E78"
            styles={(theme) => ({
              tooltip: { backgroundColor: `${"#FD0E78"}` },
            })}
            transitionProps={{ transition: "scale", duration: 300 }}
          >
          </Tooltip>
          <BtnEdit
             
            id={crypto.randomUUID()}
            buttonStyles="unstyled"
            description="Cambios en los datos de la carpeta fueron registrados satisfactoriamente 😎!"
            title="Carpeta Editada"
            labelBtn="Guardar"
            color="#2BDD66"
            icon
          >
            <CreateFolderLayout title="Editar Carpeta" />
          </BtnEdit> */}
          <BtnFolderActions
            idFolder={folderObj.idFolder}
            theme={folderObj.themeColor}
          />
        </Flex>
        <Text
          size="sm"
          mah={10}
          styles={{
            root: {
              color: `${folderObj.themeColor}`,
              marginTop: "-0.8rem",
              cursor: "default",
            },
          }}
        >
          {folderObj.description.length > 100
            ? folderObj.description.slice(0, 100).trim().concat("...")
            : folderObj.description}
        </Text>
        {cardItems().length === 0 ? (
          <Container>
            <Flex
              gap={8}
              align={"center"}
              styles={{ root: { color: `${folderObj.themeColor}` } }}
            >
              <Center>
                <PiFolderSimpleDashed style={{ fontSize: "2.5rem" }} />
              </Center>
              <Text size="2rem">Carpeta vacía</Text>
            </Flex>
          </Container>
        ) : (
          <>
            {cardItems().length > 3 ? (
              <>
                <Grid gutter="xs" pt={5} style={{ marginBottom: "-0.3rem" }}>
                  {cardItems().slice(0, 3)}
                </Grid>
                <Collapse in={opened}>
                  <Grid gutter="xs">{cardItems().slice(3)}</Grid>
                </Collapse>
              </>
            ) : (
              <Grid gutter="xs" pt={5}>
                {cardItems()}
              </Grid>
            )}
          </>
        )}
      </Stack>
    </Container>
  );
}
