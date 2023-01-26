import React from "react";
import {Link} from "react-router-dom";
import {getProfessorApiCall} from "../../apiCalls/professorApiCalls";
import {useEffect, useState} from "react";
import ProfessorListTable from "./ProfessorListTable";
import {useTranslation} from "react-i18next";

function ProfessorList() {
    const {t} = useTranslation();
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
        content = <p>{t('errors.titile')} {error.message}</p>
    } else if (!isLoaded) {
        content = <p>{t('prof.list.loading')}</p>
    } else if (professors.length === 0) {
        content = <p>{t('prof.list.noData')}</p>
    } else {
        content = <ProfessorListTable profList={professors}/>
    }

    return (
        <main>
            <h2>{t('prof.list.title')}</h2>
            {content}
            <p className="section-buttons">
                <Link to="/professors/add" className="button-add">{t('prof.list.addNew')}</Link>
            </p>
        </main>
    )
}


export default ProfessorList
