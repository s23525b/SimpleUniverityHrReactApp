import LectureListTableRow from './LectureListTableRow';


function LectureListTable(props) {
    const lectures = props.lecturesList
    return (
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
            {lectures.map(lecture =>
                <LectureListTableRow lectureData={lecture} key={lecture._id}/>
            )}
            </tbody>
        </table>
    )
}

export default LectureListTable;