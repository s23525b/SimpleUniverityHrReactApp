import { Link } from "react-router-dom"

function ProfessorForm() {
    return (
        <main>
            <h2>Nowy profesor</h2>
            <form className="form">
                <label htmlFor="firstName">Imię:<abbr title="required" aria-label="required">*</abbr></label>
                <input type="text" name="firstName" id="firstName" placeholder="2-60 znaków" value="" />
                <span id="errorFirstName" className="errors-text"></span>

                <label htmlFor="lastName">Nazwisko:<abbr title="required" aria-label="required">*</abbr></label>
                <input type="text" name="lastName" id="lastName" placeholder="2-60 znaków" value="" />
                <span id="errorLastName" className="errors-text"></span>

                <label htmlFor="email">Email:<abbr title="required" aria-label="required">*</abbr></label>
                <input type="email" name="email" id="email" placeholder="np. nazwa@domena.pl" value="" />
                <span id="errorEmail" className="errors-text"></span>

                <label htmlFor="specialization">Specjalizacja:<abbr title="required" aria-label="required">*</abbr></label>
                <input type="text" name="specialization" id="specialization" placeholder="np. matematyka" value="" />
                <span id="errorSpecialization" className="errors-text"></span>

                <div className="form-buttons">
                    <p id="errorsSummary" className="errors-text"></p>
                    <input className="form-button-submit" type="submit" value="Dodaj" />
                    <Link to="/professors" className="form-button-cancel">Anuluj</Link>
                </div>
            </form>
        </main >
    )
}

export default ProfessorForm