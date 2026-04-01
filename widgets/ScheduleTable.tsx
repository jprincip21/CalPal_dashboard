"use client"
import { Schedule } from "@/types/schedules";
import { formatDate } from "@/lib/utils";

interface ScheduleTableProps {
    schedules: Schedule[];
    onSelect: (schedule: Schedule) => void;
    selectedId?: number | null;
}

export default function ScheduleTable ({ schedules, onSelect, selectedId}: ScheduleTableProps) {

    return (
        <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-left">
                <thead>
                    <tr className="border-b border-slate-200">
                        <th className="pb-3 px-2 font-semibold text-slate-500 uppercase tracking-wider text-xs">Location</th>
                        <th className="pb-3 px-2 font-semibold text-slate-500 uppercase tracking-wider text-xs">Dates</th>
                        <th className="pb-3 px-2 font-semibold text-slate-500 uppercase tracking-wider text-xs">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {schedules.map(schedule => (
                        <tr
                            key={schedule.id}
                            onClick={() => onSelect(schedule)} 
                            className={`border-b border-slate-100 cursor-pointer transition-colors hover:bg-slate-50
                                ${selectedId === schedule.id ? "bg-lavender-light" : ""}`}
                        >
                            <td className="py-3 px-2 font-medium text-slate-700">{schedule.location_name ?? "Not Set"}</td>
                            <td className="py-3 px-2 font-medium text-slate-700">{formatDate(schedule.start_date)} - {formatDate(schedule.end_date)}</td>
                            <td className="py-3 px-2">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium
                                ${schedule.state === "draft"
                                    ? "bg-slate-200 text-slate-600"
                                    : schedule.state === "published"
                                    ? "bg-blue-100 text-blue-700"
                                    : "bg-green-100 text-green-600"}`}>
                                    {schedule.state.charAt(0).toUpperCase() + schedule.state.slice(1)}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {schedules.length === 0 && (
                <p className="text-center text-slate-400 py-8">No schedules found</p>
            )}
        </div>
    )
}