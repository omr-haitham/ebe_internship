
import * as z from 'zod';

export const taskSchema =z.object({
    name: z.string().min(3, "Name must be at least 3 characters long"),
    priority : z.enum(['low','medium','high'])
})

