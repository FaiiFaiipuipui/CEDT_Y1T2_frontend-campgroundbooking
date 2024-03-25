interface CampgroundItem {
    _id: string,
    number: number,
    name: string,
    cooradinate: string,
    province: string,
    postalcode: string,
    telephone: string,
    region: string,
    appointments: string[],
    picture: string
}

interface CampgroundJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: CampgroundItem[]
}

interface AppointmentItem {
    _id: string,
    apptDate: string,
    user: string,
    campground: string,
    createdAt: Date
}