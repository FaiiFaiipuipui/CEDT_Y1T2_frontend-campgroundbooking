export default async function getUserTransaction(id: string, token: string) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/appointments/${id}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response) {
      throw new Error("Failed to fetch transactions");
    }
    return await response.json();
  }
  