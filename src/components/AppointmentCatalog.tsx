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
          aid={appointmentItem._id}
          userId={appointmentItem.user}
          campground={appointmentItem.campground}
          appointmentDate={new Date(appointmentItem.apptDate)}
        />
      ))}
    </div>
  );
}
