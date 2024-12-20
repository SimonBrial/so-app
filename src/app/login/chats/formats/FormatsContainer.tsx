"use client";

import { Flex, ScrollArea, Stack } from "@mantine/core";
import BtnSend from "@/components/buttons/BtnSend";
import { BtnPreview } from "@/components/buttons/BtnPreview";
import heightClasses from "@/styles/height-view.module.css";
import { ContainerInside } from "@/components/container/ContainerInside";
import { HiOutlineDocumentAdd } from "@/icons";

export const FormatsContainer = () => {
  return (
    <Stack gap={6}>
      <ContainerInside
        allWhite
        width="100%"
        withBorder
         
      >
        <ScrollArea
          scrollbarSize={2}
          p={0}
          className={heightClasses.formats_scroll_container}
        >
          {/* <TextEditor /> */}
          prueba
        </ScrollArea>
      </ContainerInside>
      <Flex gap={4} justify={"flex-end"} style={{ width: "100%" }}>
        {/* Añadirle la informacion que se va a mostrar mediante los hijos, es decir, hay que modificar el componente */}
        <BtnPreview />
        <BtnSend
          close={() => console.log("From FormatsContainer")}
          labelBtn="Crear Plantilla"
           
          id={crypto.randomUUID()}
          title="Plantilla Creada"
          description="La plantilla ha sido creada satisfactoriamente 😎!"
          iconTag={<HiOutlineDocumentAdd />}
        />
      </Flex>
    </Stack>
  );
};
