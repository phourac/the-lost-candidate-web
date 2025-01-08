'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react'
import { useRequest } from 'ahooks'
import PROBLEM_API from '@/api/Problem'

interface ProblemContextType {
  listInterview: IProblem.IProblemList | undefined
  loadingListInterview: boolean
  errorListInterview: any
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  refreshListInterview: () => void
}

const ProblemContext = createContext<ProblemContextType | undefined>(undefined)

export const ProblemProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState(1) // Initialize current page
  const [totalPages, setTotalPages] = useState(1) // Initialize total pages

  const {
    data: listInterview,
    loading: loadingListInterview,
    error: errorListInterview,
    refresh: refreshListInterview
  } = useRequest(() => PROBLEM_API.getListProblem('', currentPage), {
    refreshDeps: [currentPage],
    onSuccess: (data) => {
      setTotalPages(data.meta.totalPages)
    }
  })

  const onPageChange = (page: number) => {
    setCurrentPage(page) // Update current page when pagination is changed
  }

  return (
    <ProblemContext.Provider
      value={{
        listInterview,
        loadingListInterview,
        errorListInterview,
        currentPage,
        totalPages,
        onPageChange,
        refreshListInterview
      }}
    >
      {children}
    </ProblemContext.Provider>
  )
}

export const useProblemContext = () => {
  const context = useContext(ProblemContext)
  if (!context) {
    throw new Error('useProblemContext must be used within a ProblemProvider')
  }
  return context
}
