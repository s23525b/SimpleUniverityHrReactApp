import React from 'react';
import ProfessorListTableRow from './ProfessorListTableRow'

function ProfessorListTable(props) {
    const professors = props.profList
    return (
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
            {professors.map(prof =>
                <ProfessorListTableRow profData={prof} key={prof._id}/>
            )}
            </tbody>
        </table>
    )
}

export default ProfessorListTable