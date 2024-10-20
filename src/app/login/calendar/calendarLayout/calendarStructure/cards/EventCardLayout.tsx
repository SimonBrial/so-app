import { EventCardProps } from "@/interface/interface";
import { SmallEventCard } from "./SmallEventCard";
import { EventCard } from "./EventCard";
import { BigEventCard } from "./BigEventCard";

export const EventCardLayout = ({
  userToAssign,
  description,
  cardSize,
  degree,
  title,
  date,
  id,
}: EventCardProps) => {
  if (cardSize === "small") {
    return (
      <SmallEventCard
        userToAssign={userToAssign}
        description={description}
        cardSize={cardSize}
        degree={degree}
        title={title}
        date={date}
        id={id}
      />
    );
  }

  if (cardSize === "medium") {
    return (
      <EventCard
        userToAssign={userToAssign}
        description={description}
        degree={degree}
        title={title}
      />
    );
  }

  if (cardSize === "big") {
    return (
      <BigEventCard
        admin
        userToAssign={userToAssign}
        description={description}
        degree={degree}
        title={title}
      />
    );
  }
};
