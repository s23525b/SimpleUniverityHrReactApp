import {useState, useEffect} from "react";
import {Link, useParams} from 'react-router-dom'
import {getLectureByIdApiCall} from '../../apiCalls/lectureApiCalls'
import LectureDetailsData from './LectureDetailsData'

function LectureDetails() {

    const [lectures, setLectures] = useState([])
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [message, setMessage] = useState(null)

    let {lectId} = useParams();
    lectId = parseInt(lectId);


    function fetchLectureDetails() {
        getLectureByIdApiCall(lectId)
            .then(result => result.json())
            .then((data) => {
                    if (data.message) {
                        setLectures(null)
                        setMessage(data.message)
                    } else {
                        setLectures(data)
                        setMessage(null)
                    }
                    setIsLoaded(true)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }

    useEffect(() => {
        fetchLectureDetails()
    },[])

    let content;

    if (error) {
        content = <p>Błąd: {error.message}</p>
    } else if (!isLoaded) {
        content = <p>Ładowanie wykładu...</p>
    } else {
        content = <LectureDetailsData lectureData={lectures}/>
    }

    return (
        <main>
            {content}
            <div className="section-buttons">
                <Link className="button-back" to="/lectures">Wróć</Link>
            </div>
        </main>
    )
}

export default LectureDetails