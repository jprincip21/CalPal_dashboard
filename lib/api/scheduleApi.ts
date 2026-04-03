// CalPal Dashboard - Schedule API
// Jonathan Principato (400527847)
// Handles all HTTP requests to the CalPal Schedule endpoints

import { Schedule, ScheduleRequest } from "@/types/schedule";

const URL = "https://calpal-api.jprincip.me/schedules"

export const getSchedules = async (): Promise<Schedule[]> => {
    const response = await fetch(URL);

    if (!response.ok) {
        const error = await response.json();
        throw new Error(`Failed to fetch schedules: ${response.status} | ${error.detail}`);
    };
    return response.json();
};

export const createSchedule = async (data: ScheduleRequest): Promise<void> => {
    const response = await fetch(URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(`Failed to create schedule: ${response.status} | ${error.detail}`);
    };
}; 

export const deleteSchedule = async (id: number): Promise<void> => {
    const response = await fetch(`${URL}/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(`Failed to delete schedule: ${response.status} | ${error.detail}`);
    }
}

export const updateScheduleState = async (id: number, action: "publish" | "complete"): Promise<void> => {
    const response = await fetch(`${URL}/${id}/state`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ action })
        
    });

    if (!response.ok) {
        const error = await response.json()
        throw new Error(`Failed to update schedule: ${response.status} | ${error.detail}`)
    }
}