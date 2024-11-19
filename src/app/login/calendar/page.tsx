import InsideContainer from "@/components/container/InsideContainer";
import { CalendarLayout } from "./CalendarLayout";
import CalendarContainer from "./calendarBody/CalendarContainer";

export default function page(): JSX.Element {
  return (
    <CalendarLayout>
      <InsideContainer offset={0} withBackground withBorder={true}>
        <CalendarContainer />
      </InsideContainer>
    </CalendarLayout>
  );
}
