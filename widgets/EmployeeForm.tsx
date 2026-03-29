"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Briefcase, MapPin, User, Mail, ArrowLeft, Trash2 } from "lucide-react";
import { Employee, EmployeeRequest } from "@/types/employee";

interface EmployeeFormProps {
    mode: "create" | "edit";
    initialData?: Employee; // Only required for 'edit' mode
    onSubmit: (data: EmployeeRequest) => Promise<void>;
    onDelete?: (id: number) => Promise<void>;
    onCancel?: () => void;
    loading: boolean;
}

export default function EmployeeForm({ 
    mode, 
    initialData, 
    onSubmit, 
    onDelete, 
    onCancel, 
    loading 
}: EmployeeFormProps) {
    const today = new Date().toLocaleDateString('en-CA');

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const payload: EmployeeRequest = {
            first_name: data.first_name as string,
            last_name: data.last_name as string,
            address: data.address as string,
            city: data.city as string,
            province_state_region: data.province_state_region as string,
            country: data.country as string,
            postal_zip_code: data.postal_zip_code as string,
            phone_number: data.phone_number as string,
            email: data.email as string,
            job_title: data.job_title as string,
            wage_type: data.wage_type as string,
            wage: parseFloat(data.wage as string),
            hire_date: data.hire_date as string,
            is_active: data.is_active === "true"
        };

        await onSubmit(payload);
        if (mode === "create") form.reset();
    }

    return (
        <form onSubmit={handleSubmit} className="p-6 space-y-8">
            {/* Back Button (Only for Edit Mode) */}
            {mode === "edit" && onCancel && (
                <button 
                    type="button"
                    onClick={onCancel}
                    className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-lavender-dark transition-colors"
                >
                    <ArrowLeft className="w-4 h-4"/>
                    Back to Add New Employee
                </button>
            )}

            {/* Personal Information */}
            <section className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                    <User className="w-4 h-4 text-lavender-dark" />
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Personal Details</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">First Name</label>
                        <Input name="first_name" placeholder="First" defaultValue={initialData?.first_name} required />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">Last Name</label>
                        <Input name="last_name" placeholder="Last" defaultValue={initialData?.last_name} required />
                    </div>
                    <div className="sm:col-span-1 md:col-span-2 space-y-1.5">
                        <label className="text-sm font-medium text-slate-700 flex items-center gap-1.5">Email</label>
                        <Input type="email" name="email" placeholder="example@company.com" defaultValue={initialData?.email} required />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">Phone Number</label>
                        <Input name="phone_number" placeholder="(000) 000-0000" defaultValue={initialData?.phone_number} required />
                    </div>
                </div>
            </section>

            {/* Address */}
            <section className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                    <MapPin className="w-4 h-4 text-lavender-dark" />
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Address</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="sm:col-span-1 md:col-span-2 space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">Street Address</label>
                        <Input name="address" placeholder="123 Example St" defaultValue={initialData?.address} required />
                    </div>
                    <div className="md:col-span-2 space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">City</label>
                        <Input name="city" placeholder="City" defaultValue={initialData?.city} required />
                    </div>
                    <div className="md:col-span-2 space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">Province/State</label>
                        <Input name="province_state_region" placeholder="ON" defaultValue={initialData?.province_state_region} required />
                    </div>
                    <div className="md:col-span-2 space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">Postal Code</label>
                        <Input name="postal_zip_code" placeholder="A1B 2C3" defaultValue={initialData?.postal_zip_code} required />
                    </div>
                    <div className="md:col-span-2 space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">Country</label>
                        <Input name="country" placeholder="Country" defaultValue={initialData?.country} required />
                    </div>
                </div>
            </section>

            {/* Employment */}
            <section className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                    <Briefcase className="w-4 h-4 text-lavender-dark" />
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Job Information</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">Job Title</label>
                        <Input name="job_title" placeholder="Staff" defaultValue={initialData?.job_title} required />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">Hire Date</label>
                        <Input type="date" name="hire_date" defaultValue={initialData?.hire_date || today} required />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">Wage Type</label>
                        <Select name="wage_type" defaultValue={initialData?.wage_type || "Hourly"}>
                            <option value="Hourly">Hourly</option>
                            <option value="Salary">Salary</option>
                        </Select>
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">Wage</label>
                        <Input type="number" step="0.01" name="wage" defaultValue={initialData?.wage} placeholder="0.00" required />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">Employee Status</label>
                        <Select name="is_active" defaultValue={initialData ? String(initialData.is_active) : "true"}>
                            <option value="true">Active</option>
                            <option value="false">Inactive</option>
                        </Select>
                    </div>
                     {/* Locations will come from an API Call. Create Select Component/Widget for this.*/}
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">Work Location</label>
                        <Select name="workLocations">
                            <option>Location 1</option>
                            <option>Location 2</option>
                            <option>Location 3</option>
                        </Select>
                    </div>
                </div>
            </section>

            {/* ACTION BUTTONS */}
            <div className="pt-4 flex flex-col gap-3">
                <Button type="submit" disabled={loading} className="w-full h-11">
                    {loading ? "Processing..." : mode === "create" ? "Save New Employee" : "Save Changes"}
                </Button>
                
                {mode === "edit" && onDelete && initialData && (
                    <Button 
                        type="button" 
                        disabled={loading}
                        onClick={() => onDelete(initialData.id)}
                        className="w-full h-11 bg-red-400 hover:bg-red-500"
                    >
                        {loading ? "Deleting..." : "Delete Employee"}
                    </Button>
                )}
            </div>
        </form>
    );
}