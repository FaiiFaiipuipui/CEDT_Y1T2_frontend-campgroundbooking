import Card from "./Card";
import Link from "next/link";

export default async function AppointmentCatalog({
    appointmentJson,
}: {
    appointmentJson: AppointmentJson;
}) {
    const appointmentJsonReady = await appointmentJson;
    return (
        <div className="flex flex-row flex-wrap place-items-around justify-around">
        {appointmentJsonReady.data.map((appointmentItem: Object) => (
            <Link
            href={`/appointment/${appointmentItem._id}`}
            key={appointmentItem._id}
            className="w-1/4 m-10"
            >
            <Card
                imgSrc={appointmentItem.picture}
                appointmentDate={appointmentItem.apptDate}
            />
            </Link>
        ))}
        </div>
    );
}
