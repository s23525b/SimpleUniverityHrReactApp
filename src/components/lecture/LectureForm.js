import {Link} from 'react-router-dom'
import {getDepartmentsApiCall} from '../../apiCalls/departmentApiCalls'
import {getProfessorApiCall} from "../../apiCalls/professorApiCalls";

function LectureForm() {
    const allProfs = getProfessorApiCall()
    const allDepts = getDepartmentsApiCall()

    return (
        <main>
            <h2>Nowy wykład</h2>
            <form className="form">
                <label htmlFor="professor">Profesor: <abbr title="required" aria-label="required">*</abbr></label>
                <select id="professor" name="profId" required>
                    <option value="">--- Wybierz profesora ---</option>
                    {allProfs.map(prof =>
                        (<option key={prof._id} value={prof._id} label={prof.firstName + " " + prof.lastName}></option>)
                    )}
                </select>
                <span id="errorProfessor" className="errors-text"></span>

                <label htmlFor="department">Katedra: <abbr title="required" aria-label="required">*</abbr></label>
                <select id="department" name="deptId" required>
                    <option value="">--- Wybierz katedrę ---</option>
                    {allDepts.map(dept =>
                        (<option key={dept._id} value={dept._id} label={dept.name}></option>)
                    )}
                </select>
                <span id="errorDepartment" className="errors-text"></span>

                <label htmlFor="duration">Czas trwania:</label>
                <input type="number" name="duration" value="" id="duration" placeholder="np. 120"/>
                <span id="errorDuration" className="errors-text"></span>

                <label htmlFor="dateFrom">Data od:</label>
                <input type="date" name="dateFrom" value="" id="dateFrom"/>
                <span id="errorDateFrom" className="errors-text"></span>

                <label htmlFor="dateTo">Data do:</label>
                <input type="date" name="dateTo" value="" id="dateTo"/>
                <span id="errorDateTo" className="errors-text"></span>

                <div className="form-buttons">
                    <p id="errorsSummary" className="errors-text"></p>
                    <input className="form-button-submit" type="submit" value="Dodaj"/>
                    <Link to="/lecture" className="form-button-cancel">Anuluj</Link>
                </div>

            </form>
        </main>
    )
}

export default LectureForm