import {getFormattedDate} from "../../helpers/dateHelper";
import React from "react";


function LectureDetailsData(props) {
    const lecture = props.lectureData;
    const lectureDateFrom = lecture.dateFrom ? getFormattedDate(lecture.dateFrom) : ""
    const lectureDateTo = lecture.dateTo ? getFormattedDate(lecture.dateTo) : ""
    return (
        <>
            <h2>Szczegóły Wykładu</h2>
            <p>Nazwa: {lecture.name}</p>
            <p>Wykładowca: {lecture.professor.firstName + ' ' + lecture.professor.lastName}</p>
            <p>Katedra: {lecture.department.name} </p>
            <p>Od: {lectureDateFrom} </p>
            {lectureDateTo && <p>Do: {lectureDateTo} </p>}
            <p>Czas trwania: {lecture.duration + ' minut'} </p>
            <h2>Profesor:</h2>
            <table className="table-list">
                <thead>
                <tr>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Email</th>
                    <th>Specialization</th>
                    //KONIEC 24.01
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

export default LectureDetailsData


