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
                </tr>
                </thead>
                <tbody>
                <tr key={lecture.professor._id}>
                    <td>{lecture.professor.firstName}</td>
                    <td>{lecture.professor.lastName}</td>
                    <td>{lecture.professor.email}</td>
                    <td>{lecture.professor.specialization}</td>
                </tr>
                </tbody>
            </table>
            <h2>Katedra:</h2>
            <table className="table-list">
                <thead>
                <tr>
                    <th>Nazwa</th>
                    <th>Ilość godzin</th>
                    <th className="scrollable">Opis</th>
                </tr>
                </thead>
                <tbody>
                <tr key={lecture.department._id}>
                    <td>{lecture.department.name}</td>
                    <td className={"dept-hours"}>{lecture.department.totalHours}</td>
                    <td className={"dept-description"}>
                        <div className={"scrollable"}>{lecture.department.description}</div>
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    )
}

export default LectureDetailsData


