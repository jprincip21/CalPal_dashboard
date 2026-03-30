// CalPal Dashboard - Location API
// Jonathan Principato (400527847)
// Handles all HTTP requests to the CalPal Location endpoints

import { Location, LocationRequest } from "@/types/location";

const URL = "https://calpal-api.jprincip.me/locations" // Should update to environment variable

export const getLocations = async (): Promise<Location[]> => {
    const response = await fetch(URL);

    if (!response.ok) {
        const error = await response.json();
        throw new Error(`Failed to fetch location: ${response.status} | ${error.detail}`);
    };

    return response.json();
};

export const createLocation = async (data: LocationRequest): Promise<void> => {
    const response = await fetch(URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(`Failed to create location: ${response.status} | ${error.detail}`);
    };
};

export const updateLocation = async (id: number, data: LocationRequest): Promise<void> => {
    const response = await fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(`Failed to updat location: ${response.status} | ${error.detail}`);
    };
};

export const deleteLocation = async (id: number): Promise<void> => {
    const response = await fetch(`${URL}/${id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(`Failed to delete employee: ${response.status | error.detail}`)
    }
}