'use client'
import INTERVIEW_API from '@/api/Interview'
import { useRequest } from 'ahooks'
import { useState } from 'react'
import Image from 'next/image'
import { CV, resume } from '@/utils/data-util'
export const coverLetterSections = [
  {
    title: 'Contact Information',
    content: `Name: John Doe\nEmail: johndoe@example.com\nPhone: (123) 456-7890\nLocation: New York, NY`
  },
  {
    title: 'Greeting',
    content: `Dear Hiring Manager,`
  },
  {
    title: 'Introduction',
    content: `I'm excited to apply for the [Job Title] position at [Company Name]. With my experience in building web applications using React, Node.js, and cloud technologies, I’m confident that I can make a valuable contribution to your team.`
  },
  {
    title: 'Qualifications',
    content: `In my previous role as a Software Engineer at [Previous Company], I:\n
• Built a web platform that improved user engagement by 30%.\n
• Reduced app loading time by 40% by optimizing performance.\n
• Migrated systems to cloud infrastructure, increasing reliability and security.\n
I enjoy solving problems and creating efficient, user-friendly applications. I’m also passionate about working in collaborative teams and mentoring junior developers.`
  },
  {
    title: 'Closing Paragraph',
    content: `Thank you for considering my application. I’m excited about the opportunity to contribute to [Company Name]'s success. I look forward to the possibility of discussing how my skills can benefit your team. Please feel free to contact me at your earliest convenience.\n\nBest regards,\nJohn Doe`
  }
]

export function Cv() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const downloadPDF = () => {
    const link = document.createElement('a')
    link.href = '/Resume YANY,.pdf' // Correct path from the public folder
    link.download = 'sample-cv.pdf'
    link.click()
  }

  return (
    <section className="py-2 bg-gray-50">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* cover letter */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="text-center border-b border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-blue-600">
              Professional Cover Letter
            </h2>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="space-y-6">
              {coverLetterSections.map((section, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* explore cv */}
        <div className="flex flex-col items-center gap-4 pt-8 pb-8 px-4">
          <h1 className="text-primary md:text-3xl text-xl font-bold uppercase text-center">
            Explore Sample CV
          </h1>{' '}
          <h6 className="md:text-lg text-md text-center">
            Here is a professional CV from senior
          </h6>
          <button
            onClick={downloadPDF}
            className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Download CV as PDF
          </button>{' '}
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-8 ">
          {CV.map((item, i) => (
            <div key={i} className="w-auto h-auto rounded-xl">
              <Image
                src={item.img}
                alt=""
                layout="responsive"
                width={100}
                height={100}
                className="rounded-xl"
                onClick={() => setSelectedImage(item.img)}
              />
            </div>
          ))}
        </div>
      </div>

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

export default Cv
