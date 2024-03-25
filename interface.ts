interface CampgroundItem {
    _id: string,
    number: number,
    name: string,
    cooradinate: string,
    province: string,
    postalcode: string,
    telephone: string,
    region: string,
    appointments: string[]
}

interface CampgroundJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: CampgroundItem[]
}