import { Presence, Section } from "../Pages/Presence"
import { Schedule } from "../Pages/Presence"

import * as React from "react";
import styled, { css } from "styled-components";
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from "@mui/material";
import icon_update from "../../../../../icons/icon_update.png";
import { convertDateToDayMonthYear } from "../../../utils/Date.utils";
import { Professor } from "../Pages/Presence";



const StyledTableContainer = styled(TableContainer)`
  max-width:800px;
  margin:25px auto;
  @media (max-width: 750px) {
    margin-bottom: 20px;
  }
`;

const StyledTableCell = styled(TableCell) <{ status?: string }>`
  @media (max-width: 650px) {
    padding: 20px;
  }
  
 
`;


const statusStudent = (presences: Presence[], cargaTotal: number) => {



    const ausenteSum = presences.reduce((sum, presence) => {
        if (presence.statusId === 2) {
            return sum + presence.load_presence / 60;
        }
        return sum;
    }, 0);

    const ausentePercentage = (ausenteSum / cargaTotal) * 100;
    const totalAusencias = presences.filter(presence => presence.statusId === 2).length;

    let status = '';
    if (ausentePercentage > 25) {
        status = 'reprove';
    } else if (ausentePercentage > 20) {
        status = 'alert';
    } else {
        status = 'safe';
    }

    const totalPresences = presences.filter(presence => presence.statusId === 1).length;
    const totalAbonos = presences.filter(presence => presence.statusId === 3).length;

    return {
        status: status,
        percent: ausentePercentage.toFixed(0),
        presences: totalPresences,
        abonos: totalAbonos,
        ausences: totalAusencias,
    };

}
const IconStatus = ({ status, msg }: { status: string, msg: string }) => {

    const bgColor = {
        safe: "rgb(100 240 169 / 76%)",
        reprove: "rgb(255 174 174)",
        alert: "#fcdba1"
    }
    //@ts-ignore
    return <><span style={{ backgroundColor: bgColor[status], borderRadius: "12%", padding: "4px 10px" }}>{msg} {status == "alert" && " - CUIDADO!"} {status == "reprove" && " - REPROVADO POR FALTA!"}</span></>
}




export const SectionTable = ({ data, dataPresences }: { data: Section, dataPresences: Presence[] }) => {

    const { percent, status, abonos, presences, ausences } = statusStudent(dataPresences, data.subject_load);
    return <StyledTableContainer>
        <div style={{ width: "100%", height: "px;", borderBottom: "2px solid black" }}></div>
        <h1 style={{ textAlign: "center" }}>
            Dados da Turma:
        </h1>
        <div style={{ width: "100%", borderBottom: "2px solid black" }}></div>
        <Table>
            <TableHead>
                <TableRow>
                </TableRow>
            </TableHead>
            <TableBody >
                <TableRow key={data.code}>
                    <StyledTableCell sx={{ textAlign: "center" }} >Codigo da Turma</StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }} >{data.code}</StyledTableCell>
                </TableRow>
                <TableRow key={data.subject}>
                    <StyledTableCell sx={{ textAlign: "center" }} >Codigo da Disciplina</StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }} >{data.subject}</StyledTableCell>
                </TableRow>
                <TableRow key={data.name}>
                    <StyledTableCell sx={{ textAlign: "center" }} >Disciplina</StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }} >{data.name}</StyledTableCell>
                </TableRow>
                <TableRow key={data.subject_load}>
                    <StyledTableCell sx={{ textAlign: "center" }} >Carga Horária</StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }} >{data.subject_load}</StyledTableCell>
                </TableRow>
                <TableRow key={"statusStudent"}>
                    <StyledTableCell sx={{ textAlign: "center" }} >Total de Faltas Não abonadas</StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }} >{`${ausences}`}</StyledTableCell>
                </TableRow>
                <TableRow key={"statusStudent"}>
                    <StyledTableCell sx={{ textAlign: "center" }} >Porcentagem de Faltas Não abonadas</StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }} >{<IconStatus status={status} msg={`${percent}%`}></IconStatus>}</StyledTableCell>
                </TableRow>
                <TableRow key={"statusStudent"}>
                    <StyledTableCell sx={{ textAlign: "center" }} >Total de Faltas Abonadas</StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }} >{abonos}</StyledTableCell>
                </TableRow>
                <TableRow key={"statusStudent"}>
                    <StyledTableCell sx={{ textAlign: "center" }} >Total de Presenças</StyledTableCell>
                    <StyledTableCell sx={{ textAlign: "center" }} >{presences}</StyledTableCell>
                </TableRow>
            </TableBody>
        </Table>
    </StyledTableContainer >
}


