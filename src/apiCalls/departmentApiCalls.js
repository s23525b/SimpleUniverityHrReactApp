const departmentBaseUrl = 'http://localhost:3000/api/departments';

export function getDepartmentsApiCall() {
    return fetch(departmentBaseUrl); //promise
}

export function getDepartmentByIdApiCall(deptId) {
    const url = `${departmentBaseUrl}/${deptId}`;
    return fetch(url); //promise
}