import React from "react";
import {getFormattedDate} from "../helpers/dateHelper";

function DepartmentDetailsData(props){
    const dept = props.deptData
    return (
        <>
            <p>Nazwa: {dept.name}</p>
            <p>Ilosc godzin: {dept.totalHours} </p>
            <p>Opis: {dept.description} </p>
            <h2>Wykłady</h2>
            <table className="table-list">
                <thead>
                <tr>
                    <th>Nazwa</th>
                    <th>Profesor</th>
                    <th>Czas trwania</th>
                    <th>Data od</th>
                    <th>Data do</th>
                </tr>
                </thead>
                <tbody>
                {dept.lectures.map(
                    lecture =>
                        <tr key={lecture._id}>
                            <td>{lecture.name}</td>
                            <td>{lecture.professor.lastName}</td>
                            <td>{lecture.duration}</td>
                            <td>{lecture.dateFrom ? getFormattedDate(lecture.dateFrom) : ""}</td>
                            <td>{lecture.dateTo ? getFormattedDate(lecture.dateTo) : ""}</td>
                        </tr>
                )}
                </tbody>
            </table>

        </>
    )
}


export default  DepartmentDetailsData