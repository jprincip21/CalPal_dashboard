"use client"
import { Employee } from "@/types/employee";

interface EmployeeTableProps {
    employees: Employee[];
    onSelect: (employee: Employee) => void;
    selectedId?: number | null;
}

export default function EmployeeTable({ employees, onSelect, selectedId }: EmployeeTableProps) {
    return (
        <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-left">
                <thead>
                    <tr className="border-b border-slate-200">
                        <th className="pb-3 font-semibold text-slate-500 uppercase tracking-wider text-xs">Full Name</th>
                        <th className="pb-3 font-semibold text-slate-500 uppercase tracking-wider text-xs">Email</th>
                        <th className="pb-3 font-semibold text-slate-500 uppercase tracking-wider text-xs">Phone</th>
                        <th className="pb-3 font-semibold text-slate-500 uppercase tracking-wider text-xs">Wage Type</th>
                        <th className="pb-3 font-semibold text-slate-500 uppercase tracking-wider text-xs">Wage</th>
                        <th className="pb-3 font-semibold text-slate-500 uppercase tracking-wider text-xs">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr 
                            key={employee.id}
                            onClick={() => onSelect(employee)}
                            className={`border-b border-slate-100 cursor-pointer transition-colors hover:bg-slate-50
                                ${selectedId === employee.id ? "bg-lavender-light" : ""}`}
                        >
                            <td className="py-3 pr-4 font-medium text-slate-700">
                                {employee.first_name} {employee.last_name}
                            </td>
                            <td className="py-3 pr-4 text-slate-600">{employee.email}</td>
                            <td className="py-3 pr-4 text-slate-600">{employee.phone_number}</td>
                            <td className="py-3 pr-4 text-slate-600">{employee.wage_type}</td>
                            <td className="py-3 pr-4 text-slate-600">${employee.wage.toFixed(2)}</td>
                            <td className="py-3">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium
                                    ${employee.is_active 
                                        ? "bg-green-100 text-green-700" 
                                        : "bg-red-100 text-red-700"}`}>
                                    {employee.is_active ? "Active" : "Inactive"}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {employees.length === 0 && (
                <p className="text-center text-slate-400 py-8">No employees found</p>
            )}
        </div>
    )
}