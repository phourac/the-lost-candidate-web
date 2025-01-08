'use client'
import { useState } from 'react'
import { FaApple } from 'react-icons/fa'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import { SearchBar } from '../SearchBar'
import { Pagination } from '../Pagination'
import { jobPlatforms, meta } from '@/utils/mockData-util'

function WebsiteApp() {
  const [currentPage, setCurrentPage] = useState(meta.currentPage)

  // Pagination logic for local data
  const itemsPerPage = 10
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedPlatforms = jobPlatforms.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= meta.totalPages) {
      setCurrentPage(newPage)
    }
  }

  return (
    <>
      <div className="flex flex-col items-center gap-4 pt-16 pb-16 px-4">
        <h1 className="text-primary md:text-3xl text-xl font-bold uppercase">
          Websites and Apps
        </h1>
        <h6 className="md:text-lg text-md text-center">
          Here are some popular job platforms in Cambodia for job seekers and
          employers to find candidates
        </h6>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <SearchBar />
      </div>

      <div className="flex flex-col w-full">
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
                      Website
                    </th>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Appstore
                    </th>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Playstore
                    </th>
                    <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Focus
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedPlatforms.map((platform, index) => {
                    const indexUnique =
                      index + 1 + (currentPage - 1) * itemsPerPage
                    return (
                      <tr
                        key={platform._id}
                        className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {indexUnique}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {platform.name}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <a
                            href={platform.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline"
                          >
                            Visit
                          </a>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-10 py-4 whitespace-nowrap">
                          {platform.app_store && (
                            <a
                              href={platform.app_store}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline flex items-center gap-1"
                            >
                              <FaApple size={16} />
                            </a>
                          )}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-10 py-4 whitespace-nowrap">
                          {platform.play_store && (
                            <a
                              href={platform.play_store}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline"
                            >
                              <IoLogoGooglePlaystore size={16} />
                            </a>
                          )}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {platform.focus?.toUpperCase()}
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
          totalPages={meta.totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  )
}

export default WebsiteApp
