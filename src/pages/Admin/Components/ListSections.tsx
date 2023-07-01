

import * as React from "react";
import styled, { css } from "styled-components";
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from "@mui/material";
import axios from "axios";
import { API_URL } from "../../../env/env";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ConfirmModal from "./ConfirmModal";
import imgs from "./../../../icons/icon_lixeira.png"
import { useNavigate } from "react-router-dom";


export type TypeDataSection = {
    code: number,
    subject: number,
    name: string,
    subject_load: number
}



const StyledTableContainer = styled(TableContainer)`
  margin-bottom: 20px;
  transition: "0.5s"
  @media (max-width:750px) {
    margin-bottom: 20px;
  }
`;

const StyledTableCell = styled(TableCell) <{ status?: string }>`

@media (max-width: 650px) {
    padding: 20px;
   
  }

`;



const deleteSection = async (codeSection: number) => {
    try {
        await axios.delete(`${API_URL}/sections/${codeSection}`);
        alert("TURMA EXCLUÍDA COM SUCESSO!");
    } catch (error: any) {
        console.log(error.message);
        alert("NÃO FOI POSSÍVEL EXCLUIR A TURMA!");
    }

}

export type PropsListSections = {
    sections: TypeDataSection[],
}

export const ListSections = ({ sections }: PropsListSections) => {
    const [open, setOpen] = React.useState(false);
    const [deletingSection, setDeletingSection] = React.useState<TypeDataSection | null>(null);
    const navigate = useNavigate();
    const handlerSectionDelete = (section: TypeDataSection) => {
        setDeletingSection(section);
        setOpen(true);
    };


    const hanleNavigate = (id: number) => {
        navigate(`/admin/sections/${id}`)
    }

    const handleConfirmDelete = async () => {
        if (deletingSection) {
            await deleteSection(deletingSection.code);
            setDeletingSection(null);
            setOpen(false);
        }
    };

    return (
        <>
            {open && <ConfirmModal openModal={open} setOpenModal={setOpen} callback={handleConfirmDelete} />}
            <StyledTableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Turma</StyledTableCell>
                            <StyledTableCell>Disciplina</StyledTableCell>
                            <StyledTableCell>Carga Horaria</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{
                        cursor: "pointer",
                        "& tr:hover": {
                            backgroundColor: "rgb(125 118 118 / 87%)",
                            transition: "0.5s",
                        },
                    }} >
                        {sections.map((section) => (
                            <TableRow key={section.code}>
                                <StyledTableCell onClick={() => {
                                    hanleNavigate(section.code)
                                }}>{section.code}</StyledTableCell>
                                <StyledTableCell onClick={() => {
                                    hanleNavigate(section.code)
                                }}>{section.name}</StyledTableCell>
                                <StyledTableCell onClick={() => {
                                    hanleNavigate(section.code)
                                }} >{section.subject_load}</StyledTableCell>
                                <StyledTableCell sx={{ cursor: "pointer", width: "50px", }} >
                                    <img width={"20px"} onClick={() => handlerSectionDelete(section)} src={imgs} alt="Excluir" />
                                </StyledTableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </StyledTableContainer>
        </>
    );
};



export default ListSections;




