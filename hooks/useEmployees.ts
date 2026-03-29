"use client";
// CalPal Dashboard - useEmployees Hook
// Jonathan Principato (400527847)
// Manages employee state and calls the employeeApi functions

import { useState, useEffect } from "react";
import { Employee, EmployeeRequest } from "@/types/employee";
import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from "@/lib/api/employeeApi";
import { toast } from "sonner";

export const useEmployees = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // Fetch all employees on import
    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getEmployees();
            setEmployees(data);
        } catch (e) {
            const message = e instanceof Error ? e.message : "Failed to load employees"
            setError(message);
            toast.error(message);
        } finally {
            setLoading(false);
        };
        
    };

    const addEmployee = async (data: EmployeeRequest) => {
        setError(null);
        try {
            await createEmployee(data);
            await fetchEmployees();
            toast.success("Employee created successfully");
        } catch (e) {
            const message = e instanceof Error ? e.message : "Failed to create employee"
            setError(message);
            toast.error(message);
        };
    };

    const editEmployee = async (id: number, data: EmployeeRequest) => {
        setError(null);
        try {
            await updateEmployee(id, data);
            await fetchEmployees();
            toast.success("Employee updated successfully");
        } catch (e) {
            const message = e instanceof Error ? e.message : "Failed to update employee"
            setError(message);
            toast.error(message);
        };
    };

    const removeEmployee = async (id: number) => {
        setError(null);
        try {
            await deleteEmployee(id);
            await fetchEmployees();
            toast.success("Employee deleted successfully");
        } catch (e) {
            const message = e instanceof Error ? e.message : "Failed to delete employee"
            setError(message);
            toast.error(message);
        };
    };

    return {
        employees,
        loading,
        error,
        fetchEmployees,
        addEmployee,
        editEmployee,
        removeEmployee,
    }
}