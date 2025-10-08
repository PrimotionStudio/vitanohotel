import z from "zod";

// Landing Page Booking information
export const SimpleBooking = z
  .object({
    checkInDate: z
      .date()
      .min(new Date(), "Check-in date must be in the future"),
    checkOutDate: z
      .date()
      .min(new Date(), "Check-out date must be after check-in date"),
    guests: z.object({
      adults: z
        .number({ error: "Adults must be a number" })
        .positive({ error: "Adults must be a positive number" }),
      children: z
        .number({ error: "Children must be a number" })
        .min(0, { error: "Children must be a non-negative number" }),
    }),
  })
  .refine((data) => data.checkInDate > data.checkOutDate, {
    error: "Check-out date must be after check-in date",
    path: ["checkOutDate"],
  });
