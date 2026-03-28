"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Briefcase, MapPin, User, Mail, DollarSign, Calendar } from "lucide-react";

export default function NewEmployeeForm() {
    const [loading, setLoading] = useState(false);
    const today = new Date().toLocaleDateString('en-CA');

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget
        setLoading(true);
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Convert string "true"/"false" from select to actual boolean for Python API
        const payload = {
            ...data,
            wage: parseFloat(data.wage as string),
            is_active: data.is_active === "true"
        };

        console.log("Submitting to API:", payload);
        
        // Mock API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setLoading(false);
        form.reset();
    }

    // Shared Tailwind class for our custom-styled select inputs
    const selectClass = "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50";

    return (

            <form onSubmit={handleSubmit} className="p-6 space-y-8">
                
                {/* SECTION: Personal Information */}
                <section className="space-y-4">
                    <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                        <User className="w-4 h-4 text-pr text-lavender-dark" />
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Personal Details</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-slate-700">First Name</label>
                            <Input name="first_name" placeholder="First" required />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-slate-700">Last Name</label>
                            <Input name="last_name" placeholder="Last" required />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-slate-700 flex items-center gap-1.5"><Mail className="w-3 h-3"/> Email</label>
                            <Input type="email" name="email" placeholder="example@company.com" required />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-slate-700">Phone Number</label>
                            <Input name="phone_number" placeholder="(000) 000-0000" required />
                        </div>
                    </div>
                </section>

                {/* SECTION: Address */}
                <section className="space-y-4">
                    <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                        <MapPin className="w-4 h-4 text-lavender-dark" />
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Address</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="md:col-span-2 space-y-1.5">
                            <label className="text-sm font-medium text-slate-700">Street Address</label>
                            <Input name="address" placeholder="123 Example St" required />
                        </div>
                        <div className="md:col-span-2 space-y-1.5">
                            <label className="text-sm font-medium text-slate-700">City</label>
                            <Input name="city" placeholder="City" required />
                        </div>
                        <div className="md:col-span-2 space-y-1.5">
                            <label className="text-sm font-medium text-slate-700">Province/State</label>
                            <Input name="province_state_region" placeholder="ON" required />
                        </div>
                        <div className="md:col-span-2 space-y-1.5">
                            <label className="text-sm font-medium text-slate-700">Postal Code</label>
                            <Input name="postal_zip_code" placeholder="A1B 2C3" required />
                        </div>
                        <div className="md:col-span-2 space-y-1.5">
                            <label className="text-sm font-medium text-slate-700">Country</label>
                            <Input name="country" placeholder="Country" required />
                        </div>
                    </div>
                </section>

                {/* SECTION: Employment */}
                <section className="space-y-4">
                    <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                        <Briefcase className="w-4 h-4 text-lavender-dark" />
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Job Information</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-slate-700">Job Title</label>
                            <Input name="job_title" placeholder="Staff" required />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-slate-700 flex items-center gap-1.5"><Calendar className="w-3 h-3"/> Hire Date</label>
                            <Input type="date" name="hire_date" defaultValue={today} required />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-slate-700">Wage Type</label>
                            <select name="wage_type" className={selectClass}>
                                <option value="Hourly">Hourly</option>
                                <option value="Salary">Salary</option>
                            </select>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-slate-700 flex items-center gap-1.5"><DollarSign className="w-3 h-3"/> Wage</label>
                            <Input type="number" step="0.01" name="wage" placeholder="0.00" required />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-slate-700">Employee Status</label>
                            <select name="is_active" className={selectClass}>
                                <option value="true">Active</option>
                                <option value="false">Inactive</option>
                            </select>
                        </div>

                        {/* Locations will come from an API Call. Create Select Component/Widget for this.*/}
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-slate-700">Work Location</label>
                            <select name="workLocations" className={selectClass}>
                                <option>Location 1</option>
                                <option>Location 2</option>
                                <option>Location 3</option>
                            </select>
                        </div>
                    </div>
                </section>

                {/* Will be implemented in the future. 
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">Availability</label>
                    <Input name="availability" placeholder="Open" />
                </div> */}

                <div className="pt-4">
                    <Button type="submit" disabled={loading} className="w-full h-11">
                        {loading ? "Creating..." : "Save New Employee"}
                    </Button>
                </div>
            </form>
    );
}