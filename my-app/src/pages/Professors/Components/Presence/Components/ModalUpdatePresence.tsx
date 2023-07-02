import React, { useState, ChangeEvent } from 'react';
import { TypePresence } from '..';
import { Modal, Typography, Select, MenuItem, Button } from '@mui/material';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { clientServer } from '../../../../../Client/Client';

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const Title = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const InfoText = styled(Typography)`
  margin 10px auto;
`;

const StyledSelect = styled(Select)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;
`;

const StyledButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
  margin-top: 16px;
`;

const CloseButton = styled(Button)`
  margin-top: 16px;
  &:hover {
    background-color: none;
  }
`;


const getStatus = (value: string) => {

    if (value == "presente") return 1

    if (value == "ausente") return 2

    if (value == "abonada") return 3

}

export const ModalUpdatePresence = ({ data, update }: { data: TypePresence; update: (value: boolean) => void }) => {
    const [status, setStatus] = useState(data.status);

    const handleStatusChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setStatus(event.target.value);
    };


    const handleConfirm = async () => {
        try {
            await clientServer.updatePresence({
                ...data,
                status: getStatus(status)
            })
            alert("PRESENÇA ATUALIZADA COM SUCESSO!");
        } catch (error) {
            alert("NÃO FOI POSSÍVEL ATUALIZAR A PRESENÇA!");
        } finally {
            update(false);
        }
    };

    const handleClose = () => {
        update(false);
    };

    return (
        <Modal open={true} onClose={handleClose}>

            <ModalContainer>

                <ModalContent>
                    <Box sx={{ display: "flex", justifyContent: "end" }}>
                        <CloseButton onClick={handleClose}><p style={{ marginLeft: "auto", marginTop: "0px" }}>Fechar</p></CloseButton>
                    </Box>
                    <Box sx={{ gap: "20px;" }}>
                        <Title variant="h5" style={{ display: "flex", marginBottom: "10px", textAlign: "center", justifyContent: "center" }}>Atualizar Presença</Title>
                        <InfoText>Matrícula: {data.enrolment}</InfoText>
                        <InfoText>Name: {data.name}</InfoText>
                        <InfoText>Email: {data.email}</InfoText>
                        <InfoText>Data: {data.date.toLocaleDateString()}</InfoText>
                        <InfoText>Codigo da Turma: {data.sectionCode}</InfoText>
                        <InfoText>Disciplina: {data.subjectName}</InfoText>
                    </Box>

                    <Box sx={{ minWidth: 120, margin: "30px auto;" }}>
                        <FormControl fullWidth>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                Status
                            </InputLabel>
                            <NativeSelect onChange={handleStatusChange} defaultValue={data.status} style={{ height: "45px" }} inputProps={{ name: 'status', id: 'uncontrolled-native' }}>
                                <option value={"presente"}>Presente</option>
                                <option value={"ausente"}>Ausente</option>
                                <option value={"abonada"}>Abonada</option>
                            </NativeSelect>
                        </FormControl>
                    </Box>
                    <Button
                        sx={{
                            padding: "10px",
                            backgroundColor: "lightgrey !important",
                            paddingBlock: "14px !important",
                            borderRadius: "15px !important",
                            display: "flex",
                            width: "100%",
                            cursor: "pointer",
                            "&:hover": {
                                cursor: "pointer",
                            },
                        }}
                        onClick={handleConfirm}
                    >
                        Confirmar
                    </Button>
                </ModalContent>
            </ModalContainer>
        </Modal >
    );
};

export default ModalUpdatePresence;
