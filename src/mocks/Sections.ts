import { ISection } from "../Types/Sections";
import { IStudent } from "../Types/User";

export const SectionsMock: ISection[] = [
  {
    id: "172",
    name: "MAT32",
    subject: "MATEMATICA",
    teachers: ["Adriana Mello", "Cristina Bispo", "Eduardo Pereira"],
    hours: [
      { id: "1718", day: "quarta", final_hour: "20:20", start_hour: "18:20" },
      { id: "1718", day: "sexta", final_hour: "20:20", start_hour: "18:20" },
    ],
    students: [],
  },
  {
    id: "173",
    name: "MAT35",
    subject: "BANCO DE DADOS",
    teachers: ["Adriana Mello", "Pedro Ivan"],
    hours: [
      { id: "1118", day: "segunda", final_hour: "20:20", start_hour: "18:20" },
      { id: "1018", day: "quinta", final_hour: "20:20", start_hour: "18:20" },
    ],
    students: [],
  },
  {
    id: "174",
    name: "MAT3C",
    subject: "INTELIGÊNCIA ARTIFICIAL",
    teachers: ["Adriana Mello"],
    hours: [
      { id: "1215", day: "quarta", final_hour: "22:20", start_hour: "20:20" },
      { id: "1212", day: "sexta", final_hour: "22:20", start_hour: "20:20" },
    ],
    students: [],
  },
  {
    id: "175",
    name: "MAT3H",
    subject: "INTRODUÇÃO A LINGUAGENS FORMAIS",
    teachers: ["Adriana Mello"],
    hours: [
      { id: "1218", day: "segunda", final_hour: "20:20", start_hour: "18:20" },
      { id: "1219", day: "terça", final_hour: "20:20", start_hour: "18:20" },
      { id: "1219", day: "sábado", final_hour: "20:20", start_hour: "18:20" },
    ],
    students: [],
  },
];

export const listStudentsMock: IStudent[] = [
  {
    id: 1722,
    matricula: 12121213,
    name: "Icaro Santos",
  },
  {
    id: 1723,
    matricula: 12121215,
    name: "João Santos",
  },
  {
    id: 1724,
    matricula: 12121434,
    name: "Pedro Santos",
  },
  {
    id: 1725,
    matricula: 1212343,
    name: "Paulo Santos",
  },
];
