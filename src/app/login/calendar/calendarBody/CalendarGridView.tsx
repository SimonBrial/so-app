import InsideContainer from "@/components/container/InsideContainer";
import CalendarContainer from "./CalendarContainer";

export default function CalendarGridView() {
  return (
    <InsideContainer offset={0} withBackground withBorder={true}>
      <CalendarContainer />
    </InsideContainer>
  );
}
