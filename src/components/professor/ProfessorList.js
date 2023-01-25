import {Link} from "react-router-dom";
import {getProfessorApiCall} from "../../apiCalls/professorApiCalls";
import {useEffect, useState} from "react";
import ProfessorListTable from "./ProfessorListTable";


function ProfessorList() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [professors, setProfessors] = useState([]);

    function fetchProfessorList() {
        getProfessorApiCall()
            .then(response => response.json())
            .then((data) => {
                    setIsLoaded(true)
                    setProfessors(data)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }

    useEffect(() => {
        fetchProfessorList();
    }, []);


    let content;
    if (error) {
        content = <p>Błąd: {error.message}</p>
    } else if (!isLoaded) {
        content = <p>Ładowanie danych profesorów...</p>
    } else if (professors.length === 0) {
        content = <p>Brak danych profesorów</p>
    } else {
        content = <ProfessorListTable profList={professors}/>
    }

    return (
        <main>
            <h2>Lista profesorów</h2>
            {content}
            <p className="section-buttons">
                <Link to="/professors/add" className="button-add">Dodaj profesora</Link>
            </p>
        </main>
    )
}


export default ProfessorList
