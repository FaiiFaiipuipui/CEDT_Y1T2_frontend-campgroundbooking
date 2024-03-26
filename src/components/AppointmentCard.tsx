import Image from "next/image";
import InteractiveCard from "./InteractiveCard";


export default function AppointmentCard({
    imgSrc,
    appointmentDate,
    campgroundName,
}: {
    imgSrc: string;
    appointmentDate: Date;
    campgroundName: string;
}) {
    return (
        <InteractiveCard>
            <div className="w-full h-[30%] relative rounded-t-lg">
                <Image
                    src={imgSrc}
                    alt="Campground Picture"
                    fill={true}
                    className="object-cover rounded-t-lg"
                />
            </div>
            <div className="w-[30%] h-full p-[10px] text-base mt-[10px]">
                <div className="text-lg font-bold">Campground Name</div>
                <div>{campgroundName}</div>
                <div className="text-lg font-bold">Appointment Date</div>
                <div>{appointmentDate.toDateString()}</div>
            </div>
        </InteractiveCard>
    );
}
