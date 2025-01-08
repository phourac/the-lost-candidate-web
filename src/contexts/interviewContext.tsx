'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react'
import { useRequest } from 'ahooks'
import INTERVIEW_API from '@/api/Interview'

interface InterviewContextType {
  listInterview: IInterview.IInterviewList | undefined
  loadingListInterview: boolean
  errorListInterview: any
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  refreshListInterview: () => void
}

const InterviewContext = createContext<InterviewContextType | undefined>(
  undefined
)

export const InterviewProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState(1) // Initialize current page
  const [totalPages, setTotalPages] = useState(1) // Initialize total pages

  const {
    data: listInterview,
    loading: loadingListInterview,
    error: errorListInterview,
    refresh: refreshListInterview
  } = useRequest(() => INTERVIEW_API.getListReference('', currentPage), {
    refreshDeps: [currentPage],
    onSuccess: (data) => {
      setTotalPages(data.meta.totalPages)
    }
  })

  const onPageChange = (page: number) => {
    setCurrentPage(page) // Update current page when pagination is changed
  }

  return (
    <InterviewContext.Provider
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
    </InterviewContext.Provider>
  )
}

export const useInterviewContext = () => {
  const context = useContext(InterviewContext)
  if (!context) {
    throw new Error(
      'useInterviewContext must be used within an InterviewProvider'
    )
  }
  return context
}
