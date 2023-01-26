const departmentBaseUrl = 'http://localhost:3000/api/departments';

export function getDepartmentsApiCall() {
    return fetch(departmentBaseUrl); //promise
}

export function getDepartmentByIdApiCall(deptId) {
    const url = `${departmentBaseUrl}/${deptId}`;
    return fetch(url); //promise
}

export function addDepartmentApiCall(department) {
    const deptString = JSON.stringify(department);
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: deptString
    }
    return fetch(departmentBaseUrl, options); //promise
}

export function updateDepartmentApiCall(deptId, department) {
    const url = `${departmentBaseUrl}/${deptId}`;
    const deptStirng = JSON.stringify(department);
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: deptStirng
    }
    return fetch(url, options); //promise
}