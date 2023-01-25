import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import {getDepartmentsApiCall} from '../../apiCalls/departmentApiCalls';
import DepartmentListTable from './DepartmentListTable';


function DepartmentList() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [departments, setDepartments] = useState([]);

    function fetchDepartmentList() {
        getDepartmentsApiCall()
            .then(response => response.json())
            .then((data) => {
                    setIsLoaded(true)
                    setDepartments(data)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }

    useEffect(() => {
        fetchDepartmentList();
    }, []);

    let content;
    if (error) {
        content = <p>Błąd: {error.message}</p>
    } else if (!isLoaded) {
        content = <p>Ładowanie danych katedr...</p>
    } else if (departments.length === 0) {
        content = <p>Brak danych katedr</p>
    } else {
        content = <DepartmentListTable deptList={departments}/>
    }

    return (
        <main>
            <h2>Lista katedr:</h2>
            {content}
            <p className={"section-buttons"}>
                <Link to="/departments/add" className="button-add">Dodaj katedrę</Link>
            </p>
        </main>
    )
}

export default DepartmentList