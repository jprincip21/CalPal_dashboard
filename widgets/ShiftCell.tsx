"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shift, ShiftRequest } from "@/types/shift";
import { useState } from "react"

interface ShiftCellProps {
    shift?: Shift;
    employee_id: number;
    schedule_id: number;
    date: string;
    onAdd: (data: ShiftRequest) => Promise<void>;
    onEdit: (id: number, data: ShiftRequest) => Promise<void>;
    onDelete: (id: number) => Promise<void>;
    disabled: boolean;
}

export default function Shiftcell({   
    shift,
    employee_id,
    schedule_id,
    date,
    onAdd,
    onEdit,
    onDelete,
    disabled
}: ShiftCellProps) {
    const [isOpen, setIsOpen] = useState(false)

    function handleOpen() {
        if (!disabled) {
            setIsOpen(true)
        }
    }
    

if (isOpen) {
    return (
        <td className="py-3 px-2 font-medium border-b border-slate-200">
            <div className=" flex flex-col gap-1">
                <div className="flex justify-between">
                <p className="pt-1 text-slate-500 font-normal text-xs">Start Time:</p>
                <button 
                    type="button"
                    className="pt-1 text-slate-500 hover:text-slate-800 font-semibold text-xs"
                    onClick={() => setIsOpen(false)}>
                        X
                </button>
                </div>
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
                    onClick={() => console.log("Delete Shift")}
                    className="h-6 text-xs flex-1 bg-red-400 hover:bg-red-500"
                >
                    Delete
                </Button>
                
            </div>
        </td>
    
    );
}
    return (
        <td className="py-3 px-2 font-medium border-b border-slate-200" onClick={() => {handleOpen()}}>
            -
        </td>
    )}