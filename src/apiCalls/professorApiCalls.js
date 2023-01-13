import {professorList, professorDetailsList} from './professorApiMockData'

export function getProfessorApiCall() {
    return professorList;
}

export function getProfessorByIdApiCall(profId) {
    const prof = professorDetailsList.find(prof => prof._id === profId)
    return prof;
}
