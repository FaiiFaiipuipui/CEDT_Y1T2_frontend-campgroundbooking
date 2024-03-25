/* const fetch = require('node-fetch'); */

export default async function getUserDashboard(token:string) {
    const response = await fetch("https://cbs-team-kae-leaw-backendapi.vercel.app/api/v1/auth/me", {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`,
        },
    })
    if (!response.ok) {
        throw new Error("Failed to fetch user profile")
    }
    return await response.json();
}