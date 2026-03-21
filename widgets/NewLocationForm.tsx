"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewLocationForm() {
    
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
                <label className="block text-sm font-medium text-slate-700">Location</label>
                <Input name="locationName" placeholder="e.g. Main Street Branch" required />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-700">Address</label>
                <Input name="address" placeholder="123 Example St" required />
            </div>

            <Button type="submit" disabled={loading}>
                {loading ? "Saving..." : "Create Location"}
            </Button>
        </form>
    )
}