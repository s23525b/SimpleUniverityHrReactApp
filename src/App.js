import Header from './components/fragments/Header';
import Navigation from './components/fragments/Navigation';
import MainContent from "./components/other/MainContent";
import Footer from './components/fragments/Footer'

import {Routes, Route} from 'react-router-dom'
import ProfessorList from './components/professor/ProfessorList'
import ProfessorDetails from "./components/professor/ProfessorDetails";




function App() {


    return (
        <>
            <Header/>
            <Navigation/>
            <Routes>
                <Route path="/" element={<MainContent/>}/>
                <Route path="/professors">
                    <Route index={true} element={<ProfessorList/>}/>
                    <Route path="details/:profId" element={<ProfessorDetails/>}/>
                </Route>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
