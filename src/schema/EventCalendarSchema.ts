import z from "zod";

const PriorityArray = [
  "Muy Importante",
  "Importante",
  "Normal",
  "Poco Importante",
  "Muy Poco Importante",
] as const;

const dt = new Date();
/* ----------------- Date Schema validation ----------------- */
const newEventDateSchema = z
  .date({ required_error: "La fecha no puede estar vacia" })
  .min(new Date(dt.getFullYear(), dt.getMonth(), dt.getDate()), {
    message: "La fecha no puede ser anterior a la actual",
  })
  .nullable()
  .refine((date) => date !== null, {
    message: "La fecha no puede estar vacía",
    path: ["date"],
  });
const editEventDateSchema = z
  .date({ required_error: "La fecha no puede estar vacia" })
  .refine((date) => date !== null, {
    message: "La fecha no puede estar vacía",
    path: ["date"],
  });
/* ----------------- Date Schema validation ----------------- */

const prioritySchema = z.enum(PriorityArray, {
  errorMap: () => ({
    message: "Por favor seleccionar un grado de prioridad.",
  }),
});
const userToAssignSchema = z
  .string()
  .min(1, { message: "Debe asignar a un usuario" }).max(25, {
    message:
      "Debe indicar un usuario de la lista por favor!",
  });

export const eventCalendarSchema = z.object({
  title: z
    .string()
    .min(1, { message: "El evento no puede estar vacio" })
    .max(50, { message: "El evento no puede superar los 50 caracteres" }),
  description: z
    .string()
    .min(1, { message: "La descripción no puede estar vacia" })
    .max(250, { message: "El evento no pude superar los 250 caracteres" }),
  date: newEventDateSchema,
  priority: prioritySchema,
  userToAssign: userToAssignSchema,
});

export const editEventCalendarSchema = z.object({
  title: z
    .string()
    .min(1, { message: "El evento no puede estar vacio" })
    .max(50, { message: "El evento no puede superar los 50 caracteres" }),
  description: z
    .string()
    .min(1, { message: "La descripción no puede estar vacia" })
    .max(250, { message: "El evento no pude superar los 250 caracteres" }),
  date: editEventDateSchema,
  degree: prioritySchema,
  userToAssign: userToAssignSchema,
});
