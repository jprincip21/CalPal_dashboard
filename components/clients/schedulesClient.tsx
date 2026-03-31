"use client"
import { useState } from "react";
import { useSchedules } from "@/hooks/useSchedule";
import { useLocations } from "@/hooks/useLocation";
import { Schedule } from "@/types/schedules";
import ScheduleTable from "@/widgets/ScheduleTable";
import ScheduleForm from "@/widgets/ScheduleForm";
// import ScheduleDetail from "@/widgets/ScheduleDetail";
import { Button } from "@/components/ui/button";

type View = "table" | "create" | "detail";

export default function SchedulesClient() {
    const { schedules, loading, addSchedule, removeSchedule} = useSchedules();
    const { locations } = useLocations();
    const [view, setView] = useState<View>("table");
    const [selectedSchedule, setSelectedSchedule] = useState<Schedule | null>(null);

    const handleSelect = (schedule: Schedule) => {
        setSelectedSchedule(schedule);
        setView("detail");
    };

    return (
        <div className="flex flex-col gap-8 p-6 min-h-full rounded-xl bg-slate-50 shadow-sm">

            {/* Header */}
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-lavender-dark tracking-tight">Schedules</h1>
                {view === "table" && (
                    <Button type="button" onClick={() => setView("create")} className="flex items-center p-2 gap-2 h-11">Create Schedule</Button>
                            )}
                {(view === "create" || view === "detail") && (
                    <Button type="button" 
                        onClick={() => {
                            setView("table");
                            setSelectedSchedule(null);
                            }} 
                            className="flex items-center p-2 gap-2 h-11 bg-red-400 hover:bg-red-500">Back to Schedules</Button>
                )}
            </div>

            {/* Body */}
            <div className="bg-white rounded-lg shadow-sm border-t-4 border-lavender-primary p-6">
                {view === "table" && (
                    <ScheduleTable
                        schedules={schedules}
                        onSelect={handleSelect}
                        selectedId={selectedSchedule?.id}
                    />
                )}
            </div>
        </div>
    ) 
}