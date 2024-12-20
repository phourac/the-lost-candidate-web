'use client';

import INTERVIEW_API from '@/api/Interview';
import PROBLEM_API from '@/api/Problem';
import Drawer from '@/components/Drawer';
import { Pagination } from '@/components/Pagination';
import { useRequest } from 'ahooks';
import React, { useEffect, useState } from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

// Interface for the Interview Tip

function ProblemSolution() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [id, setId] = useState('');
  console.log('id', id);

  // Initialize the form with react-hook-form
  const { control, handleSubmit, reset, setValue } = useForm<IProblem.ICreateProblem>({
    defaultValues: {
      problem: '',
      solution: [''], // Default to one empty answer
    },
  });
  const { fields, append, remove } = useFieldArray<IProblem.ICreateProblem>({
    control,
    //@ts-ignore
    name: 'solution', // The name of the array field for answers
  });

  const {
    data: listProblem,
    loading: loadingListProblem,
    error: errorListProblem,
    refresh: refreshListProblem,
  } = useRequest(
    () => PROBLEM_API.getListProblem('', currentPage,10),
    {
      refreshDeps: [currentPage],
      onSuccess: (data) => {
        setTotalPages(data.meta.totalPages);
      },
    }
  );

  const { data: detailInterview } = useRequest(
    () => PROBLEM_API.detailProblem(id),
    {
      refreshDeps: [id],
      ready: !!id,
    }
  );

  const { run: runCreate } = useRequest(PROBLEM_API.createProblem, {
    manual: true,
    onSuccess: () => {
      refreshListProblem();
    },
  });
  const { run: runDelete } = useRequest(PROBLEM_API.deleteProblem, {
    manual: true,
    onSuccess: () => {
      refreshListProblem();
    },
  });
  const { run: runUpdate } = useRequest(PROBLEM_API.updateProblem, {
    manual: true,
    onSuccess: () => {
      refreshListProblem();
    },
  });

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleCreate = () => {
    setIsDrawerOpen(true);
  };

  const handleEdit = (id: string) => {
    setIsDrawerOpen(true);
    setId(id);
  };

  const handleDelete = (id: string) => {
    runDelete(id);
  };

  // Handle form submission
  const onSubmit = (data: IProblem.ICreateProblem) => {
    const payload :IProblem.ICreateProblem= {
      problem: data.problem, // This will be the string value
      solution: data.solution,     // This will be the array of answers
    };

    // Call the API with the payload
    if (id) {
    runUpdate(id,payload)
    } else {
    runCreate(payload); 
    }
    reset(); // Reset form after submit
    setIsDrawerOpen(false); // Close the drawer
  };

useEffect(() => {
  if (detailInterview) {
    console.log("detailInterview",detailInterview)
    setValue('problem', detailInterview.data.problem);
    setValue('solution', detailInterview.data.solution || ['']); // Ensure the solution is an array
  }
}, [setValue, detailInterview]);


  return (
    <div className="flex flex-col w-full pb-16">
      <div className="flex justify-end p-4 m-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded flex items-center"
          onClick={handleCreate}
        >
          <FaPlus className="mr-2" /> Create
        </button>
      </div>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Create Interview Tip"
        onSave={handleSubmit(onSubmit)}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Question Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Problem</label>
            <Controller
              name="problem"
              control={control}
              defaultValue=''
              render={({ field }) => (
                <textarea
                  {...field}
                  id="message"
                  rows={2}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Type Problem"
                />
              )}
            />
          </div>

          {/* Answer Fields */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Solution(s)</label>
            {fields.map((item, index) => (
              <div key={item.id} className="flex items-center space-x-4 mb-2">
                <Controller
                  name={`solution.${index}`} // Corrected this to use `answer.${index}`
                  control={control}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      id="message"
                      rows={2}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Type Answer"
                    />
                  )}
                />
                <button
                  type="button"
                  className="text-red-600 hover:text-red-800"
                  onClick={() => remove(index)} // Remove the answer if needed
                >
                  <FaTrash />
                </button>
              </div>
            ))}
            <button
              type="button"
              className="text-blue-600 hover:text-blue-800"
                  //@ts-ignore
              onClick={() => append('')} // Append a new answer
            >
              Add Solution
            </button>
          </div>
        </form>
      </Drawer>

      {/* Interview List Table */}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full px-4 sm:px-6 lg:px-8">
          <div className="overflow-auto h-[550px] bg-white">
            <table className="min-w-full w-full">
              <thead className="border-b bg-gray-100">
                <tr>
                  <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">#</th>
                  <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Question</th>
                  <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Answer</th>
                  <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Action</th>
                </tr>
              </thead>
              {loadingListProblem ? (
                <tbody>
                  <tr>
                    <td colSpan={4} className="text-center py-16">Loading...</td>
                  </tr>
                </tbody>
              ) : errorListProblem ? (
                <tbody>
                  <tr>
                    <td colSpan={4} className="text-center py-16">Error</td>
                  </tr>
                </tbody>
              ) : listProblem?.data.length === 0 ? (
                <tbody>
                  <tr>
                    <td colSpan={4} className="text-center py-16">No Data</td>
                  </tr>
                </tbody>
              ) : (
                <tbody>
                  {listProblem?.data.map((user, index) => {
                    const uniqueIndex = index + 1 + (currentPage - 1) * 10;
                    return (
                      <tr key={user._id} className="bg-white border-b hover:bg-gray-100">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{uniqueIndex}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{user.problem}</td>
                         <td className="px-6 py-4 text-sm text-gray-900">
                           {user.solution.map((sol, idx) => (
                            <div key={idx}>+{sol}</div> // Display each solution in its own div
                            ))}
                         </td>
                        <td className="px-6 py-4 text-sm text-gray-900 flex space-x-4">
                          <button
                            className="text-blue-600 hover:text-blue-800"
                            onClick={() => handleEdit(user._id)}
                          >
                            <FaEdit />
                          </button>
                          <button
                            className="text-red-600 hover:text-red-800"
                            onClick={() => handleDelete(user._id)}
                          >
                            <FaTrash />
                          </button>
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
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default ProblemSolution;
