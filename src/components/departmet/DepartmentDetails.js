import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import {getDepartmentByIdApiCall} from "../../apiCalls/departmentApiCalls";
import DepartmentDetailsData from '../../apiCalls/departmentDetailsData'
import {useTranslation} from "react-i18next";

function DepartmentDetails() {
    let {deptId} = useParams()
    deptId = parseInt(deptId)
    const dept = getDepartmentByIdApiCall(deptId)
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [message, setMessage] = useState(null);
    const [departments, setDepartments] = useState([]);
    const {t} = useTranslation();

    function fetchDepartmentDetails() {
        getDepartmentByIdApiCall(deptId)
            .then(res => res.json())
            .then(data => {
                    if (data.message) {
                        setDepartments(null)
                        setMessage(data.message)
                    } else {
                        setDepartments(data)
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
        fetchDepartmentDetails()
    }, [])

    let content;

    if (error) {
        content = <p>{error.message}</p>
    } else if (!isLoaded) {
        content = <p>Ładowanie danych katedr...</p>
    } else if (!dept) {
        content = <p>Nie znaleziono katedr</p>
    } else {
        content = <DepartmentDetailsData deptData={departments}/>
    }
    return (
        <main>
            <h2>Szczegóły katedry</h2>
            {content}
            <div className="section-buttons">
                <Link to="/departments" className="button-back">Powrót</Link>
            </div>
        </main>
    )
}

export default DepartmentDetails
