import {departmentDetailsList, departmentList} from './departmentApiMockData'

export function getDepartmentsApiCall() {
    return departmentList;
}

export function getDepartmentByIdApiCall(deptId) {
    return departmentDetailsList.find(dept => dept._id === deptId);
}