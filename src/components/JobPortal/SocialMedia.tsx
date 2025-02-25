'use client'
import { useRequest } from 'ahooks'
import Link from 'next/link'
import { useState } from 'react'
import { SearchBar } from '../SearchBar'
import { Pagination } from '../Pagination'
import SOCIALMEDIA_API from '@/api/Socialmedia'
import { metaSocail, socialMediaData } from '@/utils/mockData-util'

function SocialMedia() {
  const [currentPage, setCurrentPage] = useState(metaSocail.currentPage)

  // Pagination logic for local data
  const itemsPerPage = 10
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedPlatforms = socialMediaData.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= metaSocail.totalPages) {
      setCurrentPage(newPage)
    }
  }

  return (
    <>
      <div className="flex flex-col items-center gap-4 pt-16 pb-16 px-4">
        <h1 className="text-primary md:text-3xl text-xl font-bold uppercase">
          Groups Chanels and Pages
        </h1>
        <h6 className="md:text-lg text-md text-center">
          Here are some popular Groups Chanels and Pages in Socail Media for job
          seekers and employers to find candidates
        </h6>
      </div>
      <div className="px-4 sm:px-6 lg:px-8">
        <SearchBar />
      </div>

      <div className="flex flex-col w-full pb-16">
        <div className="overflow-x-auto">
          <div className="pb-2 inline-block min-w-full px-4 sm:px-6 lg:px-8">
            <div className="overflow-auto h-[600px] bg-white">
              <table className="min-w-full w-full">
                <thead className="border-b bg-gray-100">
                  <tr>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      #
                    </th>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Name
                    </th>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Link
                    </th>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Social Media
                    </th>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Focus
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {paginatedPlatforms?.map((user, index) => {
                    const indexUniqe = index + 1 + (currentPage - 1) * 10

                    return (
                      <tr
                        key={index}
                        className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {indexUniqe}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user.name}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <Link
                            href={user.link}
                            target="_blank"
                            className="text-primary underline"
                          >
                            Visit
                          </Link>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user.type}
                        </td>

                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user.focus?.toUpperCase()}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={metaSocail.totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  )
}

export default SocialMedia
