export interface IAppContext {
  companyId: string;
  setCompanyId: () => string;
  loading: boolean;
  setLoading: () => boolean;
  selectedBranch: any;
  setSelectedBranch: (branch: any) => void;
}
