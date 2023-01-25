import {Link} from 'react-router-dom';

function DepartmentListTableRow(props) {
    const dept = props.deptData
    return (
        <tr>
            <td>{dept.name}</td>
            <td className={"dept-hours"}>{dept.totalHours + ' godzin wykładowych'}</td>
            <td className={"dept-description"}>
                <div className={"scrollable"}>{dept.description}</div>
            </td>
            <td>
                <ul className="list-actions">
                    <li><Link to={`/departments/details/${dept._id}`}
                              className="list-actions-button-details">Szczegóły</Link></li>
                    <li><Link to={`/departments/edit/${dept._id}`}
                              className="list-actions-button-edit">Edytuj</Link></li>
                    <li><Link to={`/departments/delete/${dept._id}`}
                              className="list-actions-button-delete">Usuń</Link></li>
                </ul>
            </td>
        </tr>
    )
}

export default DepartmentListTableRow;
