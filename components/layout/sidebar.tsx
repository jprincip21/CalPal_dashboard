import {
    Home, User, Calendar
} from 'lucide-react';
import { SidebarButton } from '../ui/sidebarButton';

export default function Sidebar(){

return (
    <aside className="relative z-20 h-full bg-white shadow-xl overflow">
        <nav className="flex p-1 flex-col justify-below bg-white">
            <SidebarButton icon={<Home size={22}/>} link='/home' />
            <SidebarButton icon={<User size={22}/>} link='/employees'/>
            <SidebarButton icon={<Calendar size={22}/>} link='/schedules'/>
        </nav>
    </aside>
    )
};