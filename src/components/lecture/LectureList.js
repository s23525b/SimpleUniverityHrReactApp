import React from "react"
import { Link } from 'react-router-dom'
import { getLectureByIdApiCall } from '../../apiCalls/lectureApiCalls'

function LectureList() {
    const lectureList = getLectureByIdApiCall()

    return (
        <main>
            <h2>Lista wykładów</h2>
            <table className="table-list">
                <thead>
                <tr>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Departament</th>
                    <th>Opcje</th>
                </tr>
                </thead>
                <tbody>
                {lectureList.map(employment => (
                    <tr key={employment._id}>
                        <td>{employment.employee.firstName}</td>
                        <td>{employment.employee.lastName}</td>
                        <td>{employment.department.name}</td>
                        <td>
                            <ul className="list-actions">
                                <li><Link to={`employment/details/${employment._id}`} className="list-actions-button-details">Szczegóły</Link></li>
                                <li><Link to={`employment/edit/${employment._id}`} className="list-actions-button-edit">Edytuj</Link></li>
                                <li><Link to={`employment/delete/${employment._id}`} className="list-actions-button-delete">Usuń</Link></li>
                            </ul>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <p className="section-buttons">
                <Link to="/employment/add" className="button-add">Dodaj nowe zatrudnienie</Link>
            </p>
        </main>
    )
}

export default LectureList