"use client"
import NewEmployeeForm from "@/widgets/NewEmployeeForm";
import PageShell from "@/components/layout/pageShell";
import { useEmployees } from "@/hooks/useEmployees";

export default function EmployeesClient() {
    const { addEmployee, loading } = useEmployees();

    return (
        <PageShell 
            title="Employees"
            leftTitle="Your Employees" 
            rightTitle="Add Employee"
            rightContent={<NewEmployeeForm onSubmit={addEmployee} loading={loading}/>}
        />
    );
}