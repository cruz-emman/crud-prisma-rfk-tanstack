import { z } from "zod"

export const formSchema = z.object({
    title: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    content: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    tags: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

export type FormInputSubmit = z.infer<typeof formSchema>