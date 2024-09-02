import apiInstance from './api/instance'
import { ENDPOINTS } from './api/constants'
import { IAssets, ICompanies, ILocations } from '../types/content.type'

const fetchCompanies = async (): Promise<ICompanies> => {
    const res = await apiInstance.get<ICompanies>(ENDPOINTS.COMPANIES);
    return res.data
}

const fetchLocations = async (companyId?: string): Promise<Array<ILocations>> => {
    if(!companyId) return []
    const res = await apiInstance.get<ILocations>(ENDPOINTS.LOCATIONS.replace(":companyId", companyId));
    return res.data;
}

const fetchAssets = async (companyId?: string): Promise<Array<IAssets>> => {
    if(!companyId) return []
    const res = await apiInstance.get<IAssets>(ENDPOINTS.ASSETS.replace(":companyId", companyId));
    return res.data;
}

export {
    fetchCompanies,
    fetchLocations,
    fetchAssets
}