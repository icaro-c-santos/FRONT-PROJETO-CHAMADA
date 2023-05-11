import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import { TableRow } from "@mui/material";
import { useState } from "react";
import { ISection } from "../../../Types/Sections";
import { SectionsMock } from "../../../mocks/Sections";

interface Column {
  id: "nome" | "code" | "subject" | "teachers" | "hours";
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  {
    id: "nome",
    label: "Nome",
    minWidth: 50,
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "code",
    label: "Código",
    minWidth: 30,
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "teachers",
    label: "Professores",
    minWidth: 80,
    align: "center",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "subject",
    label: "Disciplina",
    minWidth: 30,
    align: "center",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "hours",
    label: "Horarios",
    minWidth: 80,
    align: "center",
    format: (value: number) => value.toFixed(2),
  },
];

const SectionRow = ({ section }: { section: ISection }) => {
  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={section.id}>
      <TableCell key={columns[0].id} align={columns[0].align}>
        {section.name}
      </TableCell>
      <TableCell key={columns[1].id} align={columns[1].align}>
        {section.id}
      </TableCell>
      <TableCell key={columns[2].id} align={columns[2].align}>
        {section.teachers.map((teacher, index) => (
          <>
            {teacher + ","}
            {index !== section.teachers.length - 1 && <br />}
          </>
        ))}
      </TableCell>

      <TableCell key={columns[3].id} align={columns[3].align}>
        {section.subject}
      </TableCell>
      <TableCell key={columns[4].id} align={columns[4].align}>
        {section.hours.map((hour) => (
          <>
            {`${hour.day} - ${hour.start_hour} as ${hour.final_hour}`}
            <br />
          </>
        ))}
      </TableCell>
    </TableRow>
  );
};

const Sections: ISection[] = [
  {
    id: "172",
    name: "MAT32",
    subject: "MATEMATICA",
    teachers: ["Adriana Mello", "Cristina Bispo", "Eduardo Pereira"],
    hours: [
      { day: "quarta", final_hour: "20:20", start_hour: "18:20" },
      { day: "sexta", final_hour: "20:20", start_hour: "18:20" },
    ],
  },
];

export default function TableSections({ sections }: { sections: ISection[] }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sections.map((section) => {
              return <SectionRow section={section}></SectionRow>;
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={sections.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
