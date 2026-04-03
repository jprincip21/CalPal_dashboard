import { formatDate } from "@/lib/utils";
import { Schedule } from "@/types/schedule";
import { useShifts } from "@/hooks/useShifts";
import ShiftCell from "@/widgets/ShiftCell";

interface ShiftGridProps {
    schedule: Schedule;
}

const DAYS = ["SUN", "MON", "TUES", "WED", "THU", "FRI", "SAT"];

export default function ShiftGrid({ schedule }: ShiftGridProps) {

    const { employees, loading } = useShifts(schedule.id, schedule.location_id)

    function getWeekDates(): string[] {
        const dates: string[] = [];
        const start = new Date(schedule.start_date);
        for (let i = 0; i < 7; i++) {
            const date = new Date(start);
            date.setDate(start.getDate() + i);
            dates.push(formatDate(date.toString()));
        }
        return dates;
    }

    if (loading) {
        return (<p className="text-sm text-slate-400 py-4"> Loading...</p>)
    }

    if (employees.length === 0) {
        return (<p className="text-sm text-slate-400 py-4"> No Employees assigned to this location!</p>)
    }

    const weekDates = getWeekDates();

    return (
        <div className="overflow-x-auto mt-6 w-full">
            <table className="w-full text-sm border-collapse">
                {/* Column Headers */}
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

                <tbody>
                    {employees.map((employee, index) => (
                        <tr
                            key={employee.id}
                            className={index !== employees.length - 1 ? "border-b border-slate-200" : ""}>
                            <td className="py-3 pr-4 font-medium text-slate-700 border-b border-slate-200">
                                    {employee.first_name} {employee.last_name}
                            </td>
                            {weekDates.map(date => (
                                <ShiftCell />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}