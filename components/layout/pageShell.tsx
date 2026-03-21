interface PageShellProps {
    title: string;
    leftTitle: string;
    leftContent?: React.ReactNode;
    rightTitle: string;
    rightContent?: React.ReactNode;
}

export default function PageShell({
    title,
    leftTitle,
    leftContent,
    rightTitle,
    rightContent,

    }: PageShellProps
) {
    return (
        <div className="flex flex-col gap-8 p-6 min-h-full rounded-xl bg-slate-50 shadow-sm">
            <h1 className="text-3xl font-bold text-lavender-dark tracking-tight">{title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <section className="p-6 bg-white rounded-lg shadow-sm border-t-4 border-lavender-primary">
                    <h3 className="text-xl font-semibold text-lavender-dark">{leftTitle}</h3>
                    {leftContent}
                </section>
                <section className="p-6 bg-white rounded-lg shadow-sm border-t-4 border-lavender-primary">
                    <h3 className="text-xl font-semibold text-lavender-dark">{rightTitle}</h3>
                    {rightContent}
                </section>
            </div>
        </div>
    )
}