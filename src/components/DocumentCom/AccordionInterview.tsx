'use client'
import INTERVIEW_API from '@/api/Interview'
import { useRequest } from 'ahooks'
import { useState } from 'react'
import { Pagination } from '../Pagination'

export function AccordionInterview() {
  const [openQuestion, setOpenQuestion] = useState(null)
  const [currentPage, setCurrentPage] = useState(1) // Initialize current page
  const [totalPages, setTotalPages] = useState(1) // Initialize total pages
  const {
    data: listInterview,
    loading: loadingListInterview,
    error: errorListInterview,
    refresh: refreshListInterview
  } = useRequest(() => INTERVIEW_API.getListReference('', currentPage), {
    refreshDeps: [currentPage!!],
    onSuccess: (data) => {
      setTotalPages(data.meta.totalPages)
    }
  })

  const onPageChange = (page: number) => {
    setCurrentPage(page)
  }

  const toggleQuestion = (index: any) => {
    setOpenQuestion(openQuestion === index ? null : index)
  }

  return (
    <section className="py-2 bg-gray-50">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center gap-4 pt-8 pb-8 px-4">
          <h1 className="text-primary md:text-3xl text-xl font-bold uppercase text-center">
            Explore Common Tip For Interview
          </h1>{' '}
          <h6 className="md:text-lg text-md text-center">
            Here are some common question that candidate face during the
            interview.
          </h6>
        </div>
        {loadingListInterview ? (
          <div
            className="flex justify-center items-center"
            style={{ minHeight: 'calc(100vh - 300px)' }}
          >
            {' '}
            <p>Loading...</p>
          </div>
        ) : errorListInterview ? (
          <p className="text-center text-red-600">
            Failed to load data. Please try again.
          </p>
        ) : (
          <div className="container md:px-0 px-4  py-8  mx-auto mt-8 space-y-4 md:mt-16">
            {listInterview?.data.map((item, index) => (
              <div
                key={index}
                className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
              >
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                >
                  <span className="flex md:text-2xl text-lg font-semibold text-black text-start">
                    <span className="pr-2 text-primary">{`សំ.`}</span>
                    {item.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
                      openQuestion === index ? 'rotate-0' : '-rotate-180'
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openQuestion === index && (
                  <ol className="list-disc px-4 pb-5 sm:px-6 sm:pb-6 pt-4 text-lg">
                    {item.answer.map((anw, i) => (
                      <li key={i} className="ml-10 py-2">
                        {anw}
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            ))}
          </div>
        )}

        <Pagination
          currentPage={currentPage}
          onPageChange={onPageChange}
          totalPages={totalPages}
        />
      </div>
    </section>
  )
}

export default AccordionInterview
