// CalPal Dashboard - useShifts Hook
// Jonathan Principato (400527847)
// Manages shift state and calls the scheduleApi functions

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Shift, ShiftRequest } from "@/types/shift";
import { getShiftsByScheduleId, createShift, updateShift, deleteShift } from "@/lib/api/shiftApi";
import { Employee } from "@/types/employee";
import { getEmployeesByLocationId } from "@/lib/api/employeeApi";

export const useShifts = (schedule_id: number, location_id: number) => {
    const [shifts, setShifts] = useState<Shift[]>([]);
    const [employees, setEmployees] = useState<Employee[]>([])
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchShifts();
        fetchEmployees();
    }, [schedule_id, location_id]);

    const fetchShifts = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getShiftsByScheduleId(schedule_id);
            setShifts(data);
        } catch (e) {
            const message = e instanceof Error ? e.message : "Failed to load shifts";
            setError(message);
            toast.error(message);
        } finally {
            setLoading(false);
        };
    };


    const fetchEmployees = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getEmployeesByLocationId(location_id);
            setEmployees(data)
        } catch (e) {
            const message = e instanceof Error ? e.message : "Failed to load employees";
            setError(message);
            toast.error(message);
        } finally {
            setLoading(false);
        };
    };

    const addShift = async (data: ShiftRequest) => {
        setError(null);
        try {
            await createShift(data);
            await fetchShifts();
            toast.success("Shift created successfully");
        } catch (e) {
            const message = e instanceof Error ? e.message : "Failed to create shift";
            setError(message);
            toast.error(message);
        };
    };
    const editShift = async (id: number, data: ShiftRequest) => {
        setError(null);
        try {
            await updateShift(id, data);
            await fetchShifts();
            toast.success("Shift updated successfully");
        } catch (e) {
            const message = e instanceof Error ? e.message : "Failed to update shift";
            setError(message);
            toast.error(message);
        };
    };

    const removeShift = async (id: number) => {
        setError(null);
        try {
            await deleteShift(id);
            await fetchShifts();
            toast.success("Shift deleted successfully");
        } catch (e) {
            const message = e instanceof Error ? e.message : "Failed to delete shift";
            setError(message);
            toast.error(message);
        };
    };

    // Helper to get a shift for a given employee id
    // Returns the first shift which matches employee id and date we are looking for
    const getShiftForEmployee = (employee_id: number, date: string): Shift | undefined => {
        return shifts.find(shift => {
            const shiftDate = shift.start_datetime.split("T")[0]; // Date Format: 2026-04-02T09:00:00
            return shift.employee_id === employee_id && shiftDate === date;
        })
    }

    return {
        shifts,
        employees,
        loading,
        error,
        addShift,
        editShift,
        removeShift,
        getShiftForEmployee

    };

};