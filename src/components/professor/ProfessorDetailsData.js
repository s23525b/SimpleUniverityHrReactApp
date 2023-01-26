import {getFormattedDate} from "../../helpers/dateHelper"
import React from "react";
import {useTranslation} from "react-i18next";

function ProfessorDetailsData(props) {
    const {t} = useTranslation();
    const prof = props.profData
    return (
        <>
            <p>{t('prof.fields.firstName')}{': ' + prof.firstName}</p>
            <p>{t('prof.fields.lastName')}{': ' + prof.lastName} </p>
            <p>{t('prof.fields.email')}{': ' + prof.email} </p>
            <p>{t('prof.fields.specialization')}{': ' + prof.specialization} </p>
            <h2>{t('nav.lectures')}</h2>
            <table className="table-list">
                <thead>
                <tr>
                    <th>Nazwa</th>
                    <th>Departament</th>
                    <th>Data rozpoczęcia</th>
                    <th>Data zakończenia</th>
                    <th>Czas trwania</th>
                </tr>
                </thead>
                <tbody>
                {prof.lectures.map(
                    lecture =>
                        <tr key={lecture._id}>
                            <td>{lecture.name}</td>
                            <td>{lecture.department.name}</td>
                            <td>{lecture.dateFrom ? getFormattedDate(lecture.dateFrom) : ""}</td>
                            <td>{lecture.dateTo ? getFormattedDate(lecture.dateTo) : ""}</td>
                            <td>{lecture.duration}</td>
                        </tr>
                )}
                </tbody>
            </table>
        </>
    )
}

export default ProfessorDetailsData