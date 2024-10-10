import { MOCKEVENTS } from "@/data";
import { EventsArray } from "@/interface/interface";
import { areDateOnSameDay, getDateObjet } from "@/utils/calendarFunctions";
import { create } from "zustand";

interface CalendarStoreProps {
  showCreateEventLayout: boolean;
  currentYear: number;
  currentMonth: number;
  currentDay: number;
  eventsArray: EventsArray[];
  eventsToDelete: EventsArray | string;
  fnShowCreateEventLayout: (stateValue: boolean) => void;
  fnPrevMonth: () => void;
  fnNextMonth: () => void;
  fnEventListGenerator: (date: Date) => EventsArray[];
  fnIsDateInCurrentMonth: (day: number, month: number, year: number) => boolean;
  fnCreateEvent: (eventToCreate: EventsArray) => Promise<void>;
  fnDeleteEvent: (eventId: string) => Promise<void>;
  fnGetEventToDelete: (eventId: string) => EventsArray | string;
  setCurrentMonth: (currentMonth: number) => void;
  setCurrentYear: (currentMonth: number) => void;
  setSameDay: (day: number, month: number) => boolean;
  setOnCurrentMonth: (date: Date) => boolean;
}

const dt = new Date();

export const useCalendarStore = create<CalendarStoreProps>()((set, get) => {
  return {
    // Data
    eventsArray: MOCKEVENTS,
    eventsToDelete: "",
    showCreateEventLayout: false,
    sameDay: false,
    onCurrentMonth: false,
    currentYear: dt.getFullYear(),
    currentMonth: dt.getMonth(),
    currentDay: dt.getDate(),

    // ------------ Funtions to manipulate the data ------------
    setCurrentMonth: (currentMonth) => {
      set({ currentMonth });
    },
    setCurrentYear: (currentYear) => {
      set({ currentYear });
    },
    setSameDay: (day, month) => {
      const { currentYear } = get();
      const dateObj = getDateObjet(day, month, currentYear);
      const onTheDay = areDateOnSameDay(new Date(), dateObj);
      return onTheDay;
    },
    setOnCurrentMonth: (date) => {
      const { currentMonth } = get();
      const onCurrentMonth = date.getMonth() === currentMonth ? true : false;
      return onCurrentMonth;
    },
    fnShowCreateEventLayout: (stateValue: boolean) => {
      set({ showCreateEventLayout: !stateValue });
    },
    fnNextMonth: () => {
      const { setCurrentMonth, currentMonth, currentYear, setCurrentYear } =
        get();
      if (currentMonth < 11) {
        setCurrentMonth(currentMonth + 1);
      } else {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      }
    },
    fnPrevMonth: () => {
      const { setCurrentMonth, currentMonth, currentYear, setCurrentYear } =
        get();
      if (currentMonth > 0) {
        setCurrentMonth(currentMonth - 1);
      } else {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      }
    },
    fnEventListGenerator: (date) => {
      const { currentMonth, currentYear, eventsArray } = get();
      if (eventsArray.length > 0) {
        return eventsArray.flatMap((event) => {
          if (
            date.getDate() === event.date.getDate() &&
            date.getMonth() === event.date.getMonth() &&
            areDateOnSameDay(
              getDateObjet(date.getDate(), currentMonth, currentYear),
              event.date,
            )
          ) {
            return event;
          }
          return []; // Devuelve un array vacío en lugar de `undefined`
        });
      }
      return [];
    },
    fnIsDateInCurrentMonth: (day, month, year) => {
      const date = new Date(year, month, day);
      return date.getMonth() === month && date.getFullYear() === year;
    },
    fnCreateEvent: async (event) => {
      try {
        const { eventsArray } = get();
        if (event !== undefined) {
          eventsArray.push(event);
          set({ eventsArray });
        }
        set({ eventsArray });
      } catch (err) {
        console.log(err);
      }
    },
    fnDeleteEvent: async (eventId) => {
      try {
        const { eventsArray } = get();
        const newEventsArray = eventsArray.filter(
          (event) => event.id !== eventId,
        );
        set({ eventsArray: newEventsArray });
      } catch (err) {
        console.log(err);
      }
    },
    fnGetEventToDelete: (eventId) => {
      // TODO: This function must be asynchronous becasue, the app make a request to server to search wich event going to be deleted
      const { eventsArray } = get();
      const eventFound = eventsArray.find((event) => event.id === eventId);
      if (eventFound !== undefined) {
        return eventFound;
      }
      return "Evento no encontrado!";
    },
  };
});
