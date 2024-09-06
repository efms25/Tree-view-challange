import React, { createContext, useState, } from 'react'
import { IAssets } from '../types/content.type'
import { IAppContext } from '../types/context.type'

const AppContext = createContext<IAppContext|undefined>(undefined)

const AppProvider = ({children}: any) => {
    const [companyId, setCompanyId] = useState<string>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [selectedBranch, setSelectedBranch] = useState<IAssets|null>(null)

    

    return (
        <AppContext.Provider value={{companyId, setCompanyId, loading, setLoading, selectedBranch, setSelectedBranch}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider, AppContext}