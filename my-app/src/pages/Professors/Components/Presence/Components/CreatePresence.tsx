import { Box, Input, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import Professors from "../../Professors";
import { useQuery } from "react-query";
import axios from "axios";
import { useState, useEffect } from "react";
import { API_URL } from "../../../../../env/env";
import PresenceComponente, { PresenceCreated } from "./Presence";
import CustomSelect from "./Schedule";
import Calendar from "./Date";
import { Button } from "@material-ui/core";
import { setDay } from "date-fns";
import { Typedata } from "../../Section/Section";
import BasicDateCalendar from "./Date";
import Subject from "../../Subject";
import { clientServer } from "../../../../../Client/Client";


const fetchDataSections = async ({
    queryKey,
}: {
    queryKey: (string | undefined)[];
}): Promise<Typedata> => {
    const sectionId = queryKey[1] as string;
    const data = await clientServer.getDataSectionsWith(parseInt(sectionId));
    return data;
};

const getStatus = (value: string) => {

    if (value == "presente") return 1

    if (value == "ausente") return 2

    if (value == "abonada") return 3

}

type DataPresence = {
    date: Date,
    scheduleCode: number,
    status: number,
    studentEnrolment: number
}
export const fetchPresence = async (data: PresenceCreated[], scheduleCode: number, date: string) => {

    let erros = "";
    for (let presence of data) {
        try {
            await clientServer.createPresence({
                date: date,
                code: scheduleCode,
                status: presence.status,
                enrolment: presence.enrolment
            });
        } catch (error: any) {
            erros = erros.concat(`${presence.name} - ${presence.enrolment} - ERROR: ${(error?.message)}`);
        }

        if (erros.length > 0) {
            throw new Error(erros);
        }


    }
}

export const CreatePresence = ({ setIsOpenPresence }: { setIsOpenPresence: (value: boolean) => void }) => {
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
    console.log("renderizando demais")
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

    const createPresenceFunction = async (data: PresenceCreated[]) => {
        const errosUsers = data.filter(item => item.status <= 0 || item.status > 3);
        if (errosUsers.length > 0) {
            alert("ERRO: ALGUNS ALUNOS NÃO FORAM COMPUTADOS!");
            return
        }

        try {
            await fetchPresence(data, codeSchedule, date);
            setIsOpenPresence(false);
        } catch (error: any) {
            alert(error.message)
        }


        if (errorMessage.length == 0) {
            alert("CHAMDA FEITA COM SUCESSO!");
        }
        setIsOpenPresence(false);

    }



    return (
        <Box>
            {errorMessage.length > 0 && <></>}
            {status == "success" && <>
                <Box>
                    <Box>
                        <Subject subjectLoad={data.subjectLoad} subjectName={data.subjectName}></Subject>
                    </Box>
                </Box>

                {!isCall && <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", marginTop: "20px", width: "max-content", margin: "auto", gap: "20px" }}>
                    <CustomSelect onChange={handleCodeSchedule} options={data.schedules}></CustomSelect>
                    {codeSchedule != 0 && <BasicDateCalendar onSelectDate={handlerDate}></BasicDateCalendar>}

                </Box>}
                <Box>
                    {isCall && <PresenceComponente data={data.students} createPresence={createPresenceFunction}></PresenceComponente>}
                </Box>

            </>}
        </Box>
    );
};
