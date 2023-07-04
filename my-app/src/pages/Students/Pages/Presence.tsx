import { useParams } from "react-router-dom";
import { useState } from "react"
import Box from "@mui/material/Box";
import { useQuery } from "react-query";
import { clientServer } from "../../../Client/Client";
import ListPresence from "../Components/ListPresence";
import { Subject } from "../Components/Subject";
import { NavBar } from "../Components/Navbar";
import { Professors } from "../Components/Professors";
import { SectionTable } from "../Components/Section";
import { NavBarStudents } from "../Components/NavbarStudent";


export type Presence = {
    status: string;
    statusId: number;
    enrolment: number;
    cpf: string;
    name: string;
    email: string;
    phone: number;
    date: string;
    sectionCode: number;
    load_presence: number;
};

export type Professor = {
    code: number,
    subject: number,
    professorCode: number,
    sectionCode: number,
    cpf: string,
    name: string,
    email: string,
    phone: number
};


export type Room = {
    code: number;
    paf: string;
    number: number;
}
export type Schedule = {
    code: number;
    start_time: string;
    end_time: string;
    day: number;
    sectionCode: number;
    roomCode: number;
    room: Room
}


export type Section = {
    code: number;
    subject: number;
    name: string;
    subject_load: number;
}
type DataApi = {
    presences: Presence[];
    professors: Professor[];
    schedules: Schedule[];
    section: Section
};


const fetchDataSection = async ({
    queryKey,
}: {
    queryKey: (string | undefined)[];
}): Promise<DataApi> => {
    const sectionId = queryKey[1] as string;
    const data = await clientServer.getDataSectionsOfStudentWith(parseInt(sectionId)) as unknown;
    return data as DataApi;
};



export const PagePresenceStudent = () => {
    const { id } = useParams();
    //@ts-ignore
    const { data, status, error } = useQuery(["data", id], fetchDataSection, { retry: 3 });

    return (
        <>
            <NavBarStudents/>
            {status === "success" && <>

                <Box>
                    <Box>
                        <SectionTable data={data.section} dataPresences={data.presences} />
                        <Subject data={data.schedules} />
                        <Professors professors={data.professors} />
                    </Box>
                    {
                        status === "success" && <ListPresence presence={data.presences} />
                    }
                </Box>
            </>}
        </>
    );
};



