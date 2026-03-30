export interface Location {
    id: number
    name: string
    address: string
    city: string
    province_state_region: string
    country: string
    postal_zip_code: string
    location_phone: string
}

// Used for POST and PUT requests where no id is required
export type LocationRequest = Omit<Location, "id">