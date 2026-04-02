"use client"
import { useState } from "react";
import PageShell from "../layout/pageShell";
import LocationsTable from "@/widgets/LocationTable";
import { useLocations } from "@/hooks/useLocations";
import { Location } from "@/types/location";
import LocationForm from "@/widgets/LocationForm";

export default function LocationsClient() {
    const { locations, loading, addLocation, editLocation, removeLocation} = useLocations();
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

    const handleSelect = (location: Location) => {
        setSelectedLocation(location);
    };

    return (
        <PageShell
        title="Locations"
        leftTitle="Your Locations"
        leftContent={
            <LocationsTable
                locations={locations}
                onSelect={handleSelect}
                selectedId={selectedLocation?.id}
                />
        }
        rightTitle={selectedLocation ? `Editing ${selectedLocation.name}` : "Add Location"}
        rightContent={<LocationForm
            key={selectedLocation?.id ?? "new-location"}
            mode={selectedLocation ? "edit" : "create"}
            initialData={selectedLocation ?? undefined}
            loading={loading}
            onCancel={() => setSelectedLocation(null)}
            onSubmit={async (data) => {
                if (selectedLocation) {
                    await editLocation(selectedLocation.id, data);
                } else {
                    await addLocation(data);
                }
            }}
            onDelete={async () => {
                if (selectedLocation) {
                    await removeLocation(selectedLocation.id);
                    setSelectedLocation(null)
                }
            }}
            
        />}
    />)
}