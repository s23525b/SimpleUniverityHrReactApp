const lecturesBaseUrl = 'http://localhost:3000/api/lectures'

export function getLectureApiCall() {
    return fetch(lecturesBaseUrl);
}

export function getLectureByIdApiCall(lectId) {
    const url = `${lecturesBaseUrl}/${lectId}`;
    return fetch(url); //promise
}

export function addLectureApiCall(lecture) {
    const lectureString = JSON.stringify(lecture);
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: lectureString
    }
    return fetch(lecturesBaseUrl, options);
}

export function updateLectureApiCall(lectId, lect) {
    const url = `${lecturesBaseUrl}/${lectId}`;
    const deptString = JSON.stringify(lect);
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: deptString
    }
    return fetch(url, options);
}
