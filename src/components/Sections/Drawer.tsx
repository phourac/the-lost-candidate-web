'use client'

import { Dispatch, Fragment, ReactNode, SetStateAction } from 'react'

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild
} from '@headlessui/react'
import { IoMdClose } from 'react-icons/io'
import Image from 'next/image'
import { Link } from '@/hooks/useNavigation'

export default function Drawer({
  isOpen,
  setIsOpen,
  children
}: {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  children: ReactNode
}) {
  //   let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <TransitionChild
              as={Fragment}
              enter="transition ease duration-500 transform"
              enterFrom="opacity-0 -translate-y-12"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease duration-300 transform"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-12"
            >
              <DialogPanel className="w-full h-full p-6 transition-all transform bg-white shadow-xl">
                <DialogTitle className="flex justify-end items-center mt-4 mb-2">
                  <Link
                    className="absolute w-[138px] h-[36px] cursor-pointer right-0 left-0 mx-auto"
                    href={`/`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Image
                      // className="object-cover"
                      src={`/images/logo.png`}
                      alt="logo"
                      priority
                      fill
                      sizes="(max-width: 768px) 96px 80px, (max-width: 1200px) 144px 128px"
                    />
                  </Link>
                  {/* <button onClick={closeModal}>
                    <IoMdClose size={30} />
                  </button> */}
                </DialogTitle>
                <div className="pt-4">{children}</div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
