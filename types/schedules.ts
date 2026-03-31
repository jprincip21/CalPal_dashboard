export interface Schedule {
    id: number
    location_id: number
    location_name: string | null
    start_date: string
    end_date: string
    state: "draft" | "published" | "complete"
}
export type ScheduleRequest = {
    location_id: number
    start_date: string
    end_date: string
}