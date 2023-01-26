import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import {getProfessorByIdApiCall} from '../../apiCalls/professorApiCalls'
import ProfessorDetailsData from "./ProfessorDetailsData";
import {useTranslation} from "react-i18next";
function ProfessorDetails() {
    const {t} = useTranslation();
    let {profId} = useParams()
    profId = parseInt(profId)
    const prof = getProfessorByIdApiCall(profId)
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [message, setMessage] = useState(null);
    const [professors, setProfessors] = useState([]);

    function fetchProfessorDetails() {
        getProfessorByIdApiCall(profId)
            .then(res => res.json())
            .then((data) => {
                    if (data.message) {
                        setProfessors(null)
                        setMessage(data.message)
                    } else {
                        setProfessors(data)
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
        fetchProfessorDetails()
    },[])

    let content;

    if (error) {
        content = <p>{error.message}</p>
    } else if (!isLoaded) {
        content = <p>{t('prof.list.loading')}</p>
    } else if (!prof) {
        content = <p>{t('prof.list.noData')}</p>
    } else {
        content = <ProfessorDetailsData profData={professors}/>
    }
    return (
        <main>
            <h2>{t('prof.form.details.pageTitle')}</h2>
            {content}
            <div className="section-buttons">
                <Link to="/professors" className="button-add">{t('form.actions.return')}</Link>
            </div>
        </main>
    )
}

export default ProfessorDetails
