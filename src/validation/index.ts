import { email, z } from "zod";

export const userRole = z.enum(["ADMIN", "USER"]);
export type UserRole = z.infer<typeof userRole>;

export const userSchema = z.object({
    name: z.string()
            .min(2, "Name must be at least 2 characters")
            .max(50, "Maximum character allowed 50")
            .trim(),
    email: z.string()
            .email()
            .toLowerCase()
            .trim(),
    password: z.string()      
})

export const boardSchema = z.object({
    title: z.string()      
})

export const cardSchema = z.object({
    title: z.string(),
    description: z.string()      
})


