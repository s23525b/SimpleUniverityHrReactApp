import {Link} from 'react-router-dom'
import {getLectureApiCall} from '../../apiCalls/lectureApiCalls'
import {useEffect, useState} from "react";
import LectureListTable from './LectureListTable'

function LectureList() {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [lectures, setLectures] = useState([])
    let content;

    function fetchLecturesList() {
        getLectureApiCall()
            .then(response => response.json())
            .then(data => {
                    setLectures(data)
                    setIsLoaded(true)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }

    useEffect(() => {
        fetchLecturesList()
    }, [])

    if (error) {
        content = <p>Błąd: {error.message}</p>
    } else if (!isLoaded) {
        content = <p>Ładowanie danych wykładów...</p>
    } else if (lectures.length === 0) {
        content = <p>Brak wykładów...</p>
    } else {
        content = <LectureListTable lecturesList={lectures}/>
    }

    return (
        <main>
            <h2>Lista wykładów:</h2>
            {content}
            <p className="section-buttons">
                <Link to="/lectures/add" className="button-add">Dodaj nowy</Link>
            </p>
        </main>
    )
}

export default LectureList