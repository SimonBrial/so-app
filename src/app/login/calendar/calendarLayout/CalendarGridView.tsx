"use client";

import InsideContainer from "@/components/container/InsideContainer";
import CalendarContainer from "./calendarStructure/CalendarContainer";

export const CalendarGridView = () => {
  return (
    <InsideContainer offset={0} withBackground withBorder={true}>
      <CalendarContainer />
    </InsideContainer>
  );
};

{
  /* <Container
      p={0}
      style={{
        height: "2.5rem",
        maxWidth: "100%",
      }}
    >
      <Stack p={2} gap={6}>
        <Flex
          gap={6}
          align={"center"}
          style={{ height: "2.5rem", width: "100%" }}
        >
          <CountIndicator
            count={eventsArray.length}
            description="Total de eventos para el mes"
            iconSection={<HiOutlineCalendar />}
          />
          <AutoCompleteInput
            dataFilter={[]}
            fnResults={() => {}}
            fnSearchTerm={() => {}}
            term=""
          />
          <BtnFilter>
            <CalendarFilterLayout />
          </BtnFilter>
          <Box style={{ height: "100%", width: "25%" }}>
            <BtnReportGenerate />
          </Box>
          <Box>
            <BtnAdd
              // title="Evento Creado"

              // color="green"
              // description="El evento ha sido añadido al calendario 📆!"
              // labelBtn="Crear Evento"
              iconTag="add-event"
              label="Nuevo Evento"
              fnShow={() => fnShowCreateEventLayout(showCreateEventLayout)}
              showDrawer={showCreateEventLayout}
            >
              <CalendarNewEventLayout />
            </BtnAdd>
          </Box>
          <ViewCalendarSelection />
        </Flex>
        <MonthNavigationBar />
      </Stack> 
      
    </Container>*/
}
