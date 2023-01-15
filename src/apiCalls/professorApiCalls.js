import {professorDetailsList, professorList} from './professorApiMockData';


export function getProfessorApiCall() {
    return professorList;
}

export function getProfessorByIdApiCall(profId) {
    return professorDetailsList.find(prof => prof._id === profId);
}

