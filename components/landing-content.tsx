"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Davi",
    avatar: "D",
    title: "Desenvolvedor de Software",
    description: "Esse é o melhor aplicativo de IA que já usei!",
  },
  {
    name: "Antônio",
    avatar: "A",
    title: "Engenheiro de Software",
    description: "Incível! O gerador de vídeos é o meu favorito!",
  },
  {
    name: "Ana",
    avatar: "A",
    title: "UI Designer",
    description: "Não me imagino trabalhando sem estas ferramentas.",
  },
  {
    name: "Jorge",
    avatar: "J",
    title: "Estudante",
    description: "Muito bom. Me ajudou muito com códigos!",
  },
];

export const LandingContent = () => {
  return (
    <div px-10 pb-20>
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Avaliações</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">{item.description}</CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
