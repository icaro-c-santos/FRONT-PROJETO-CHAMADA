import { ISection } from "../Types/Sections";
import { SectionsMock } from "../mocks/Sections";

const getAllSectionsByTeacher = (
  idTeacher: number,
  page: number
): { data: ISection[]; pagination: { index: number; size: number } } => {
  return {
    data: SectionsMock,
    pagination: {
      index: 2,
      size: 20,
    },
  };
};

export const Client = {
  getAllSectionsByTeacher,
};
