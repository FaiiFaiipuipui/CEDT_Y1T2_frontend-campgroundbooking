import AppointmentCard from "./AppointmentCard";
import Link from "next/link";

export default async function AppointmentCatalog({
  appointmentJson,
}: {
  appointmentJson: AppointmentJson;
}) {
  const appointmentJsonReady = await appointmentJson;
  return (
    <div className="block place-items-start justify-start mx-10">
      {appointmentJsonReady.data.map((appointmentItem: AppointmentItem) => (
        <AppointmentCard
          key={appointmentItem._id}
          userId={appointmentItem.user}
          campgroundName={appointmentItem.campground.name}
          appointmentDate={new Date(appointmentItem.apptDate)}
        />
      ))}
    </div>
  );
}
