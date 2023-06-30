


export const Subject = ({ subjectName, subjectLoad }: { subjectName: string, subjectLoad: number }) => {

    return (
        <>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", fontWeight: "bold", alignItems: "center" }}>
                <h3 style={{ minWidth: "300px", textAlign: "center" }}> Disciplina: {subjectName}   -   Carga Horaria - {subjectLoad}</h3></div>
        </>
    );
}


export default Subject;