import React from "react"
import {Link} from 'react-router-dom'
import {getLectureApiCall} from '../../apiCalls/lectureApiCalls'

function LectureList() {
    const lectureList = getLectureApiCall()

    return (
        <main>
            <h2>Lista wykładów</h2>
            <table className="table-list">
                <thead>
                <tr>
                    <th>Nazwa</th>
                    <th>Wykładowca</th>
                    <th>Departament</th>
                    <th>Data od</th>
                    <th>Data do</th>
                    <th>Czas trwania</th>
                    <th>Opcje</th>
                </tr>
                </thead>
                <tbody>
                {lectureList.map(lecture => (
                    <tr key={lecture._id}>
                        <td>{lecture.name}</td>
                        <td>{lecture.professor.firstName + ' ' + lecture.professor.lastName}</td>
                        <td>{lecture.department.name}</td>
                        <td>{lecture.dateFrom}</td>
                        <td>{lecture.dateTo}</td>
                        <td>{lecture.duration}</td>
                        <td>
                            <ul className="list-actions">
                                <li><Link to={`details/${lecture._id}`}
                                          className="list-actions-button-details">Szczegóły</Link></li>
                                <li><Link to={`edit/${lecture._id}`}
                                          className="list-actions-button-edit">Edytuj</Link></li>
                                <li><Link to={`delete/${lecture._id}`}
                                          className="list-actions-button-delete">Usuń</Link></li>
                            </ul>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <p className="section-buttons">
                <Link to="/lectures/add" className="button-add">Dodaj nowy wykład</Link>
            </p>
        </main>
    )
}

export default LectureList