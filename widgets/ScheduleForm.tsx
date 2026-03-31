"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Calendar } from "lucide-react";
import { Location } from "@/types/location";
import { ScheduleRequest } from "@/types/schedules";

interface ScheduleFormProps {
    locations: Location[];
    loading: boolean;
    onSubmit: (data: ScheduleRequest) => Promise<void>;
}

export default function ScheduleForm({ locations, loading, onSubmit }: ScheduleFormProps) {
    const [dateError, setDateError] = useState<string | null>(null);

    function getNextSunday(): string {
        const today = new Date();
        const day = today.getDay();
        const diff = day === 0 ? 7: 7 - day;
        const nextSunday = new Date(today)
        nextSunday.setDate(today.getDate() + diff)
        return nextSunday.toLocaleDateString('en-CA');
    };

    function getNextSaturday(sundayStr: string): string {
        const sunday = new Date(sundayStr);
        const saturday = new Date(sunday);
        saturday.setDate(saturday.getDate() + 6)
        return saturday.toLocaleDateString('en-CA');   
    };

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setDateError(null);
        const form = event.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const startDate = new Date(data.start_date as string);
        console.log(startDate.getDay())

        if (startDate.getDay() !== 6) { // 0 = Sunday
            setDateError("Start date must be a Sunday");
            return
        }

        const payload: ScheduleRequest = {
            location_id: parseInt(data.location_id as string),
            start_date: data.start_date as string,
            end_date: getNextSaturday(data.start_date as string)
        };

        await onSubmit(payload);
            form.reset()
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md space-y-6">
            <div className="flex items-center gap=2 border-b border-slate-100 pb-2">
                <Calendar className="w-4 h-4 text-lavender-dark" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">New Schedule</h3>
            </div>

            <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700">Location</label>
                <Select name="location_id" required>
                <option value="">Select a location</option>
                    {locations.map(location => (
                        <option key={location.id} value={location.id}>{location.name}</option>
                    ))}
                </Select>
            </div>

            <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700">Start Date (Sunday)</label>
                <Input
                    type="date"
                    name="start_date"
                    defaultValue={getNextSunday()}
                    required
                />
                {dateError && (
                    <p className="text-xs text-red-500 mt-1">{dateError}</p>
                )}
                <p className="text-xs text-slate-400">Schedule will run Sunday to Saturday (1 week)</p>
            </div>

                <Button type="submit" disabled={loading} className="w-full h-11">
                    {loading ? "Creating..." : "Create Schedule"}
                </Button>
        </form>
    )
}

