import { createContext, useState } from "react";
import { IAssets } from "../types/content.type";
import { IAppContext } from "../types/context.type";

const AppContext = createContext<IAppContext | undefined>(undefined);

const AppProvider = ({ children }: any) => {
  const [companyId, setCompanyId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedBranch, setSelectedBranch] = useState<IAssets | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  return (
    <AppContext.Provider
      value={{
        companyId,
        setCompanyId,
        loading,
        setLoading,
        selectedBranch,
        setSelectedBranch,
        filter,
        setFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
