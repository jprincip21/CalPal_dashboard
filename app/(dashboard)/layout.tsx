// app/(dashboard)/layout.tsx
import Sidebar from "@/components/layout/sidebar";
import Topbar from "@/components/layout/topbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen w-full"> 
      {/* Topbar stays at the top */}
      <Topbar />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar stays on the left */}
        <Sidebar />
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-zinc-50 p-1">
          <div className="max-screen mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}