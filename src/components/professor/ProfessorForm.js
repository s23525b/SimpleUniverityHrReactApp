import {Link, useNavigate, useParams} from "react-router-dom"
import FormMode from "../../helpers/formHelper";
import {useEffect, useState} from "react";
import {addProfessorApiCall, updateProfessorApiCall, getProfessorByIdApiCall} from "../../apiCalls/professorApiCalls";
import {checkRequired, checkTextLengthRange, checkEmail} from "../../helpers/validationCommon";

function ProfessorForm() {

    const [prof, setProf] = useState({
        'firstName': '',
        'lastName': '',
        'email': '',
        'specialization': ''
    })
    const [errors, setErrors] = useState({
        'firstName': '',
        'lastName': '',
        'email': '',
        'specialization': ''
    })

    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(null)
    const [message, setMessage] = useState(null)
    const [redirect, setRedirect] = useState(false)

    const {profId} = useParams();
    const currentFormMode = profId ? FormMode.EDIT : FormMode.NEW;
    const navigate = useNavigate();

    function fetchProfessorDetails() {
        getProfessorByIdApiCall(profId)
            .then(res => res.json())
            .then(
                (data) => {
                    if (data.message) {
                        setMessage(data.message)
                    } else {
                        setProf(data)
                        setMessage(null)
                    }
                    setIsLoaded(true)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                })
    }

    useEffect(() => {
        if (currentFormMode === FormMode.EDIT) {
            fetchProfessorDetails()
        }
    }, [])

    function validateField(fieldName, fieldValue) {
        let errorMessage = ''
        if (fieldName === 'firstName') {
            if (!checkRequired(fieldValue)) {
                errorMessage = 'Pole jest wymagane.'
            } else if (!checkTextLengthRange(fieldValue, 2, 60)) {
                errorMessage = 'Pole powinno zawierać od 2 do 60 znaków.'
            }
        }
        if (fieldName === 'lastName') {
            if (!checkRequired(fieldValue)) {
                errorMessage = 'Pole jest wymagane'
            } else if (!checkTextLengthRange(fieldValue, 2, 60)) {
                errorMessage = 'Pole powinno zawierać od 2 do 60 znaków'
            }
        }
        if (fieldName === 'email') {
            if (!checkRequired(fieldValue)) {
                errorMessage = "Pole jest wymagane";
            } else if (!checkTextLengthRange(fieldValue, 5, 60)) {
                errorMessage = "Pole powinno zawierać od 5 do 60 znaków";
            } else if (!checkEmail(fieldValue)) {
                errorMessage = "Pole powinno zawierać prawidłowy adres email";
            }
        }
        if (fieldName === 'specialization') {
            if (!checkRequired(fieldValue)) {
                errorMessage = "Pole jest wymagane";
            } else if (!checkTextLengthRange(fieldValue, 2, 60)) {
                errorMessage = "Pole powinno zawierać od 2 do 60 znaków"
            }
        }
        return errorMessage;
    }

    function handleChange(event) {
        const {name, value} = event.target;
        const errorMessage = validateField(name, value)
        setError({
            ...errors, [name]: errorMessage
        })
        setProf({
            ...prof, [name]: value
        })
    }

    function validateForm() {
        let isValid = true
        let serverFieldsErrors = {...errors}
        Object.entries(prof).forEach(([key, value]) => {
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
                promise = addProfessorApiCall(prof)
            } else if (currentFormMode === FormMode.EDIT) {
                promise = updateProfessorApiCall(profId, prof)
            }
            if (promise) {
                promise
                    .then(
                        (res) => {
                            response = res
                            if (response.status === 201 || response.status === 500) {
                                return res.json()
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
                        }
                    ),
                    (error) => {
                        setError(error)
                    }
            )
            }
        }
    }

    function hasErrors() {
        let hasErrors = false
        Object.values(errors).forEach((value) => {
            if (value.length > 0) {
                hasErrors = true
            }
        })
        return hasErrors
    }

    const errorsSummary = hasErrors() ? 'Formularz zawiera błędy.' : ''
    const fetchError = error ? `Błąd: ${error.message}` : ''
    const globalErrorMessage = errorsSummary || fetchError || message
    const pageTitle = currentFormMode === FormMode ? 'Nowy profesor' : 'Edycja pofesora'

    return (
        <main>
            <h2>{pageTitle}</h2>
            <form className="form">
                <label htmlFor="firstName">Imię:<abbr title="required" aria-label="required">*</abbr></label>
                <input type="text" name="firstName" id="firstName" placeholder="2-60 znaków" value=""/>
                <span id="errorFirstName" className="errors-text"></span>

                <label htmlFor="lastName">Nazwisko:<abbr title="required" aria-label="required">*</abbr></label>
                <input type="text" name="lastName" id="lastName" placeholder="2-60 znaków" value=""/>
                <span id="errorLastName" className="errors-text"></span>

                <label htmlFor="email">Email:<abbr title="required" aria-label="required">*</abbr></label>
                <input type="email" name="email" id="email" placeholder="np. nazwa@domena.pl" value=""/>
                <span id="errorEmail" className="errors-text"></span>

                <label htmlFor="specialization">Specjalizacja:<abbr title="required"
                                                                    aria-label="required">*</abbr></label>
                <input type="text" name="specialization" id="specialization" placeholder="np. matematyka" value=""/>
                <span id="errorSpecialization" className="errors-text"></span>

                <div className="form-buttons">
                    <p id="errorsSummary" className="errors-text"></p>
                    <input className="form-button-submit" type="submit" value="Dodaj"/>
                    <Link to="/professors" className="form-button-cancel">Anuluj</Link>
                </div>
            </form>
        </main>
    )
}

export default ProfessorForm