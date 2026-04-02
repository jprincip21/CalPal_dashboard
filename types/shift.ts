export interface Shift {
    id: number
    schedule_id: number
    employee_id: number
    start_datetime: string
    end_datetime: string
}

// Used for POST and PUT requests where no id is required
export type ShiftRequest = Omit<Shift, "id">