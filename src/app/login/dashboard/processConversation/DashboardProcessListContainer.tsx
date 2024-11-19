"use client";

import { Stack } from "@mantine/core";
import { ContainerInside } from "@/components/container/ContainerInside";
import { SocialMediaContainer } from "../rating/SocialMediaContainer";
import { RatingContainer } from "../rating/RatingContainer";
import ProcessContainer from "./ProcessContainer";

export const DashboardProcessListContainer = () => {
  return (
    <ContainerInside allWhite withBorder width="100%"  >
      <Stack gap={2}>
        <ProcessContainer   />
        <SocialMediaContainer   />
        <RatingContainer   />
      </Stack>
    </ContainerInside>
  );
};
