"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { House, MapPin } from "lucide-react";

export default function NewLocationForm() {
    
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    setLoading(true);

    // --- MOCK API CALL ---
    console.log("Submitting to API (Pending):", data);
    console.log("Submitted Successfully", data)
    
    setLoading(false)
    form.reset(); 
    }
    return (
        <form onSubmit={handleSubmit} className="p-6 space-y-8">
            {/* Location Information */}
            <section className="space-y-4">
                
                <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                    <House className="w-4 h-4 text-lavender-dark" />
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Location Details </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-1.5 col-span-1">
                        <label className="block text-sm font-medium text-slate-700">Location</label>
                        <Input name="name" placeholder="Main Street Branch" required />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">Phone Number</label>
                        <Input name="location_phone" placeholder="(000) 000-0000" required />
                    </div>
                </div>
            </section>
            {/* Location Address */}
            <section className="space-y-4">

                <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                    <MapPin className="w-4 h-4 text-lavender-dark" />
                    <h3 className="text-sm font-semibold uppercase tracking-tight text-slate-500">Address</h3>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="space-y-1.5 col-span-2 lg:col-span-4">
                        <label className="text-sm font-medium text-slate-700">Street Address</label>
                        <Input name="address" placeholder="123 Example St" required />
                    </div>

                    <div className="space-y-1.5 col-span-1 lg:col-span-3 gap-6">
                        <label className="block text-sm font-medium text-slate-700">City</label>
                        <Input name="city" placeholder="City" required />
                    </div>

                    <div className="space-y-1.5 col-span-1 lg:col-span-1 gap-6">
                        <label className="text-sm font-medium text-slate-700">Province/State</label>
                        <Input name="province_state_region" placeholder="ON" required />
                    </div>

                    <div className="space-y-1.5 col-span-1 lg:col-span-1 gap-6">
                        <label className="text-sm font-medium text-slate-700">Postal Code</label>
                        <Input name="postal_zip_code" placeholder="A1B 2C3" required />
                    </div>

                    <div className="space-y-1.5 col-span-1 lg:col-span-3 gap-6">
                        <label className="text-sm font-medium text-slate-700">Country</label>
                        <Input name="country" placeholder="Country" required />
                    </div>
                </div>
            </section>

            
            <div className="pt-4 flex flex-col gap-3">
            <Button type="submit" disabled={loading} className="w-full h-11">
                {loading ? "Saving..." : "Create Location"}
            </Button>
            </div>
        </form>
    )
}