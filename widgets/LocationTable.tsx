"use client"
import { Location } from "@/types/location"

interface LocationTableProps {
    locations: Location[];
    onSelect: (location: Location) => void;
    selectedId?: number | null;
}

export default function LocationsTable({ locations, onSelect, selectedId}: LocationTableProps) {
    return (
        <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-left">
                <thead>
                    <tr className="border-b border-slate-200">
                        <th className="pb-3 font-semibold text-slate-500 uppercase traking-wider text-xs">Location Name</th>
                        <th className="pb-3 font-semibold text-slate-500 uppercase traking-wider text-xs">Phone Number</th>
                        <th className="pb-3 font-semibold text-slate-500 uppercase traking-wider text-xs">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {locations.map(location => (
                        <tr 
                        key={location.id}
                        onClick={() => onSelect(location)}
                        className={`border-b border-slate-100 cursor-pointer transition-colors hover:bg-slate-50
                            ${selectedId === location.id ? "bg-lavender-light" : ""}`}
                        >
                            <td className="py-3 pr-4 font-medium text-slate-700">{location.name}</td>
                            <td className="py-3 pr-4 text-slate-600">{location.location_phone}</td>
                            <td className="py-3 pr-4 text-xs text-slate-600">{location.address}, {location.city}, {location.postal_zip_code}, {location.country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {locations.length === 0 && (
                <p className="text-center text-slate-400">No locations found</p>
            )}
        </div>
    )
}