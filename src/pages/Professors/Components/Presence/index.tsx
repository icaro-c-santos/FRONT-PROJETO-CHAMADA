import { Box, Input, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ResponsiveAppBar from "../NavBar";
import Professors from "../Professors";
import { useQuery } from "react-query";
import axios from "axios";
import { useState, useEffect } from "react";
import { API_URL } from "../../../../env/env";
import PresenceComponente, { PresenceCreated } from "./Components/Presence";
import Subject from "../Subject";
import { Typedata } from "../..";
import CustomSelect from "./Components/Schedule";
import Calendar from "./Components/Date";
import BasicDateCalendar from "./Components/Date";
import { Button } from "@material-ui/core";
import { setDay } from "date-fns";


const fetchDataSections = async ({
    queryKey,
}: {
    queryKey: (string | undefined)[];
}): Promise<Typedata> => {
    const sectionId = queryKey[1] as string;
    const { data } = await axios.get(`${API_URL}/sections/${sectionId}`);
    return data;
};

type DataPresence = {
    date: Date,
    scheduleCode: number,
    status: number,
    studentEnrolment: number
}

const fetchCreatePresence = async (data: DataPresence) => {

  /*   await axios.post(`${API_URL}/sections/${sectionId}/`, {
        data: { data }
    }) */
}


export const Presence = () => {
    const { id } = useParams();

    const { data, status, error } = useQuery(["data", id], fetchDataSections);
    const [isCall, setIsCall] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [codeSchedule, setCodeSchedule] = useState(0);
    const [day, setday] = useState(-1);
    const [date, setDate] = useState("");
    const handleCloseModal = () => {
        setErrorMessage('');
    };
    const navigate = useNavigate();

    useEffect(() => {
        let schedule = data?.schedules.filter(item => item.code == codeSchedule)
        if (schedule != null && schedule.length > 0) {
            setIsCall(false);
            if (new Date(date).getDay() != schedule[0].day - 1) {
                alert("DATA INVALIDA PARA O DIA DE AULA SELECIONADO!");
            } else {
                setDate(new Date(date).toString());
                setIsCall(true);
            }
        }

    }, [date])

    const handleCodeSchedule = (value: number) => {
        setCodeSchedule(value);
        let schedule = data?.schedules.filter(item => item.code == value)
        setday((schedule != null && schedule?.length > 0 && schedule[0].day) || -1);
    }
    const handlerDate = (date: string) => {
        setDate(date);
    }
    const createPresence = async (data: PresenceCreated[]) => {
        console.log(data);
        const errosUsers = data.filter(item => item.status <= 0 || item.status > 3);
        if (errosUsers.length > 0) {
            alert("ERRO: ALGUNS ALUNOS NÃO FORAM COMPUTADOS!");
            return
        }
        let errorMessage = ""
        for (let presence of data) {
            try {
                await fetchCreatePresence({
                    date: new Date(date),
                    scheduleCode: codeSchedule,
                    status: presence.status,
                    studentEnrolment: presence.enrolment
                });
                setIsCall(false);
            } catch (error: any) {
                errorMessage = errorMessage.concat(`${presence.name} - ${presence.enrolment} - ERROR: ${(error?.message)}`);
            }


        }
        if (errorMessage.length == 0) {
            alert("CHAMDA FEITA COM SUCESSO!");
            navigate(`/professors/sections/${id}/`);
        }

    }





    return (
        <Box>
            {errorMessage.length > 0 && <></>}
            <ResponsiveAppBar></ResponsiveAppBar>
            {status == "success" && <>
                <Box>
                    <Box>
                        <Subject subjectLoad={data.subjectLoad} subjectName={data.subjectName}></Subject>
                    </Box>
                    <Box>
                        <Professors professors={data.professors}></Professors>
                    </Box>
                </Box>

                {!isCall && <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", marginTop: "20px", width: "max-content", margin: "auto", gap: "20px" }}>
                    <CustomSelect onChange={handleCodeSchedule} options={data.schedules}></CustomSelect>
                    {codeSchedule != 0 && <BasicDateCalendar onSelectDate={handlerDate}></BasicDateCalendar>}

                </Box>}
                <Box>
                    {isCall && <PresenceComponente data={data.students} createPresence={createPresence}></PresenceComponente>}
                </Box>

            </>}
        </Box>
    );
};
