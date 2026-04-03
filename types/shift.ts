export interface Shift {
    id: number
    schedule_id: number
    employee_id: number
    start_datetime: string // Date Format: 2026-04-02T09:00:00
    end_datetime: string
}

// Used for POST and PUT requests where no id is required
export type ShiftRequest = Omit<Shift, "id">