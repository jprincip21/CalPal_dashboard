import { Schedule } from "@/types/schedule";

interface ShiftGridProps {
    schedule: Schedule;
}

const DAYS = ["SUN", "MON", "TUES", "WED", "THU", "FRI", "SAT"];

export default function ShiftGrid({ schedule }: ShiftGridProps) {

    function getWeekDates(): string[] {
        const dates: string[] = [];
        const start = new Date(schedule.start_date);
        for (let i = 0; i < 7; i++) {
            const date = new Date(start);
            date.setDate(start.getDate() + i);
            dates.push(date.toLocaleDateString("en-CA"));
        }
        return dates;
    }

    const weekDates = getWeekDates();

    return (
        <div className="overflow-x-auto mt-6 w-full">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b-2 border-slate-200">
                        <th className="pb-3 px-2 text-left font-semibold text-slate-500 uppercase tracking-wider text-xs min-w-35">Employee</th>
                        {weekDates.map((date, i) => (
                            <th key={date} className="pb-3 px-2 text-left font-semibold text-slate-800 uppercase tracking-wider text-xs min-w-35">
                                <div className="">{DAYS[i]}</div>
                                <div className="pt-1 text-slate-500 font-normal">{date}</div>
                            </th>
                        ))}
                    </tr>
                </thead>
            </table>
        </div>
    )
}