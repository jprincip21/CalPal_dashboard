// CalPal Dashboard - useSchedules Hook
// Jonathan Principato (400527847)
// Manages schedules state and calls the scheduleApi functions

import { useState, useEffect } from "react";
import { Schedule, ScheduleRequest } from "@/types/schedules";
import { getSchedules, createSchedule, deleteSchedule } from "@/lib/api/scheduleApi";
import { toast } from "sonner";

export const useSchedules = () => {
    const [schedules, setSchedules] = useState<Schedule[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchSchedules();
    }, [])

    const fetchSchedules = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getSchedules();
            setSchedules(data);
        } catch (e) {
            const message = e instanceof Error ? e.message : "Failed to load schedules";
            setError(message);
            toast.error(message);
        } finally {
            setLoading(false);
        };
    };

    const addSchedule = async (data: ScheduleRequest) => {
        setError(null);
        try {
            await createSchedule(data);
            await fetchSchedules();
            toast.success("Schedule created successfully");
        } catch (e) {
            const message = e instanceof Error ? e.message : "Failed to create schedule";
            setError(message);
            toast.error(message);
        };
    };

    const removeSchedule = async (id: number) => {
        setError(null);
        try {
            await deleteSchedule(id)
            await fetchSchedules()
        } catch (e) {
            const message = e instanceof Error ? e.message : "Failed to delete schedule";
            setError(message);
            toast.error(message);
        };
    };

    return {
        schedules,
        loading,
        error,
        addSchedule,
        removeSchedule
    }

}