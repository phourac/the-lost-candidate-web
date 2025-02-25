'use client'
import { useState } from 'react'
import Image from 'next/image'
import { resume } from '@/utils/data-util'

export function Resume() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="py-2 bg-gray-50">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center gap-4 pt-8 pb-8 px-4">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">
            Bad Resume and good resume
          </h2>
          <Image
            src={'/images/Good-vs.-Bad-Resume-edited.jpg'}
            alt="Selected Resume"
            width={800}
            height={800}
            className="rounded-lg max-w-full max-h-[80vh] object-contain"
            onClick={() =>
              setSelectedImage('/images/Good-vs.-Bad-Resume-edited.jpg')
            }
          />

          <h1 className="text-primary md:text-3xl text-xl font-bold uppercase text-center">
            Explore Sample Resumes
          </h1>
          <h6 className="md:text-lg text-md text-center">
            Here are some professional resumes from Canva
          </h6>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-2 gap-8">
          {resume.map((item, i) => (
            <div key={i} className="w-auto h-auto rounded-xl shadow-lg">
              <Image
                src={item.img}
                alt={`Resume ${i + 1}`}
                layout="responsive"
                width={100}
                height={100}
                className="rounded-xl cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setSelectedImage(item.img)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white p-4 rounded-xl shadow-xl max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Selected Resume"
              width={800}
              height={800}
              className="rounded-lg max-w-full max-h-[80vh] object-contain"
            />
            <button
              className="absolute top-3 right-3 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Resume
