import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Strona główna</Link></li>
                <li><Link to="/professors">Profesorowie</Link></li>
                <li><Link to="/lectures">Wykłady</Link></li>
                <li><Link to="/departments">Katedry</Link></li>

            </ul>
        </nav>
    )
}

export default Navigation
