import React from "react"
import {Link} from 'react-router-dom'
import {getDepartmentsApiCall} from '../../apiCalls/departmentApiCalls'

function DepartmentList() {
    const departmentList = getDepartmentsApiCall()

    return (
        <main>
            <h2>Lista Katedr</h2>
            <table className="table-list">
                <thead>
                <tr>
                    <th>Nazwa</th>
                    <th>Ilość godzin</th>
                    <th>Opis</th>
                    <th>Opcje</th>
                </tr>
                </thead>
                <tbody>
                {departmentList.map(department => (
                    <tr key={department._id}>
                        <td>{department.name}</td>
                        <td>{department.totalHours}</td>
                        <td>{department.description}</td>
                        <td>
                            <ul className="list-actions">
                                <li><Link to={`details/${department._id}`}
                                          className="list-actions-button-details">Szczegóły</Link></li>
                                <li><Link to={`edit/${department._id}`}
                                          className="list-actions-button-edit">Edytuj</Link></li>
                                <li><Link to={`delete/${department._id}`}
                                          className="list-actions-button-delete">Usuń</Link></li>
                            </ul>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <p className="section-buttons">
                <Link to="/departments/add" className="button-add">Dodaj nową katedrę</Link>
            </p>
        </main>
    )
}

export default DepartmentList