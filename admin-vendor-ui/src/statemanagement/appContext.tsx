import { createContext, useContext } from 'react'

const defaultValues = {};

export const appCtx: any = createContext(defaultValues)

export const useAppContext = () => {
    return useContext(appCtx)
}

export const AppCtxProvider = ({ children, myData }: { children: any, myData: any }) => {
    return <appCtx.Provider value={myData}>
        {children}
    </appCtx.Provider>

}