import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {getLectureByIdApiCall} from '../../apiCalls/lectureApiCalls'
import {getFormattedDate} from '../../helpers/dateHelper'

function LectureDetails() {
    let {lectId} = useParams()
    lectId = parseInt(lectId)
    const lecture = getLectureByIdApiCall(lectId)
    const lectureDateFrom = lecture.dateFrom ? getFormattedDate(lecture.dateFrom) : ""
    const lectureDateTo = lecture.dateTo ? getFormattedDate(lecture.dateTo) : ""

    return (
        <main>
            <h2>Szczegóły Wykładu</h2>
            <p>Nazwa: {lecture.name}</p>
            <p>Wykładowca: {lecture.professor.firstName + ' ' + lecture.professor.lastName}</p>
            <p>Katedra: {lecture.department.name} </p>
            <p>Od: {lectureDateFrom} </p>
            {lectureDateTo && <p>Do: {lectureDateTo} </p>}
            <p>Czas trwania: {lecture.duration + ' minut'} </p>
            <div className="section-buttons">
                <Link to="/lectures" className="button-back">Powrót</Link>
            </div>
        </main>
    )
}

export default LectureDetails