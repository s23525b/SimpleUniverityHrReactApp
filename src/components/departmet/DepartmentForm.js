import { Link } from "react-router-dom"

function DepartmentForm() {
    return (
        <main>
            <h2>Nowa katedra</h2>
            <form className="form">
                <label htmlFor="name">Nazwa:<abbr title="required" aria-label="required">*</abbr></label>
                <input type="text" name="name" id="name" placeholder="np. matematyka" value="" />
                <span id="errorName" className="errors-text"></span>

                <label htmlFor="totalHours">Ilosc godzin:<abbr title="required" aria-label="required">*</abbr></label>
                <input type="number" name="totalHours" id="totalHours" placeholder="np. 30" value="" />
                <span id="errorTotalHours" className="errors-text"></span>

                <label htmlFor="description">Opis:<abbr title="required" aria-label="required">*</abbr></label>
                <input type="text" name="description" id="description" value="" />
                <span id="errorEmail" className="errors-text"></span>


                <div className="form-buttons">
                    <p id="errorsSummary" className="errors-text"></p>
                    <input className="form-button-submit" type="submit" value="Dodaj" />
                    <Link to="/departments" className="form-button-cancel">Anuluj</Link>
                </div>
            </form>
        </main >
    )
}

export default DepartmentForm