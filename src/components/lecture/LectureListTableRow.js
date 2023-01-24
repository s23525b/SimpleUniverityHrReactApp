import {Link} from "react-router-dom";

function LectureListTableRow(props) {
    const lecture = props.lectureData
    return (
        <tr>
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
    )
}
export default LectureListTableRow