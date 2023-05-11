export interface IHour {
  day: "segunda" | "terça" | "quarta" | "quinta" | "sexta" | "sábado";
  start_hour: string;
  final_hour: string;
}

export interface ISection {
  name: string;
  id: string;
  teachers: string[];
  subject: string;
  hours: IHour[];
}
