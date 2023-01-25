const professorsBaseUrl = 'http://localhost:3000/api/professors';

export function getProfessorApiCall() {
    //console.log(fetch(professorsBaseUrl));
    return fetch(professorsBaseUrl); //promise
}


export function getProfessorByIdApiCall(profId) {
    const url = `${professorsBaseUrl}/${profId}`;
    return fetch(url); //promise
}

export function addProfessorApiCall(prof) {
    const profString = JSON.stringify(prof)
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: profString
    }
    return fetch(professorsBaseUrl, options); //promise
}

export function updateProfessorApiCall(profId, prof) {
    const url = `${professorsBaseUrl}/${profId}`
    const profString = JSON.stringify(prof)
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: profString
    }
    return fetch(url, options); //promise
}