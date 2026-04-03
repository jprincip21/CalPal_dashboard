"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"



export default function Shiftcell() {
    return (
    <td className="py-3 px-2 font-medium border-b border-slate-200">
        <div className=" flex flex-col gap-1">
            <p className="pt-1 text-slate-500 font-normal text-xs">Start Time:</p>
            <Input 
                type="time"
                className="h-7 text-xs"
            />
            <p className="pt-1 text-slate-500 font-normal text-xs">End Time:</p>
            <Input 
                type="time"
                className="h-7 text-xs"
            />
            <Button
            type="button"
            onClick={() => console.log("Create Shift")}
            className="h-6 text-xs flex-1"
            >
                Save
            </Button>
            <Button
                type="button"
                onClick={() => console.log("Create Shift")}
                className="h-6 text-xs flex-1 bg-red-400 hover:bg-red-500"
            >
                Delete
            </Button>
        </div>
    </td>)
}