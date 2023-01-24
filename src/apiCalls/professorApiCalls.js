const professorsBaseUrl = 'http://localhost:3000/api/professors';

export function getProfessorApiCall() {
    //console.log(fetch(professorsBaseUrl));
    return fetch(professorsBaseUrl); //promise
}


export function getProfessorByIdApiCall(profId) {
    const url = `${professorsBaseUrl}/${profId}`;
    return fetch(url); //promise
}

