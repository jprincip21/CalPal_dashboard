"use client"
import { useState } from "react";
import PageShell from "@/components/layout/pageShell";
import EmployeeTable from "@/widgets/EmployeeTable";
import { useEmployees } from "@/hooks/useEmployees";
import { Employee } from "@/types/employee";
import EmployeeForm from "@/widgets/EmployeeForm";
import { useLocations } from "@/hooks/useLocation";

export default function EmployeesClient() {
    const { locations } = useLocations();
    const { employees, loading, addEmployee, editEmployee, removeEmployee } = useEmployees();
    const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
    
    const handleSelect = (employee: Employee) => {
        setSelectedEmployee(employee);
    };

    return (
        <PageShell
            title="Employees"
            leftTitle="Your Employees"
            leftContent={
                <EmployeeTable
                    employees={employees}
                    onSelect={handleSelect}
                    selectedId={selectedEmployee?.id}
                />
            }
            rightTitle={selectedEmployee ? `Editing: ${selectedEmployee.first_name} ${selectedEmployee.last_name}` : "Add Employee"}
            rightContent={<EmployeeForm
                key={selectedEmployee?.id ?? "new-employee"}
                mode={selectedEmployee ? "edit" : "create"}
                initialData={selectedEmployee ?? undefined}
                locations={locations}
                loading={loading}
                onCancel={() => setSelectedEmployee(null)}
                onSubmit={async (data) => {
                    if (selectedEmployee) {
                        await editEmployee(selectedEmployee.id, data);
                        setSelectedEmployee(null);
                    } else {
                        await addEmployee(data);
                    }
                }}
                onDelete={async () => {
                    if (selectedEmployee) {
                    await removeEmployee(selectedEmployee.id);
                    setSelectedEmployee(null)
                    }
                }}
            />}
        />
    );
}