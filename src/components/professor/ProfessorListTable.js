import React from 'react';
import ProfessorListTableRow from './ProfessorListTableRow';
import {useTranslation} from "react-i18next";

function ProfessorListTable(props) {
    const professors = props.profList
    const {t} = useTranslation();
    return (
        <table className="table-list">
            <thead>
            <tr>
                <th>{t('prof.fields.firstName')}</th>
                <th>{t('prof.fields.lastName')}</th>
                <th>{t('prof.fields.email')}</th>
                <th>{t('prof.fields.specialization')}</th>
                <th>{t('list.actions.title')}</th>
            </tr>
            </thead>
            <tbody>
            {professors.map(prof =>
                <ProfessorListTableRow profData={prof} key={prof._id}/>
            )}
            </tbody>
        </table>
    )
}

export default ProfessorListTable