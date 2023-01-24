const lecturesBaseUrl = 'http://localhost:3000/api/lectures'

export function getLectureApiCall() {
    return fetch(lecturesBaseUrl);
}

export function getLectureByIdApiCall(lectId) {
    const url = `${lecturesBaseUrl}/${lectId}`;
    return fetch(url); //promise
}
