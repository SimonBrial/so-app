import { GeneralFilterLayout } from "@/components/layout/GeneralFilterLayout";
import { BtnFilter } from "@/components/buttons/BtnFilter";
import { BtnReportGenerate } from "@/components/buttons/BtnReportGenerate";
import { Flex, Stack, Container, Box } from "@mantine/core";
import { HiOutlineUserCircle } from "@/icons";
import BtnCreateRegister from "@/app/login/process/buttons/BtnCreateRegister";
import { CountIndicator } from "@/components/CountIndicator";
import InsideContainer from "@/components/container/InsideContainer";

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Container p={0} style={{ maxWidth: "100%", width: "100%" }}>
      <Stack gap={10} p={0}>
        <Flex
          gap={4}
          align={"center"}
          style={{ height: "2.5rem", width: "100%" }}
        >
          <CountIndicator
            count={24}
            iconSection={<HiOutlineUserCircle />}
            description="Total de usuario"
          />
          {/* <AutoCompleteInput
            fnSearchTerm={() => null}
            fnResults={() => null}
            dataFilter={[]}
            term=""
          /> */}
          <BtnFilter>
            <GeneralFilterLayout />
          </BtnFilter>
          <Box style={{ height: "100%", width: "25%" }}>
            <BtnReportGenerate />
          </Box>
          <Box>
            <BtnCreateRegister />
          </Box>
        </Flex>
        <InsideContainer
          offset={118}
          withBackground
          withBorder={false}
           
        >
          {children}
        </InsideContainer>
      </Stack>
    </Container>
  );
}
