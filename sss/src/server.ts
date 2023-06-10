import { createRoom } from "./repository/room.repository";
import { addStudentInTurma } from "./repository/turmaRepository";

const run = async () => {
    try {
        const value = await addStudentInTurma("07078333f2563","2");
        console.log(value);
    } catch (error: any) {
        console.log(error.message)

    }

}

run().then();