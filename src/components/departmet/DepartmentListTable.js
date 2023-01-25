import React from "react";
import DepartmentListTableRow from "./DepartmentListTableRow";

function DepartmentListTable(props) {
    const departments = props.deptList
    return (
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
            {departments.map(dept =>
                <DepartmentListTableRow deptData={dept} key={dept._id}/>
            )}
            </tbody>
        </table>
    )
}
export default DepartmentListTable

