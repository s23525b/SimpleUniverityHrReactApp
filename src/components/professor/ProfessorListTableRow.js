import {Link} from 'react-router-dom';
import {deleteProfessorsApiCall} from "../../apiCalls/professorApiCalls";
import {useTranslation} from 'react-i18next';

function ProfessorListTableRow(props) {
    const prof = props.profData
    const {t} = useTranslation();
    return (
        <tr>
            <td>{prof.firstName}</td>
            <td>{prof.lastName}</td>
            <td>{prof.email}</td>
            <td>{prof.specialization}</td>
            <td>
                <ul className="list-actions">
                    <li><Link to={`/professors/details/${prof._id}`}
                              className="list-actions-button-details">{t('list.actions.details')}</Link></li>
                    <li><Link to={`/professors/edit/${prof._id}`}
                              className="list-actions-button-edit">{t('list.actions.edit')}</Link></li>
                    <li><Link to={`/professors/delete/${prof._id}`}
                              className="list-actions-button-delete"
                              onClick={() => deleteProfessorsApiCall(prof)}>{t('list.actions.delete')}</Link></li>
                </ul>
            </td>
        </tr>
    )
}

export default ProfessorListTableRow;