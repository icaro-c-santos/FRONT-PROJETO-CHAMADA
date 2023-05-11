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

const getSectionById = (idSection: string): ISection => {
  return SectionsMock[1];
};

type TUserStatus = {
  idUser: string;
  status: string;
};

type TPostCallSectionBody = {
  sectionID: string;
  userStatus: TUserStatus[];
  hourId: string;
  date: Date;
};

const postCallSection = (dataCall: TPostCallSectionBody) => {};

export const Client = {
  getAllSectionsByTeacher,
  getSectionById,
  postCallSection,
};
