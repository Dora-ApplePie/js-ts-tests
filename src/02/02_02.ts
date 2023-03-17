export type StreetType = {
    title: string
}

export type AddressType = {
    number?: number,
    street: StreetType,
}

export type HouseType = {
    buildedAt: number,
    repaired: boolean,
    address: AddressType
}
export type CityType = {
    title: string,
    houses: Array<HouseType>,
    governmentBuildings: Array<GovBuildingsType>,
    citizenNumber: number,
}

export type GovBuildingsType = {
    type: "HOSPITAL" | "FIRE STATION" ,
    budget: number,
    staffCount: number,
    address: AddressType
}