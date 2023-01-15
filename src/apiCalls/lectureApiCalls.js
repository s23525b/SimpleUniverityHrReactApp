import {lectureDetailsList} from "./lectureApiMockData";

export function getLectureApiCall() {
    return lectureDetailsList;
}

export function getLectureByIdApiCall(lectId) {
    return lectureDetailsList.find(lect => lect._id === lectId)
}
