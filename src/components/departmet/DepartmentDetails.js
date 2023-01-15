import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {getDepartmentByIdApiCall} from "../../apiCalls/departmentApiCalls";
import {getFormattedDate} from '../../helpers/dateHelper'

function DepartmentDetails() {
    let {deptId} = useParams()
    deptId = parseInt(deptId)
    const dept = getDepartmentByIdApiCall(deptId)

    return (
        <main>
            <h2>Szczegóły katedry</h2>
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
            <div className="section-buttons">
                <Link to="/departments" className="button-back">Powrót</Link>
            </div>
        </main>
    )
}

export default DepartmentDetails
