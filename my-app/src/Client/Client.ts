import axios from "axios";
import { API_URL } from "../env/env";
import { TypePresence } from "../pages/Professors/Components/Presence";


const axiosUnstance = axios.create({

});



const createPresence = async () => {
    /*   await axios.post(`${API_URL}/sections/${sectionId}/`, {
        data: { data }
    }) */
}

const updatePresence = async (presenceUpdate: unknown) => {
    /*   await axios.post(`${API_URL}/sections/${sectionId}/`, {
        data: { data }
    }) */
}

const getDataSections = async () => {
    const { data } = await axios.get(`${API_URL}/sections/`);
    return data;
}

const getDataSectionById = async (sectionId: number) => {

    const { data } = await axios.get(`${API_URL}/sections/${sectionId}`);

    return data;
}


const getPresenceByFilter = async (filters: any) => {
    const dataPresence: TypePresence[] = [
        {
            code: 1,
            enrolment: 1,
            name: "João",
            email: "joao@example.com",
            date: new Date(),
            sectionCode: 123,
            subjectName: "Matemática",
            status: "abonada",
        }, {
            code: 2,
            enrolment: 2,
            name: "Maria",
            email: "maria@example.com",
            date: new Date(),
            sectionCode: 456,
            subjectName: "História",
            status: "ausente",
        },
        {
            code: 3,
            enrolment: 3,
            name: "Pedro",
            email: "pedro@example.com",
            date: new Date(),
            sectionCode: 789,
            subjectName: "Geografia",
            status: "presente",
        },
        {
            code: 4,
            enrolment: 4,
            name: "Ana",
            email: "ana@example.com",
            date: new Date(),
            sectionCode: 123,
            subjectName: "Matemática",
            status: "abonada",
        },
        {
            code: 5,
            enrolment: 5,
            name: "Lucas",
            email: "lucas@example.com",
            date: new Date(),
            sectionCode: 456,
            subjectName: "História",
            status: "ausente",
        },
        {
            code: 6,
            enrolment: 6,
            name: "Carla",
            email: "carla@example.com",
            date: new Date(),
            sectionCode: 789,
            subjectName: "Geografia",
            status: "presente",
        },
        {
            code: 7,
            enrolment: 7,
            name: "José",
            email: "jose@example.com",
            date: new Date(),
            sectionCode: 123,
            subjectName: "Matemática",
            status: "presente",
        },
        {
            code: 8,
            enrolment: 8,
            name: "Mariana",
            email: "mariana@example.com",
            date: new Date(),
            sectionCode: 456,
            subjectName: "História",
            status: "ausente",
        },
        {
            code: 9,
            enrolment: 9,
            name: "Fernando",
            email: "fernando@example.com",
            date: new Date(),
            sectionCode: 789,
            subjectName: "Geografia",
            status: "ausente",
        },
        {
            code: 10,
            enrolment: 10,
            name: "Camila",
            email: "camila@example.com",
            date: new Date(),
            sectionCode: 123,
            subjectName: "Matemática",
            status: "presente",
        }
    ];

    return {

        page: 1,
        pageSize: 100,
        presences: dataPresence
    }
}

const getDataSectionsWith = async (sectionCode: number) => {
    const { data } = await axios.get(`${API_URL}/sections/2/`);
    console.log("data");
    return data;
}


export const clientServer = {
    getDataSections,
    createPresence,
    getDataSectionById,
    getPresenceByFilter,
    updatePresence,
    getDataSectionsWith
}