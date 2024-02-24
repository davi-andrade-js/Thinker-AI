import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, { message: "Please enter a image prompt." }),
  amount: z.string().min(1),
  resolution: z.string().min(1),
});

export const amountOptions = [
  {
    value: "1",
    label: "1 Imagem",
  },
  {
    value: "2",
    label: "2 Imagens",
  },
  {
    value: "3",
    label: "3 Imagens",
  },
  {
    value: "4",
    label: "4 Imagens",
  },
  {
    value: "5",
    label: "5 Imagens",
  },
];

export const resolutionOptions = [
  {
    value: "256x256",
    label: "256x256",
  },
  {
    value: "512x512",
    label: "512x512",
  },
  {
    value: "1024x1024",
    label: "1024x1024",
  },
];
