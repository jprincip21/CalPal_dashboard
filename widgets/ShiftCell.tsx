"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { formatTime } from "@/lib/utils";
import { Shift, ShiftRequest } from "@/types/shift";
import { useState } from "react"
import { start } from "repl";

interface ShiftCellProps {
    shift?: Shift;
    employee_id: number;
    schedule_id: number;
    date: string;
    onCreate: (data: ShiftRequest) => Promise<void>;
    onEdit: (id: number, data: ShiftRequest) => Promise<void>;
    onDelete: (id: number) => Promise<void>;
    disabled: boolean;
}

export default function Shiftcell({   
    shift,
    employee_id,
    schedule_id,
    date,
    onCreate,
    onEdit,
    onDelete,
    disabled
}: ShiftCellProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [startTime, setStartTime] = useState("")
    const [endTime, setEndTime] = useState("")

    function buildShiftTime(date: string, time: string, isOvernight: boolean): string {
        // console.log(`Shift Time: ${time}`)
        let newDate = new Date(date + "T00:00:00Z")
        if (isOvernight) {
            newDate.setDate(newDate.getDate() + 1)
            // console.log(`Overnight shift date: ${newDate}`)
        }
        // console.log(`Date before formatting: ${newDate}`)
        const dateString = newDate.toISOString().split("T")[0] + `T${time}`
        // console.log(`Formatted Date: ${dateString}`)
        return dateString
    }

    async function createShift() {
        // console.log(`Selected Time: ${startTime}`)
        const isOvernight = endTime < startTime;
        const payload: ShiftRequest = {
            schedule_id,
            employee_id,
            start_datetime: `${buildShiftTime(date, `${startTime}:00`, false)}`,
            end_datetime: `${buildShiftTime(date, `${endTime}:00`, isOvernight)}`,
        }

        await onCreate(payload)
        setIsOpen(false)
    }

    function handleOpen() {
        // console.log(`Selected Date: ${date}`)
        if (!disabled) {
            setIsOpen(true)
        }
    }
    

if (isOpen) {
    return (
            <td className="py-3 px-2 font-medium border-b border-slate-200 hover:bg-slate-200">
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
                        value={startTime}
                        onChange={e => setStartTime(e.target.value)}
                        className="h-7 text-xs"
                    />
                    <p className="pt-1 text-slate-500 font-normal text-xs">End Time:</p>
                    <Input 
                        type="time"
                        value={endTime}
                        onChange={e => setEndTime(e.target.value)}
                        className="h-7 text-xs"
                    />
                    <Button
                    type="button"
                    onClick={createShift}
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
        <td className={`py-3 px-2 font-medium border-b border-slate-200 ${disabled ? "" : "hover:bg-slate-200"}`} onClick={() => {handleOpen()}}>
            {shift ? (
                
                    <div className="flex flex-col text-xs font-medium text-slate-500">
                        <p>{formatTime(shift.start_datetime.split(" ")[1])}</p>
                        <p>{formatTime(shift.end_datetime.split(" ")[1])}</p>
                    </div>
                    ) : (<p>-</p>)}
        </td>
    )}