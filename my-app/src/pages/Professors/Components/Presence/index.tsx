import { useParams } from "react-router-dom";
import ListPresence from "./Components/ListPresence"
import { clientServer } from "../../../../Client/Client";
import { useEffect, useState } from "react"
import { TablePagination } from "@material-ui/core";
import Box from "@mui/material/Box";
import { NavBarPresences } from "./Components/NavBarPresence";
import { useQuery } from "react-query";
import Pagination from "@mui/material/Pagination";
import ModalUpdatePresence from "./Components/ModalUpdatePresence";
import Filter from "./Components/Searche";
import BuscaGeral from "./Components/Searche";
import { CreatePresence } from "./Components/CreatePresence";
export type TypeDataPresence = {
    presences: TypePresence[],
    page: number,
    pageSize: number
};

export type TypePresence = {
    enrolment: number,
    name: string,
    email: string,
    date: Date,
    sectionCode: number,
    subjectName: string,
    status: string,
    code: number,
}

export type Filters = {
    page?: number,
    pageSize?: number,
    sectionCode?: number,
    date?: string,
    name: string,
    enrolment?: number
}

export type DataSearch = {
    name: string,
    enrolment: string,
    date?: string
}



const fetchDataPresences = async (query: any): Promise<TypeDataPresence> => {
    const filters = query.queryKey[1] as unknown as Filters;

    const data = await clientServer.getPresenceByFilterTeacher(filters as Filters) as unknown;
    return data as TypeDataPresence;
};


export const PagePresence = () => {
    const { id } = useParams();
    const [filters, setFilters] = useState<Filters>({
        page: 1,
        pageSize: 100,
        name: "",
        enrolment: 0
    })
    const [dataPresenca, setDataPresenca] = useState<TypePresence | null>();
    const [updatePresenceIsOpen, setUpdatePresenceIsOpen] = useState(false);
    const [dataFilter, setDataFilter] = useState<DataSearch>({
        name: "",
        enrolment: ""
    });

    const [isOpenPresence, setIsOpenPresence] = useState(false);

    useEffect(() => {
        if (id) {
            setFilters({ ...filters, sectionCode: parseInt(id) })
        }
    }, [])

    const handlePageChange = (page: number) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            page,
        }));
    };

    const handlePageSizeChange = (pageSize: number) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            pageSize,
        }));
    };

    const handlerSearch = () => {

        setFilters((prevFilters) => ({
            ...prevFilters,
            name: dataFilter.name,
            date: dataFilter.date,
            enrolment: dataFilter.enrolment
        }));
    }

    //@ts-ignore
    const { data, status, error } = useQuery(["data", filters], fetchDataPresences, { retry: 3 });

    return (
        <>
            <NavBarPresences setIsOpenPresence={setIsOpenPresence} />
            {!!isOpenPresence && <CreatePresence setIsOpenPresence={setIsOpenPresence} ></CreatePresence>}
            {!isOpenPresence && <>


                <BuscaGeral
                    key={"searchFilters"}
                    updateState={setDataFilter}
                    filters={dataFilter}
                    clickSearch={handlerSearch}
                />

                <span style={{ borderBottom: "2px solid black", margin: "30px 10px 20px 10px" }}></span>
                {(updatePresenceIsOpen && dataPresenca != null) && < ModalUpdatePresence data={dataPresenca} update={setUpdatePresenceIsOpen} />}
                {
                    status === "success" &&
                    < >
                        <ListPresence presence={data.presences.map(item => {
                            return {
                                ...item,
                                statusValue: item.status
                            }
                        })} setDataPresenca={setDataPresenca} setUpdateModal={setUpdatePresenceIsOpen} />
                        <Box sx={{ display: "block", marginBottom: "25px" }}>
                            <TablePagination
                                style={{ display: "block" }}
                                rowsPerPageOptions={[10, 25, 50]}
                                count={data.presences?.length || 0}
                                rowsPerPage={filters.pageSize || 100}
                                page={(filters.page || 1) - 1}
                                onPageChange={(event, newPage) => handlePageChange(newPage + 1)}
                                onRowsPerPageChange={(event) =>
                                    handlePageSizeChange(parseInt(event.target.value, 10))} />
                        </Box>
                    </>
                }
            </>}
        </>
    );
};



