
export interface IAppContext {
    companyId: string,
    setCompanyId: () => string,
    loading: boolean,
    setLoading: () => boolean
}