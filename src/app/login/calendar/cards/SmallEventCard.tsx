"use client";

import React from "react";
import classes from "@/styles/calendar.module.css";
import { Divider, Flex, Title, Drawer } from "@mantine/core";
import degreeColor from "@/utils/degreeColor";
import { EventCardProps } from "@/interface/interface";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { useDisclosure } from "@mantine/hooks";
import BtnActionEventSmall from "../buttons/BtnActionEventSmall";
import ReadDescriptionEventLayout from "../layout/ReadDescriptionEventLayout";

export const SmallEventCard = ({
  smallCardData,
}: {
  smallCardData: EventCardProps;
}) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        withCloseButton={false}
        closeOnClickOutside
        position="right"
      >
        <ReadDescriptionEventLayout descriptionObj={smallCardData} close={close} />
        {/* <Text>{dayjs(date).format("DD/MM/YYYY - hh: mm A")}</Text> */}
      </Drawer>
      <Flex
        classNames={{
          root: classes.eventCard_sm,
        }}
        justify={"space-between"}
        style={{ backgroundColor: degreeColor(smallCardData.degree)[1] }}
      >
        <Flex gap={4} align={"center"} onClick={open} style={{ width: "100%" }}>
          <Divider
            orientation="vertical"
            size={"lg"}
            style={{ borderRadius: "10px" }}
            color={degreeColor(smallCardData.degree)[0]}
          />
          <Title order={6}>
            {smallCardData.title.length > 18
              ? capitalizeFirstLetter(smallCardData.title.slice(0, 18)) + "..."
              : capitalizeFirstLetter(smallCardData.title)}
          </Title>
        </Flex>
        <BtnActionEventSmall eventId={smallCardData.id} />
      </Flex>
    </>
  );
};
