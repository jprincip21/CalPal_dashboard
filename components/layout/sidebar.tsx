import {
    Home, User, Calendar
} from 'lucide-react';
import { SidebarButton } from '../ui/sidebarButton';

export default function Sidebar(){

return (
    <div className="shadow-lg overflow">
        <nav className="flex p-1 flex-col h-[100%] justify-below bg-white">
            <SidebarButton icon={<Home size={22}/>} link='/home' />
            <SidebarButton icon={<User size={22}/>} link='/employees'/>
            <SidebarButton icon={<Calendar size={22}/>} link='/schedules'/>
        </nav>
    </div>
    )
};