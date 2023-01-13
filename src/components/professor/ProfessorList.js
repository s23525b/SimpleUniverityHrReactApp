import {Link} from "react-router-dom";
import {getProfessorApiCall} from "../../apiCalls/professorApiCalls";

function ProfessorList() {
    const professorList = getProfessorApiCall();
    return (
        <main>
            <h2>Lista profesorów</h2>
            <table className="table-list">
                <thead>
                <tr>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>E-mail</th>
                    <th>Specjalizacja</th>
                    <th>Opcje</th>
                </tr>
                </thead>
                <tbody>
                {professorList.map(prof => (
                    <tr key={prof._id}>
                        <td>{prof.firstName}</td>
                        <td>{prof.lastName}</td>
                        <td>{prof.email}</td>
                        <td>{prof.specialization}</td>

                        <td>
                            <ul className="list-actions">
                                <li>
                                    <Link to={`details/${prof._id}`}
                                          className="list-actions-button-details">Szczegóły</Link>
                                </li>
                                <li>
                                    <Link to={`edit/${prof._id}`}
                                          className="list-actions-button-edit">Edytuj</Link>
                                </li>
                                <li>
                                    <Link to={`delete//${prof._id}`}
                                          className="list-actions-button-delete">Usuń</Link>
                                </li>
                            </ul>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <p className="section-buttons">
                <Link to="/professors/add" className="button-add">Dodaj nowego profesora</Link>
            </p>
        </main>
    )
}

export default ProfessorList
