import React, { createContext, useEffect, useState } from 'react'

export const CompanyContext = createContext()
const StateProvider = ({children}) => {
    const [companyData, setCompanyData] = useState([])
    const updateCompanyData = (updatedData)=>{console.log(updatedData)}
    const addCompanyData = (newCompanyData)=>{console.log(newCompanyData)}
    useEffect(()=>{
        const localData = window.localStorage.getItem("CompanyData")
        if(!localData){window.localStorage.setItem("CompanyData", JSON.stringify(companyData))}
        else{
            setCompanyData(JSON.parse(localData))
        }
    },[]
  )
  return (
    <CompanyContext.Provider value={{companyData, updateCompanyData, addCompanyData}}>{children}</CompanyContext.Provider>
  )
}

export default StateProvider