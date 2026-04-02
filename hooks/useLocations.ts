// CalPal Dashboard - useLocations Hook
// Jonathan Principato (400527847)
// Manages location state and calls the locationApi functions

import { useState, useEffect } from "react";
import { Location, LocationRequest } from "@/types/location";
import { getLocations, createLocation, updateLocation, deleteLocation } from "@/lib/api/locationApi";
import { toast } from "sonner";

export const useLocations = () => {
    const [locations, setLocations] = useState<Location[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // Fetch all locations on import
    useEffect(() => {
        fetchLocations();
    }, [])

    const fetchLocations = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getLocations();
            setLocations(data);
        } catch (e) {
            const message = e instanceof Error ? e.message : "Failed to load locations";
            setError(message);
            toast.error(message)
        } finally {
            setLoading(false);
        };
    };

    const addLocation = async (data: LocationRequest) => {
        setError(null);
        try {
            await createLocation(data);
            await fetchLocations();
            toast.success("Location created successfully");
        } catch (e) {
            const message = e instanceof Error ? e.message : "Failed to create location";
            setError(message);
            toast.error(message);
        };
    };

    const editLocation = async (id: number, data: LocationRequest) => {
        setError(null);
        try {
            await updateLocation(id, data);
            await fetchLocations();
            toast.success("Location updated successfully")
        } catch (e) {
            const message = e instanceof Error ? e.message : "Failed to update location";
            setError(message);
            toast.error(message);
        };
    };

    const removeLocation = async (id: number) => {
        setError(null)
        try {
            await deleteLocation(id);
            await fetchLocations();
            toast.success("Location deleted successfully");
        } catch (e) {
            const message = e instanceof Error ? e.message : "Failed to delete employee";
            setError(message);
            toast.error(message)
        };
    };

    return {
        locations,
        loading,
        error,
        fetchLocations,
        addLocation,
        editLocation,
        removeLocation
    }
}