import { z } from 'zod';

export const CreateShortLink = z.preprocess(
  (payload) => Object.fromEntries(Object.entries(payload as object).filter((obj) => obj[1] !== '')),
  z.object({
    name: z.string().optional(),
    target: z.string().url(),
    path: z.string().min(3),
    start: z
      .preprocess((date) => new Date(date as string).toISOString(), z.string().datetime())
      .optional(),
    end: z
      .preprocess((date) => new Date(date as string).toISOString(), z.string().datetime())
      .optional(),
    describe: z.string().optional(),
    password: z.string().optional()
  })
);
