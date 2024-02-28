'use client';

import { ReactNode, useState, useContext } from "react";
import { AppContext, AppContextProvider, Value, fixture } from '@/app/context/AppContext'
import ProgressBar from "@/app/components/Primitive/ProgressBar";


interface SiteContainerProps {
  children: ReactNode;
}

const SiteContainer: React.FC<SiteContainerProps> = ({ children }) => {  
  return (
    <div>
      <AppContextProvider>
        <Content>{children}</Content>
      </AppContextProvider>
    </div>
  )
}

const Content: React.FC<SiteContainerProps> = ({ children }) => {
  const context = useContext(AppContext)
  if(!context) return <p>Loading...</p>
  
  const { currentStage, stages, loading } = context;
  if (loading) return (
    <div className="flex justify-center items-center min-h-96">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
  </div>
  )

  return (
    <>
      <main>{children}</main>
      <ProgressBar
        value={Math.max(0, currentStage - 1)} 
        max={stages[stages.length - 1].index} 
      />
    </>
  )
}

export default SiteContainer;