import { IStudent } from "./User";

export interface IHour {
  id: string;
  day: "segunda" | "terça" | "quarta" | "quinta" | "sexta" | "sábado";
  start_hour: string;
  final_hour: string;
}

export interface ISection {
  name: string;
  id: string;
  teachers: string[];
  students: IStudent[];
  subject: string;
  hours: IHour[];
}
