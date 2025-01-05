import { useState } from 'react'

export function SearchBar() {
  return (
    <div className="flex md:flex-row flex-col md:items-center gap-4 bg-white py-8 px-6">
      <div className="flex items-center bg-gray-100 rounded-md px-3 py-3 gap-2">
        <svg
          className="w-5 h-5 text-gray-400"
          //   viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="15" y2="15"></line>
        </svg>
        <input
          type="text"
          placeholder="Search by name..."
          className="bg-gray-100 text-sm focus:outline-none"
        />
      </div>

      <div className="flex flex-row gap-4 items-center">
        {' '}
        <Dropdown />
        <Dropdown />
      </div>
    </div>
  )
}

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(null)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = (value: any) => {
    setSelectedValue(value)
    setIsOpen(false)
  }

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex justify-center w-full shadow-sm bg-gray-100 rounded-md px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
        onClick={handleClick}
      >
        {selectedValue ? selectedValue : 'Select'}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => handleSelect('Option 1')}
            >
              Option 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => handleSelect('Option 2')}
            >
              Option 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => handleSelect('Option 3')}
            >
              Option 3
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
