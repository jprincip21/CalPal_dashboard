'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface sidebarButtonProps {
    icon: React.ReactNode;
    link: string;
}

export function SidebarButton({ icon, link }: sidebarButtonProps) {
    
    // Check if the current active route matches the buttons link
    const pathname = usePathname();
    const isActive = pathname === link;

    const basestyles = "flex items-center p-3 my-2 rounded-lg transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    
    // If page is selected
    if (isActive) {
        return (
            <div className={cn(basestyles, "bg-lavender-light text-lavender-primary font-medium opacity-80")}>
                {icon}
            </div>
        );
    }
    // If page is not selected
    return (
    <Link href={link} 
        className={cn(basestyles, 'text-gray-500 hover:bg-gray-300' )}>  
        {icon}
    </Link>
    )
}