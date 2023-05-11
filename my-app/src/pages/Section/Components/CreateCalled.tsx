import {
  Box,
  Button,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { IStudent } from "../../../Types/User";
import { useState } from "react";
import { ISection } from "../../../Types/Sections";
import { Client } from "../../../client/client";

const CellCalled = ({
  student,
  onChange,
}: {
  student: IStudent;
  onChange: (idStudent: number, status: string) => void;
}) => {
  const [status, setStatus] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    onChange(student.id, event.target.value);
    setStatus(event.target.value);
  };

  return (
    <TableRow>
      <TableCell
        key={"select" + student.id}
        align={"center"}
        style={{ minWidth: "100px" }}
      >
        {" "}
        <Select
          labelId="status"
          id={student.id + "-status"}
          value={status}
          onChange={handleChange}
          label="Status"
          defaultValue="Presente"
          required={true}
          sx={{ minWidth: "150px" }}
        >
          <MenuItem value={"Presente"}>Presente</MenuItem>
          <MenuItem value={"Ausente"}>Ausente</MenuItem>
          <MenuItem value={"Abonada"}>Abonada</MenuItem>
        </Select>
      </TableCell>
      <TableCell
        key={student.id}
        align={"center"}
        style={{ minWidth: "100px" }}
      >
        {student.name}
      </TableCell>
    </TableRow>
  );
};

export const CreateCalled = ({ dataSection }: { dataSection: ISection }) => {
  const [alunos, setAlunos] = useState(
    dataSection.students.map((student) => ({
      id: student.id,
      status: "",
    }))
  );


  const [showButton, setShowButton] = useState(true);

  const handleStatusChange = (idStudent: number, status: string) => {
    const updatedAlunos = [...alunos];
    const index = updatedAlunos.findIndex((item) => item.id == idStudent);
    index >= 0 && (updatedAlunos[index].status = status);
    setAlunos(updatedAlunos);
    console.log(updatedAlunos);
  };

  const clickSend = () => {
    if (alunos.find((item) => item.status == "")) {
      alert("PREENCHA A PRESENÇA DE TODOS OS ALUNOS!");
    } else {
      setShowButton(false);
      //Client.postCallSection({});
    }
  };

  return (
    <Box>
      <Paper
        sx={{
          width: "100%",
          maxWidth: "900px",
          overflow: "hidden",
          margin: "30px auto",
        }}
      >
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell
                  key={"Status"}
                  align={"center"}
                  style={{ minWidth: "100px" }}
                >
                  Status
                </TableCell>{" "}
                <TableCell
                  key={"Student"}
                  align={"center"}
                  style={{ minWidth: "100px" }}
                >
                  Aluno
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {dataSection.students.map((student) => {
                return (
                  <CellCalled
                    onChange={handleStatusChange}
                    student={student}
                  ></CellCalled>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      {showButton && (
        <Button
          size="large"
          sx={{
            margin: "auto",
            justifyContent: "center",
            textAlign: "center",
            display: "flex",
            backgroundColor: "lightgrey",
            color: "blue",
          }}
          onClick={clickSend}
        >
          Finalizar Chamada
        </Button>
      )}
    </Box>
  );
};
