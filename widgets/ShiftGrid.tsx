export default function ShiftGrid() {

    const DAYS = ["SUN", "MON", "TUES", "WED", "THU", "FRI", "SAT"];

    return (
        <div className="overflow-x-auto mt-6 w-full">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b-2 border-slate-200">
                        <th className="pb-3 px-2 text-left font-semibold text-slate-500 uppercase tracking-wider text-xs min-w-35">Employee</th>
                        {DAYS.map((day) => (
                            <th key={day} className="pb-3 px-2 text-left font-semibold text-slate-800 uppercase tracking-wider text-xs min-w-35">
                                {day}
                            </th>
                        ))}
                    </tr>
                </thead>
            </table>
        </div>
    )
}