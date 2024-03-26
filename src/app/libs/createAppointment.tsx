import { Dayjs } from "dayjs";

export default async function createAppointment(
  token: string,
  cid: string,
  apptDate: string
) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/campgrounds/${cid}/appointments/`,
    {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: apptDate,
    }
  );

  if (!response.ok) {
    throw new Error("Failed to create campgrounds");
  }
  return await response.json();
}
