export interface IAppContext {
  companyId: string;
  setCompanyId: () => void;
  loading: boolean;
  setLoading: () => void;
  selectedBranch: any;
  setSelectedBranch: (branch: any) => void;
  filter: string,
  setFilter: () => void
}
