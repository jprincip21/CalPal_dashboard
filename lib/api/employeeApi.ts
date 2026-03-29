// CalPal Dashboard - Employee API
// Jonathan Principato (400527847)
// Handles all HTTP requests to the CalPal Employee endpoints

import {Employee, EmployeeRequest} from "@/types/employee";

const URL = "https://calpal-api.jprincip.me/employees"; // Should update to environment variable

export const getEmployees = async (): Promise<Employee[]> => {
    const response = await fetch(URL);

    if (!response.ok) {
        const error = await response.json()
        throw new Error(`Failed to fetch employees: ${response.status} | ${error.detail}`)
    };

    return response.json();
};

export const createEmployee = async (data: EmployeeRequest): Promise<void> => {
    const response = await fetch(URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        const error = await response.json()
        throw new Error(`Failed to create employee: ${response.status} | ${error.detail}`)
    };
};

export const updateEmployee = async (id: number, data: EmployeeRequest): Promise<void> => {
    const response = await fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });

     if (!response.ok) {
        const error = await response.json()
        throw new Error(`Failed to update employee: ${response.status} | ${error.detail}`)
    };
};

export const deleteEmployee = async (id: number): Promise<void> => {
    const response = await fetch(`${URL}/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        const error = await response.json()
        throw new Error(`Failed to delete employee: ${response.status} | ${error.detail}`)
    };
};