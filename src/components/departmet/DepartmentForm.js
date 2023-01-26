import {Link, useNavigate, useParams} from "react-router-dom"
import FormMode from "../../helpers/formHelper"
import {useEffect, useState} from "react";
import {
    addDepartmentApiCall,
    getDepartmentByIdApiCall,
    updateDepartmentApiCall
} from "../../apiCalls/departmentApiCalls";
import {checkRequired, checkTextLengthRange, checkEmail, checkNumber} from "../../helpers/validationCommon";
import FormInput from "../form/FormInput";
import FormButtons from "../form/FormButtons";


function DepartmentForm() {

    const [dept, setDept] = useState({
        name: "",
        totalHours: "",
        description: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        totalHours: "",
        description: ""
    });

    const [error, setError] = useState(null);
    const [isLoading, setIsLoaded] = useState(null);
    const [message, setMessage] = useState(null);
    const [redirect, setRedirect] = useState(false);

    const {deptId} = useParams();
    const currentFormMode = deptId ? FormMode.EDIT : FormMode.NEW;
    const navigate = useNavigate();

    function fetchDepartmentDetails() {
        getDepartmentByIdApiCall(deptId)
            .then(res => res.json())
            .then(
                (data) => {
                    if (data.message) {
                        setMessage(data.message);
                    } else {
                        setDept(data);
                        setMessage(null)
                    }
                    setIsLoaded(true);
                },
                (error) => {
                    setError(error);
                    setIsLoaded(true);
                })
    }

    useEffect(() => {
        if (currentFormMode === FormMode.EDIT) {
            fetchDepartmentDetails()
        }
    }, [])

    function validateField(fieldName, fieldValue) {
        let errorMessage = ''
        if (fieldName === 'name') {
            if (!checkRequired(fieldValue)) {
                errorMessage = 'Nazwa jest wymagana'
            } else if (!checkTextLengthRange(fieldValue, 2, 40)) {
                errorMessage = 'Nazwa musi zawierać od 2 do 40 znaków'
            }
        }
        if (fieldName === 'totalHours') {
            if (!checkRequired(fieldValue)) {
                errorMessage = 'Pole jest wymagane'
            } else if (!checkNumber(fieldValue)) {
                errorMessage = 'Wartość musi być liczbą'
            }
        }
        return errorMessage;
    }

    function handleChange(event) {
        const {name, value} = event.target;
        const errorMessage = validateField(name, value);
        setError({
            ...errors, [name]: errorMessage
        })
        setDept({
            ...dept, [name]: value
        })
    }

    function validateForm() {
        let isValid = true;
        let serverFieldsErrors = {...errors}
        Object.entries(dept).forEach(([key, value]) => {
            const errorMessage = validateField(key, value)
            serverFieldsErrors[key] = errorMessage
            if (errorMessage.length > 0) {
                isValid = false
            }
        })
        setErrors(serverFieldsErrors)
        return isValid
    }

    function handleSubmit(event) {
        event.preventDefault();
        const isValid = validateForm()
        if (isValid) {
            let promise, response
            if (currentFormMode === FormMode.NEW) {
                promise = addDepartmentApiCall(dept)
            } else if (currentFormMode === FormMode.EDIT) {
                promise = updateDepartmentApiCall(deptId, dept)
            }
            if (promise) {
                promise
                    .then(
                        (data) => {
                            response = data
                            if (response.status === 201 || response.status === 500) {
                                return data.json()
                            }
                        }
                    )
                    .then(
                        (data) => {
                            if (!response.ok && response.status === 500) {
                                const serverFieldsErrors = {...errors}
                                for (const i in data) {
                                    const errorItem = data[i]
                                    const errorMessage = errorItem.message
                                    const fieldName = errorItem.path
                                    serverFieldsErrors[fieldName] = errorMessage
                                }
                                setErrors(serverFieldsErrors)
                                setError(null)
                            } else {
                                setRedirect(true)
                            }
                        },
                        (error) => {
                            setError(error)
                        }
                    )
            }
        }
    }

    function hasErrors() {
        Object.values(errors).forEach((value) => {
            if (value.length > 0) {
                return true
            }
        })
        return false
    }

    useEffect(() => {
        if (redirect) {
            navigate('/departments')
        }
    }, [redirect])

    const errorsSummary = hasErrors() ? 'Formularz zawiera błędy.' : ''
    const fetchError = error ? `Błąd: ${error.message}` : ''
    const globalErrorMessage = errorsSummary || fetchError || message
    const pageTitle = currentFormMode === FormMode ? 'Nowa katedra' : 'Edycja katedry'


    return (
        <main>
            <h2>{pageTitle}</h2>
            <form className="form" onSubmit={handleSubmit}>
                <FormInput type={"text"} label={"Imię"} name={"name"} value={dept.name}
                           onChange={handleChange}
                           error={errors.name} placeholder={"2-60 znaków"} required/>

                <FormInput type={"number"} label={"Ilość godzin"} name={"totalHours"} value={dept.totalHours}
                           onChange={handleChange}
                           error={errors.totalHours} placeholder={"2-60 znaków"} required/>

                <FormInput type={"text"} label={"Opis"} name={"description"} value={dept.description}
                           onChange={handleChange}
                           error={errors.description} required/>
                <div className="form-buttons">
                    <FormButtons
                        formMode={currentFormMode}
                        error={globalErrorMessage}
                        cancelPath={"/departments"}
                    />
                </div>

            </form>
        </main>
    )
}

export default DepartmentForm