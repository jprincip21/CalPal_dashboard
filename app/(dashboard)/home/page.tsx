import Image from 'next/image';

export default function HomePage() {
    return (
        
        <div className="flex flex-col gap-8 p-6 min-h-full rounded-xl bg-slate-50 shadow-sm">
            
            {/* Header Content */}
            <div className="text-center py-10 bg-white rounded-lg border border-lavender-light shadow-sm">
                <div className="flex justify-center mb-4">
                    <div className="w-48 h-24 rounded-full flex items-center justify-center">
                        <span className="text-lavender-dark text-xs">
                            <Image 
                            src="/calpallogo.png" 
                            alt="CalPal Logo" 
                            width={500} 
                            height={500} 
                            priority 
                            />
                        </span>
                    </div>
                </div>
                    <h1 className="text-4xl font-extrabold text-lavender-dark tracking-tight">Welcome to CalPal</h1>
                    <p className="mt-3 text-lg text-lavender-primary max-w-2xl mx-auto">
                        An employee scheduling solution for shift based businesses.
                    </p>
                    <div className="mt-4 inline-block px-4 py-1 bg-lavender-light/50 rounded-full text-xs font-medium text-lavender-dark">
                    SFWRTECH 4SA3 • Jonathan Principato
                    
                </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Location */}
                <section className="p-6 bg-white rounded-lg shadow-sm border-t-4 border-lavender-primary">
                    <h3 className="text-xl font-bold text-lavender-dark flex items-center gap-2">Locations</h3>
                    <ul className="mt-4 text-sm text-slate-600 list-disc list-outside pl-5 space-y-3">
                        <li>If you have not created a location you will only see a "Create Location" button.</li>
                        <li>Click the "Create Location" Button and fill in the fields:
                            <ul className="ml-6 mt-1 list-[circle] list-inside space-y-1">
                                <li>Name</li>
                                <li>Address</li>
                                <li>Max Weekly Hours (Optional)</li>
                            </ul> and press "Create Location".
                        </li>
                        <li>You will then see a table created displaying your new location.</li>
                        <li>You can remove the employee by clicking the "X" or edit the employee by clicking the pencil icon.</li>
                    </ul>
                </section>

                {/* Employees */}
                <section className="p-6 bg-white rounded-lg shadow-sm border-t-4 border-lavender-primary">
                     <h3 className="text-xl font-bold text-lavender-dark flex items-center gap-2">Employees</h3>
                     <ul className="mt-4 text-sm text-slate-600 list-disc list-outside pl-5 space-y-3">
                        <li>To successfully create an employee you must have at least 1 location created.</li>
                        <li>If you have not created an employee you will only see a "Create Employee" button.</li>
                        <li>Press the "Create Employee" Button and fill in the fields: 
                            <ul className="ml-6 mt-1 list-[circle] list-inside space-y-1">
                                <li>Name</li>
                                <li>Email Address</li>
                                <li>Phone Number</li>
                                <li>Address</li>
                                <li>Availability + Vacation Days (Optional)</li>
                                <li>Work Location</li>
                            </ul> 
                            and press "Create Employee".</li>
                        <li>You'll see a table created displaying the employee you just inputed.</li>
                        <li>Click on an employees row to be displayed all of the selected employees information.</li>
                        <li>You can remove the employee by clicking the "X" or edit the employee by clicking the pencil icon.</li>
                     </ul>
                </section>

                {/* Schedules */}
                <section className="p-6 bg-white rounded-lg shadow-sm border-t-4 border-lavender-primary">
                     <h3 className="text-xl font-bold text-lavender-dark flex items-center gap-2">Schedules</h3>
                     <ul className="mt-4 text-sm text-slate-600 list-disc list-outside pl-5 space-y-3">
                        <li>To create a schedule you first must have at least 1 employee and 1 location created.</li>
                        <li>If you have not created any schedules you will only see a create schedule button.</li>
                        <li>If you have schedules you will be shown table of schedules with their status (Draft, Published or Complete).</li>
                        <li>Click the create schedule button button and select a location and week to create a schedule for.</li>
                        <li>You will shown a table with dates at the top and employees on the side.</li>
                        <li>Fill in employee hours for shifts and click Save as Draft or Publish Schedule.</li>
                        <li>This schedule will automatically be added to your schedules table.</li>
                        <li>To edit an existing schedule it must either be in a Draft or Published State. Click the entry on the table to edit it.</li>
                     </ul>
                </section>
            </div>
            <div className="mt-auto text-center p-4 bg-lavender-dark rounded-lg text-white">
                <p className="text-sm">Navigate to the <strong>Sidebar</strong> to begin managing your workforce.</p>
            </div>
        </div>
    );
}