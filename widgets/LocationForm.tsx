"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, House, MapPin } from "lucide-react";
import { Location, LocationRequest } from "@/types/location";

interface LocationFormProps {
    mode: "create" | "edit";
    initialData?: Location;
    onSubmit: (data: LocationRequest) => Promise<void>
    onDelete?: (id: number) => Promise<void>
    onCancel?: () => void;
    loading: boolean;
}

export default function LocationForm({
    mode,
    initialData,
    onSubmit,
    onDelete,
    onCancel,
    loading
}: LocationFormProps) {

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const payload: LocationRequest = {
        name: data.name as string,
        address: data.address as string,
        city: data.city as string,
        province_state_region: data.province_state_region as string,
        country: data.country as string,
        postal_zip_code: data.postal_zip_code as string,
        location_phone: data.location_phone as string,
    }
    await onSubmit(payload);
    if (mode === "create") form.reset();
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 space-y-8">
            {/* Back Button (Only for Edit Mode) */}
            {mode === "edit" && onCancel && (
                <button
                    type="button"
                    onClick={onCancel}
                    className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-lavender-dark transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Add New Location
                </button>
            )}

            {/* Location Information */}
            <section className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                    <House className="w-4 h-4 text-lavender-dark" />
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Location Details </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-1.5 col-span-1">
                        <label className="block text-sm font-medium text-slate-700">Location</label>
                        <Input name="name" placeholder="Main Street Branch" defaultValue={initialData?.name} required />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">Phone Number</label>
                        <Input name="location_phone" placeholder="(000) 000-0000" defaultValue={initialData?.location_phone} required />
                    </div>
                </div>
            </section>

            {/* Location Address */}
            <section className="space-y-4">

                <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                    <MapPin className="w-4 h-4 text-lavender-dark" />
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Address</h3>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="space-y-1.5 col-span-2 lg:col-span-4">
                        <label className="text-sm font-medium text-slate-700">Street Address</label>
                        <Input name="address" placeholder="123 Example St" defaultValue={initialData?.address} required />
                    </div>

                    <div className="space-y-1.5 col-span-1 lg:col-span-3 gap-6">
                        <label className="block text-sm font-medium text-slate-700">City</label>
                        <Input name="city" placeholder="City" defaultValue={initialData?.city} required />
                    </div>

                    <div className="space-y-1.5 col-span-1 gap-6">
                        <label className="text-sm font-medium text-slate-700">Province/State</label>
                        <Input name="province_state_region" placeholder="ON" defaultValue={initialData?.province_state_region} required />
                    </div>

                    <div className="space-y-1.5 col-span-1 gap-6">
                        <label className="text-sm font-medium text-slate-700">Postal Code</label>
                        <Input name="postal_zip_code" placeholder="A1B 2C3" defaultValue={initialData?.postal_zip_code} required />
                    </div>

                    <div className="space-y-1.5 col-span-1 lg:col-span-3 gap-6">
                        <label className="text-sm font-medium text-slate-700">Country</label>
                        <Input name="country" placeholder="Country" defaultValue={initialData?.country} required />
                    </div>
                </div>
            </section>
            
            {/* ACTION BUTTONS */}
            <div className="pt-4 flex flex-col gap-3">
                <Button type="submit" disabled={loading} className="w-full h-11">
                    {loading ? "Processing..." : mode === "create" ? "Create Location" : "Update Location"}
                </Button>

                {mode === "edit" && onDelete && initialData && (
                    <Button
                        type="button"
                        disabled={loading}
                        onClick={() => {if (confirm("Are you sure you want to delete this location?")){
                                onDelete(initialData.id)
                        }}}
                        className="w-full h-11 bg-red-400 hover:bg-red-500"
                    >
                        {loading ? "Deleteing" : "Delete Employee"}
                    </Button>
                )}
            </div>
        </form>
    )
}