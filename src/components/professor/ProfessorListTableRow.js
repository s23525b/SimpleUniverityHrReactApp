import {Link} from 'react-router-dom';

function ProfessorListTableRow(props) {
    const prof = props.profData
    return (
        <tr>
            <td>{prof.firstName}</td>
            <td>{prof.lastName}</td>
            <td>{prof.email}</td>
            <td>{prof.specialization}</td>
            <td>
                <ul className="list-actions">
                    <li><Link to={`/professors/details/${prof._id}`}
                              className="list-actions-button-details">Szczegóły</Link></li>
                    <li><Link to={`/professors/edit/${prof._id}`}
                              className="list-actions-button-edit">Edytuj</Link></li>
                    <li><Link to={`/professors/delete/${prof._id}`}
                              className="list-actions-button-delete">Usuń</Link></li>
                </ul>
            </td>
        </tr>
    )
}

export default ProfessorListTableRow;