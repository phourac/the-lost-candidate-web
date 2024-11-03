"use client";
import REFERENCE_API from "@/api/Reference";
import { useRequest } from "ahooks";
import Link from "next/link";
import { useState } from "react";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { SearchBar } from "../SearchBar";
import { Pagination } from "../Pagination";

function WebsiteApp() {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: listReference,
    loading: loadingListReference,
    error: errorListReference,
    refresh: refreshListReference,
  } = useRequest(() => REFERENCE_API.getListReference("", currentPage), {
    refreshDeps: [currentPage],
  });

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= listReference?.meta.totalPages!) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center gap-4 pt-16 pb-16 px-4">
        <h1 className="text-primary md:text-3xl text-xl font-bold uppercase">
          Websites and apps
        </h1>
        <h6 className="md:text-lg text-md text-center">
          Here are some popular websites in Cambodia for job seekers and
          employers to find candidates
        </h6>
      </div>
      <div className="px-4 sm:px-6 lg:px-8">
        <SearchBar />
      </div>

      <div className="flex flex-col w-full">
        <div className="overflow-x-auto">
          <div className="pb-2 inline-block min-w-full px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
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
                {loadingListReference ? (
                  <tbody>
                    <tr className="bg-white ">
                      <td colSpan={6}>
                        <div
                          className="flex justify-center items-center text-center"
                          style={{ height: "500px" }}
                        >
                          Loading...
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ) : errorListReference ? (
                  <tbody>
                    <tr className="bg-white ">
                      <td colSpan={6}>
                        <div
                          className="flex justify-center items-center text-center"
                          style={{ height: "500px" }}
                        >
                          Error
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ) : listReference?.data.length === 0 ? (
                  <tbody>
                    <tr className="bg-white ">
                      <td colSpan={6}>
                        <div
                          className="flex justify-center items-center text-center"
                          style={{ height: "500px" }}
                        >
                          No Data
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ) : (
                  <tbody>
                    {listReference?.data.map((user, index) => {
                      const indexUniqe = index + 1 + (currentPage - 1) * 10;

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
                              href={user.website}
                              target="_blank"
                              className="text-primary underline"
                            >
                              Visit
                            </Link>
                          </td>
                          <td className="text-sm text-gray-900 font-light px-10 py-4 whitespace-nowrap">
                            {user.app_store && (
                              <Link
                                href={user.app_store}
                                target="_blank"
                                className="underline flex items-center gap-1"
                              >
                                <FaApple size={16} />
                              </Link>
                            )}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-10 py-4 whitespace-nowrap">
                            {user.play_store && (
                              <Link
                                href={user.play_store}
                                target="_blank"
                                className="underline"
                              >
                                <IoLogoGooglePlaystore size={16} />
                              </Link>
                            )}{" "}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {user.focus?.toUpperCase()}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={listReference?.meta.totalPages!}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default WebsiteApp;
