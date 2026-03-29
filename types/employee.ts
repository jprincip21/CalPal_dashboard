export interface Employee {
    id: number
    first_name: string
    last_name: string
    address: string
    city: string
    province_state_region: string
    country: string
    postal_zip_code: string
    phone_number: string
    email: string
    job_title: string
    wage_type: string
    wage: number
    hire_date: string
    is_active: boolean
}

// Used for POST and PUT requests where no id is required
export type EmployeeRequest = Omit<Employee, "id">