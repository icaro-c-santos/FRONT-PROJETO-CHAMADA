
import { Professor } from "../../../Types/Professors";

export const Professors = ({ professors }: { professors: Professor[] }) => {


    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", fontWeight: "bold", alignItems: "center" }}>
                <h3 style={{ minWidth: "300px", textAlign: "center" }}> Professores:</h3> {professors.map((professor) => (
                    <p key={professor.code}>
                        {`${professor.name} - ${professor.email}`}
                    </p>
                ))}</div>
        </>
    );
}


export default Professors;