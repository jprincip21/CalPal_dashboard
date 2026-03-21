import PageShell from "@/components/layout/pageShell";
import NewEmployeeForm from "@/widgets/NewEmployeeForm";

export default function EmployeesPage() {
   return (
   <PageShell 
        title="Employees"
        leftTitle="Your Employees" 
        rightTitle="Add Employee"
        rightContent={<NewEmployeeForm/>}
        />
   );
}