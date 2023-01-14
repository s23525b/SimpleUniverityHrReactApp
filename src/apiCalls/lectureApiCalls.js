import {lectureDetailsList, lectureList} from "./lectureApiMockData";

export function getLectureApiCall() {
    return lectureList;
}

export function getLectureByIdApiCall(lectureId) {
    return lectureDetailsList.find(lecture => lect._id === lectId)
}
