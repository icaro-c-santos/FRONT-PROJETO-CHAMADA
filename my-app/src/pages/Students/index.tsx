import { useQuery } from "react-query";
import ListSections from "./Components/ListSections";
import * as React from "react";
import { clientServer } from "../../Client/Client";
import { NavBarStudents } from "./Components/NavbarStudent";

export type TypePresenceStudent = {

}

export type TypeDataSection = {
    code: number,
    subject: number,
    name: string,
    subject_load: number
}

const fetchDataSections = async (): Promise<TypeDataSection[]> => {
    const data = await clientServer.getDataSectionsOfStudent() as unknown;
    
    return data as TypeDataSection[];
};



export const PageSudents = () => {
    const { data, status, error } = useQuery(["data"], fetchDataSections, { retry: 3 });
    return <>
        <NavBarStudents />
        {status === "success" && <ListSections sections={data} />}
    </>
}