import {
    Home, User, Calendar, MapPin
} from 'lucide-react';
import { SidebarButton } from '@/components/ui/sidebarButton';

export default function Sidebar(){

return (
    <aside className="relative z-20 h-full bg-lavender-light shadow-xl overflow">
        <nav className="flex p-1 flex-col justify-below">
            <SidebarButton icon={<Home size={22}/>} link='/home' />
            <SidebarButton icon={<MapPin size={22}/>} link='/locations'/>
            <SidebarButton icon={<User size={22}/>} link='/employees'/>
            <SidebarButton icon={<Calendar size={22}/>} link='/schedules'/>
        </nav>
    </aside>
    )
};