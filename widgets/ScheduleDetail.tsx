"use client"
import { Button } from "@/components/ui/button";
import { Schedule } from "@/types/schedules";
import { Calendar, MapPin } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface ScheduleDetailProps {
    schedule: Schedule;
    loading: boolean;
    onDelete: (id: number) => Promise<void>;
}

export default function ScheduleDetail({ schedule, loading, onDelete }: ScheduleDetailProps) {
    return (
        <div className="max-w-md space-y-6">
            
            {/* Schedule Info */}
            <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                    <Calendar className="w-4 h-4 text-lavender-dark" />
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Schedule Details</h3>
                </div>
                <div className="space-y-4">

                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        <span className="text-sm text-slate-500">Location</span>
                        <span className="text-sm font-medium text-slate-700" ml-auto>
                             {schedule.location_name ?? "Unknown"}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-lavender-dark" />
                        <span className="text-sm text-slate-500">Date Range</span>
                        <span className="text-sm font-medium text-slate-700" ml-auto>
                             {formatDate(schedule.start_date)} - {formatDate(schedule.end_date)}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500">State</span>
                        <span className={`ml-auto px-2 py-1 rounded-full text-xs font-medium
                            ${schedule.state === "draft"
                                ? "bg-slate-200 text-slate-600"
                                : schedule.state === "published"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-green-100 text-green-600"}`}>
                                {schedule.state.charAt(0).toUpperCase() + schedule.state.slice(1)}
                        </span>
                    </div>
                </div>
            </div>
            <Button
                    type="button"
                    disabled={loading}
                    onClick={() => {
                        if (confirm("Are you sure you want to delete this schedule?")) {
                            onDelete(schedule.id);
                        }
                    }}
                    className="w-full h-11 bg-red-400 hover:bg-red-500"
                >
                    {loading ? "Deleting..." : "Delete Schedule"}
            </Button>
        </div>
    )
}