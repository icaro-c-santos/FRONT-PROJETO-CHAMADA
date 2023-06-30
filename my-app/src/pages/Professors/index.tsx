import { Box, Input, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import ResponsiveAppBar from "./Components/NavBar";
import Professors from "./Components/Professors";
import ListStudents from "./Components/Students";
import Subject from "./Components/Subject";
import { useQuery } from "react-query";
import { Student } from "../../Types/Students";
import axios from "axios";
import { API_URL } from "../../env/env";
import { Professor } from "../../Types/Professors";
import { useState, useEffect } from "react";
import ErrorModal from "../Compoments/ErrorModal";


export type StudentWithStatus = Student & { status: string, absences: number };
export type ScheduleDto = {
  code: number,
  start_time: string,
  end_time: string,
  day: number,
  sectionCode: number,
  roomCode: number
}
export type Typedata = {
  section: number,
  subjectName: string,
  subjectLoad: number,
  professors: Professor[],
  students: StudentWithStatus[]
  schedules: ScheduleDto[]

}

const fetchDataSection = async ({
  queryKey,
}: {
  queryKey: (string | undefined)[];
}): Promise<Typedata> => {
  const sectionId = queryKey[1] as string;
  const { data } = await axios.get(`${API_URL}/sections/${sectionId}`);
  return data;
};



export const Section = () => {
  const { id } = useParams();

  const { data, status, error } = useQuery(["data", id], fetchDataSection, { retry: 3 });
  const [isError, setIsError] = useState(false);

  const handleCloseModal = () => {
    setIsError(false);
  };

  useEffect(() => {
    if (error || status === "error") {
      setIsError(true);
    }
  }, [error, status]);


  return (
    <Box>
      {isError && < ErrorModal errorMessage={"Desculpe mais ocorreu um erro interno!"} onClose={handleCloseModal}></ErrorModal>}
      <ResponsiveAppBar></ResponsiveAppBar>
      <Box>
        <Box>
          {status === "success" && <Subject subjectLoad={data.subjectLoad} subjectName={data.subjectName}></Subject>}
        </Box>
        <Box>
          {status === "success" && <Professors professors={data.professors}></Professors>}
        </Box>
      </Box>
      {status === "success" && <ListStudents students={data.students} ></ListStudents>}
    </Box >
  );
};
