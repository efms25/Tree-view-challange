export interface ILocations {
    id: string,
    name: string,
    parentId?: string
}

export interface IAssets {
    id: string,
    name: string,
    parentId?: string,
    sensorId?: string,
    sensorType?: string,
    status?: string,
    gatewayId?: string,
    locationId?: string  
}

export interface ICompanies {
    id: string,
    name: string,
}
