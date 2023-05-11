import { ISection } from "../Types/Sections";

export const SectionsMock: ISection[] = [
    {
      id: "172",
      name: "MAT32",
      subject: "MATEMATICA",
      teachers: ["Adriana Mello", "Cristina Bispo", "Eduardo Pereira"],
      hours: [
        { day: "quarta", final_hour: "20:20", start_hour: "18:20" },
        { day: "sexta", final_hour: "20:20", start_hour: "18:20" },
      ],
    }, {
        id: "173",
        name: "MAT35",
        subject: "BANCO DE DADOS",
        teachers: ["Adriana Mello", "Pedro Ivan"],
        hours: [
          { day: "segunda", final_hour: "20:20", start_hour: "18:20" },
          { day: "quinta", final_hour: "20:20", start_hour: "18:20" },
        ],
      }, {
        id: "174",
        name: "MAT3C",
        subject: "INTELIGÊNCIA ARTIFICIAL",
        teachers: ["Adriana Mello"],
        hours: [
          { day: "quarta", final_hour: "22:20", start_hour: "20:20" },
          { day: "sexta", final_hour: "22:20", start_hour: "20:20" },
        ],
      }, {
        id: "175",
        name: "MAT3H",
        subject: "INTRODUÇÃO A LINGUAGENS FORMAIS",
        teachers: ["Adriana Mello"],
        hours: [
          { day: "segunda", final_hour: "20:20", start_hour: "18:20" },
          { day: "terça", final_hour: "20:20", start_hour: "18:20" },
          { day: "sábado", final_hour: "20:20", start_hour: "18:20" },
        ],
      },
  ];