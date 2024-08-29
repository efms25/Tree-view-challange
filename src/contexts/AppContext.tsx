import React, { createContext, useState, } from 'react'
import { IAppContext } from '../types/context.type'

const AppContext = createContext<IAppContext|undefined>(undefined)

const AppProvider = ({children}: any) => {
    const [companyId, setCompanyId] = useState(null)
    const [loading, setLoading] = useState(false)
    //loading state for future

    return (
        <AppContext.Provider value={{companyId, setCompanyId, loading, setLoading}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider, AppContext}