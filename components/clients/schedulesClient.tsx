"use client"
import { useState } from "react";
import { useSchedules } from "@/hooks/useSchedule";
import { useLocations } from "@/hooks/useLocation";
import { Schedule } from "@/types/schedules";
import ScheduleTable from "@/widgets/ScheduleTable";
import ScheduleForm from "@/widgets/ScheduleForm";
// import ScheduleDetail from "@/widgets/ScheduleDetail";
import { Button } from "@/components/ui/button";
import { Plus, ArrowLeft } from "lucide-react";

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
            <h1 className="text-3xl font-bold text-lavender-dark tracking-tight">Schedules</h1>
            <ScheduleTable 
                    schedules={schedules}
                    onSelect={handleSelect}
                    selectedId={selectedSchedule?.id}/>
        </div>
    )
    

}