"use client";

import InsideContainer from "@/components/container/InsideContainer";
import { Stack, useMantineColorScheme } from "@mantine/core";

export const SuperAdminLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <InsideContainer withBorder={false} withBackground offset={130}>
      {/* <Box
        h={40}
        style={{
          position: "absolute",
          marginTop: "-3.8rem",
          marginRight: "0rem",
        }}
      >
        <BtnAdd
          fnShow={setAddAdminlayout}
          showDrawer={showAddAdminlayout}
          iconTag="add-user"
          label={"Nuevo Admin"}
        >
          prueba
          <Button onClick={() => setAddAdminlayout(false)}>close</Button>
        </BtnAdd>
      </Box> */}
      <Stack
        gap={16}
        styles={(theme) => ({
          root: {
            border:
              colorScheme === "light"
                ? `1px solid ${theme.colors.lightTheme[2]}`
                : "none",
            borderRadius: "6px",
            padding: "1rem",
            height: "100%",
            width: "100%",
          },
        })}
      >
        {children}
      </Stack>
    </InsideContainer>
  );
};
