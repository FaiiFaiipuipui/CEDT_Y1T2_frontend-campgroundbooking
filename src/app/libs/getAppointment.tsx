export default async function getAppointment(id: string) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/appointments/${id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch appointments");
    }
    return await response.json();
  }
  