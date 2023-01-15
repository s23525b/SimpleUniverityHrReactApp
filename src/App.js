import Header from './components/fragments/Header';
import Navigation from './components/fragments/Navigation';
import MainContent from "./components/other/MainContent";
import Footer from './components/fragments/Footer'

import {Routes, Route} from 'react-router-dom'
import ProfessorList from './components/professor/ProfessorList'
import ProfessorDetails from "./components/professor/ProfessorDetails";
import ProfessorForm from "./components/professor/ProfessorForm";
import LectureList from "./components/lecture/LectureList";
import LectureDetails from "./components/lecture/LectureDetails";
import LectureForm from "./components/lecture/LectureForm";
import DepartmentList from "./components/departmet/DepartmentList";
import DepartmentForm from "./components/departmet/DepartmentForm";
import DepartmentDetails from "./components/departmet/DepartmentDetails";


function App() {


    return (
        <>
            <Header/>
            <Navigation/>
            <Routes>
                <Route path="/" element={<MainContent/>}/>

                <Route path="professors">
                    <Route index={true} element={<ProfessorList/>}/>
                    <Route path="details/:profId" element={<ProfessorDetails/>}/>
                    <Route path="add" element={<ProfessorForm/>}/>
                    <Route path="edit/:profId" element={<ProfessorForm/>}/>
                </Route>

                <Route path="lectures">
                    <Route index={true} element={<LectureList/>}/>
                    <Route path="details/:lectId" element={<LectureDetails/>}/>
                    <Route path="edit/:lectId" element={<LectureForm/>}/>
                    <Route path="add" element={<LectureForm/>}/>
                </Route>

                <Route path="departments">
                    <Route index={true} element={<DepartmentList/>}/>
                    <Route path="details/:deptId" element={<DepartmentDetails/>}/>
                    <Route path="edit/:deptId" element={<DepartmentForm/>}/>
                    <Route path="add" element={<DepartmentForm/>}/>
                </Route>

            </Routes>
            <Footer/>
        </>
    );
}

export default App;
