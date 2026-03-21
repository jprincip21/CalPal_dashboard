import PageShell from "@/components/layout/pageShell"
import NewLocationForm from "@/widgets/NewLocationForm"

export default function LocationPage() {
    return (
        <PageShell 
            title="Locations" 
            leftTitle="Your Locations" 
            rightTitle="Create Location" 
            rightContent={<NewLocationForm/>}
            />
    )
}