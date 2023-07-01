import axios from "axios";
import ListSections, { TypeDataSection } from "../Components/ListSections";
import { API_URL } from "../../../env/env";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const fetchDataSection = async (id: number): Promise<TypeDataSection[]> => {
    const { data } = await axios.get(`${API_URL}/sections/`);
    return data;
};



export const PageSectionId = () => {
    const { id } = useParams();
    /*  const { data, status, error } = useQuery(["data"], fetchDataSection, { retry: 3 });
     return <>
         {status === "success" && <ListSections sections={data} />}
     </> */

    return <></>
}