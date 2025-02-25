import React, { useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import '../app/[locale]/globals.css'

type DrawerProps = {
  isOpen: boolean
  title: string
  onClose: () => void
  onSave: () => void
  children: React.ReactNode
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  title,
  onClose,
  onSave,
  children
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleOutsideClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === 'drawer-overlay') {
      onClose()
    }
  }

  return (
    <div
      id="drawer-overlay"
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-end transition-opacity duration-300 z-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-white w-full max-w-md sm:w-1/2 md:w-1/3 h-full flex flex-col px-6 pt-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-red-600 hover:text-red-800">
            <AiOutlineClose size={24} />
          </button>
        </div>
        <div className="flex-grow pt-10">{children}</div>
        <div className="sticky bottom-0 bg-white py-4">
          <button
            onClick={onSave}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-800"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default Drawer
