// CalPal Dashboard - Shift API
// Jonathan Principato (400527847)
// Handles all HTTP requests to the CalPal Shift endpoints

import { Shift, ShiftRequest } from "@/types/shifts";

const URL = "https://calpal-api.jprincip.me/shifts"

export const getShiftsByScheduleId = async (schedule_id: number ): Promise<Shift[]> => {
    const response = await fetch(`${URL}/schedule/${schedule_id}`);

    if (!response.ok) {
        const error = await response.json();
        throw new Error(`Failed to fetch shifts: ${response.status} | ${error.detail}`);
    };
    return response.json();
};

export const createShift = async (data: ShiftRequest): Promise<void> => {
    const response = await fetch(URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(`Failed to create shift: ${response.status} | ${error.detail}`);
    };
    return response.json();
};

export const updateShift = async (id: number, data: ShiftRequest): Promise<void> => {
    const response = await fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(`Failed to update shift: ${response.status} | ${error.detail}`);
    };
    return response.json();
};

export const deleteShift = async (id: number): Promise<void> => {
    const response = await fetch(`${URL}/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(`Failed to delete shift: ${response.status} | ${error.detail}`);
    };
    return response.json();
};