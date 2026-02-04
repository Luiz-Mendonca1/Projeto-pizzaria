import { z } from "zod";

export const createCategorySchema = z.object({
  body: z.object({
    name: z
      .string({ message: "Nome da categoria precisa ser texto" })
      .min(3, { message: "Nome da categoria precisa ter 3 caracteres" }),
  }),
});
