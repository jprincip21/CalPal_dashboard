"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewEmployeeForm() {
    
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // --- MOCK API CALL ---
    console.log("Submitting to API (Pending):", data);
    console.log("Submitted Successfully", data)
    
    setLoading(false)
    event.currentTarget.reset(); 
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
                <label className="block text-sm font-medium text-slate-700">Employee Name</label>
                <Input name="employeeName" placeholder="First Last" required />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-700">Email Address</label>
                <Input name="emailAddress" placeholder="example@example.com" required />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-700">Phone Number</label>
                <Input name="phoneNumber" placeholder="(123) 456-7890" required />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-700">Address</label>
                <Input name="address" placeholder="123 Example St" required />
            </div>
            {/* Will be implemented in the future. 
            <div>
                <label className="block text-sm font-medium text-slate-700">Availability</label>
                <Input name="phoneNumber" placeholder="(123) 456-7890" required />
            </div> */}
            {/* Locations will come from an API Call.  Create Select Component/Widget for this.*/}
            <div>
                <label className="block text-sm font-medium text-slate-700">Work Locations</label>
                <select name="workLocations">
                    <option>Location 1</option>
                    <option>Location 2</option>
                    <option>Location 3</option>
                </select>
            </div>

            <Button type="submit" disabled={loading}>
                {loading ? "Saving..." : "Create Location"}
            </Button>
        </form>
    )
}