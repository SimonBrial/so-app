import InsideContainer from "@/components/container/InsideContainer";

export const CalendarContainer = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <InsideContainer offset={70} withBackground={false} withBorder={false}>
      {children}
    </InsideContainer>
  );
};
