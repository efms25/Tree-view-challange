export interface ILocations {
    id: string,
    name: string,
    parentId?: string
    children?: Array<ILocations | IAssets>
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
    children?: Array<any>
}

export interface ICompanies {
    id: string,
    name: string,
}
