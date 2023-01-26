import {Link, useNavigate, useParams} from 'react-router-dom'
import {getDepartmentsApiCall} from '../../apiCalls/departmentApiCalls'
import {addProfessorApiCall, getProfessorApiCall, updateProfessorApiCall} from "../../apiCalls/professorApiCalls";
import FormMode from "../../helpers/formHelper";
import {useEffect, useState} from "react";
import {addLectureApiCall, updateLectureApiCall, getLectureByIdApiCall} from "../../apiCalls/lectureApiCalls";
import FormInput from "../form/FormInput";
import FormButtons from "../form/FormButtons";
import {checkEmail, checkNumber, checkRequired, checkTextLengthRange} from "../../helpers/validationCommon";

function LectureForm() {
    const allProfs = getProfessorApiCall()
    const allDepts = getDepartmentsApiCall()
    const [lecture, setLect] = useState({
        name: "",
        dateFrom: "",
        dateTo: "",
        duration: ""
    })
    const [errors, setErrors] = useState({
        name: "",
        dateFrom: "",
        dateTo: "",
        duration: ""
    })

    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(null)
    const [message, setMessage] = useState(null)
    const [redirect, setRedirect] = useState(false)

    const {lectId} = useParams();
    const currentFormMode = lectId ? FormMode.EDIT : FormMode.NEW;
    const navigate = useNavigate();


    function fetchLectureDetails() {
        getLectureByIdApiCall(lectId)
            .then(res => res.json())
            .then(
                (data) => {
                    if (data.message) {
                        setMessage(data.message)
                    } else {
                        setLect(data)
                        setMessage(null)
                    }
                    setIsLoaded(true)
                },
                (error) => {
                    setError(error)
                    setIsLoaded(true)
                })
    }

    useEffect(() => {
        if (currentFormMode === FormMode.EDIT) {
            fetchLectureDetails()
        }
    }, [])

    function validateField(fieldName, fieldValue) {
        let errorMessage = ''
        if (fieldName === 'name') {
            if (!checkRequired(fieldValue)) {
                errorMessage = 'Pole jest wymagane'
            } else if (!checkTextLengthRange(fieldValue, 2, 60)) {
                errorMessage = 'Pole powinno zawierać od 2 do 60 znaków'
            }
        }
        if (fieldName === 'dateFrom') {
            if (!checkRequired(fieldValue)) {
                errorMessage = 'Pole jest wymagane'
            }
        }
        if (fieldName === 'dateTo') {
            if (!checkRequired(fieldValue)) {
                errorMessage = "Pole jest wymagane";
            }
        }
        if (fieldName === 'duration') {
            if (!checkRequired(fieldValue)) {
                errorMessage = 'Pole jest wymagane'
            } else if (!checkNumber(fieldValue)) {
                errorMessage = "Pole powinno zawierać liczbę"
            }
        }
        return errorMessage;
    }

    function handleChange(event) {
        const {name, value} = event.target
        const errorMessage = validateField(name, value)
        setError({
            ...errors, [name]: errorMessage
        })
        setLect({
            ...lecture, [name]: value
        })
    }

    function validateForm() {
        let isValid = true
        let serverFieldsErrors = {...errors}
        Object.entries(lecture).forEach(([key, value]) => {
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
                promise = addLectureApiCall(lecture)
            } else if (currentFormMode === FormMode.EDIT) {
                promise = updateLectureApiCall(lectId, lecture)
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
            navigate('/lectures')
        }
    }, [redirect])

    const errorsSummary = hasErrors() ? 'Formularz zawiera błędy.' : ''
    const fetchError = error ? `Błąd: ${error.message}` : ''
    const globalErrorMessage = errorsSummary || fetchError || message
    const pageTitle = currentFormMode === FormMode ? 'Nowy wykład' : 'Edycja wykładu'


    return (
        <main>
            <h2>{pageTitle}</h2>
            <form className="form" onSubmit={handleSubmit}>
                <FormInput type={"text"} label={"Nazwa"} name={"name"} value={lecture.name}
                           onChange={handleChange}
                           error={errors.name} placeholder={"2-60 znaków"} required/>

            {/*    <label htmlFor="prof_id">Profesor</label>
                <select name={"prof_id"} onChange={handleChange}>
                    <option value="">---Wybierz profesora---</option>
                    {allProfs.map(prof =>
                        (<option key={prof._id} value={prof._id} label={prof.firstName + ' ' + prof.lastName}
                                 selected={lecture.prof_id === prof._id}></option>
                        ))
                    }
                </select>*/}


                <FormInput type={"date"} label={"Data od"} name={"dateFrom"} value={lecture.dateFrom}
                           onChange={handleChange}
                           error={errors.dateFrom} required/>

                <FormInput type={"date"} label={"Data do"} name={"dateTo"} value={lecture.dateTo}
                           onChange={handleChange}
                           error={errors.dateTo} required/>

                <FormInput type={"number"} label={"Czas trwania"} name={"duration"} value={lecture.duration}
                           onChange={handleChange}
                           error={errors.duration} required/>

                <div className="form-buttons">
                    <FormButtons
                        formMode={currentFormMode}
                        error={globalErrorMessage}
                        cancelPath={"/lectures"}
                    />
                </div>
            </form>
        </main>
    )
}

export default LectureForm