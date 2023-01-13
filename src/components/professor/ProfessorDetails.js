import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {getProfessorByIdApiCall} from '../../apiCalls/professorApiCalls'
import {getFormattedDate} from '../../helpers/dateHelper'

function ProfessorDetails() {
    let {profId} = useParams()
    profId = parseInt(profId)
    const prof = getProfessorByIdApiCall(profId)

    return (
        <main>
            <h2>Szczegóły profesora</h2>
            <p>Imię: {prof.firstName}</p>
            <p>Nazwisko: {prof.lastName} </p>
            <p>E-mail: {prof.email} </p>
            <p>Specjalizacja: {prof.specialization} </p>
            <h2>Wykłady</h2>
            <table className="table-list">
                <thead>
                <tr>
                    <th>Katedra</th>
                    <th>Czas trwania</th>
                    <th>Data od</th>
                    <th>Data do</th>
                </tr>
                </thead>
                <tbody>
                {prof.lectures.map(
                    lecture =>
                        <tr key={lecture._id}>
                            <td>{lecture.department.name}</td>
                            <td>{lecture.duration}</td>
                            <td>{lecture.dateFrom ? getFormattedDate(lecture.dateFrom) : ""}</td>
                            <td>{lecture.dateTo ? getFormattedDate(lecture.dateTo) : ""}</td>
                        </tr>
                )}
                </tbody>
            </table>
            <div className="section-buttons">
                <Link to="/professors" className="button-back">Powrót</Link>
            </div>
        </main>
    )
}

export default ProfessorDetails
