import {getFormattedDate} from "../../helpers/dateHelper"
import React from "react";

function ProfessorDetailsData(props) {
    const prof = props.profData
    return (
        <>
            <p>Imię: {prof.firstName}</p>
            <p>Nazwisko: {prof.lastName} </p>
            <p>E-mail: {prof.email} </p>
            <p>Specjalizacja: {prof.specialization} </p>
            <h2>Wykłady:</h2>
            <table className="table-list">
                <thead>
                <tr>
                    <th>Nazwa</th>
                    <th>Departament</th>
                    <th>Data rozpoczęcia</th>
                    <th>Data zakończenia</th>
                    <th>Czas trwania</th>
                </tr>
                </thead>
                <tbody>
                {prof.lectures.map(
                    lecture =>
                        <tr key={lecture._id}>
                            <td>{lecture.name}</td>
                            <td>{lecture.department.name}</td>
                            <td>{lecture.dateFrom ? getFormattedDate(lecture.dateFrom) : ""}</td>
                            <td>{lecture.dateTo ? getFormattedDate(lecture.dateTo) : ""}</td>
                            <td>{lecture.duration}</td>
                        </tr>
                )}
                </tbody>
            </table>
        </>
    )
}
export default ProfessorDetailsData