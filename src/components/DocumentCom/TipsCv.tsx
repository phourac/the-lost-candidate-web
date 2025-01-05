'use client'
import { Briefcase } from 'iconsax-react'
import React, { useState } from 'react'
import {
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaStar,
  FaFile,
  FaBook,
  FaAward,
  FaHeart,
  FaChalkboardTeacher
} from 'react-icons/fa'

import Resume from './Resume'
import Cv from './Cv'

const ResumeAndCVTips = () => {
  const [activeTab, setActiveTab] = useState('resume')

  // Icon mapping for each section
  const getIcon = (title: string) => {
    switch (title) {
      case 'Contact Information':
        return <FaUser className="w-5 h-5" />
      case 'Education Background':
        return <FaGraduationCap className="w-5 h-5" />
      case 'Work Experience':
        return <FaBriefcase className="w-5 h-5" />
      case 'Work Experience & Employment History':
        return <FaBriefcase className="w-5 h-5" />
      case 'Skills & Languages':
        return <FaStar className="w-5 h-5" />
      case 'References':
        return <FaFile className="w-5 h-5" />
      case 'Publications':
        return <FaBook className="w-5 h-5" />
      case 'Awards':
        return <FaAward className="w-5 h-5" />
      case 'Hobbies & Interests':
        return <FaHeart className="w-5 h-5" /> // Heart icon for hobbies
      case 'Training & Courses':
        return <FaChalkboardTeacher className="w-5 h-5" /> // Chalkboard icon for training
      default:
        return null
    }
  }
  const resumeTips = [
    {
      title: 'Contact Information',
      description:
        'Include your full name, professional email, phone number, location, and relevant links (LinkedIn, Portfolio, GitHub).',
      examples: [
        'Sok Rosa',
        'Rosa.sok@email.com',
        '085704481',
        'linkedin.com/in/sokrosa'
      ]
    },
    {
      title: 'Education Background',
      description:
        "Include relevant degrees, certifications, and training. Add GPA if it's above 3.5.",
      examples: [
        "Bachelor's in Computer Science",
        'General English Certificate',
        'Digital Marketing Certificate'
      ]
    },
    {
      title: 'Work Experience',
      description: 'List your work history and volunteer experience (if any).',
      examples: [],
      describe: `Frontend Developer  
Degital One — Phnom Penh  
Jan 2023 – Dec 2024  

- Developed a chat application using TypeScript and Next.js that increased user engagement by 25%.  
- Implemented infinite scroll with scroll restoration using useRequest from ahooks.  
- Collaborated with UX designers to redesign the order tracking UI, reducing user complaints by 40%.`
    },
    {
      title: 'Skills & Languages',
      description:
        "List technical, soft, and language skills relevant to the position you're applying for.",
      examples: [
        'Khmer',
        'Englsih',
        'Chinese',
        'JavaScript, React, Node.js',
        'Project Management'
      ]
    },
    {
      title: 'References',
      description:
        'List professional references who can verify your skills, experience, and character.',
      examples: [
        'Jane Smith - Senior Manager at XYZ Tech Solutions | 📞 (123) 456-7890 | ✉️ janesmith@example.com',
        'Michael Johnson - Team Lead at ABC Corp | 📞 (987) 654-3210 | ✉️ michael.johnson@abccorp.com'
      ]
    }
  ]

  const cvTips = [
    {
      title: 'Contact Information',
      description:
        'Provide comprehensive contact details and professional profiles.',
      examples: [
        'Full academic title and name',
        'Professional email address',
        'Phone number',
        'LinkedIn profile',
        'Research profiles (e.g., Google Scholar, ResearchGate)'
      ]
    },
    {
      title: 'Education Background',
      description:
        'Detail your complete academic history, including research work.',
      examples: [
        'Ph.D. in Computer Science - University Name (2018-2022)',
        'Thesis: "Advanced Applications of Machine Learning in Healthcare"',
        'Master of Science in Data Analytics (2016-2018)',
        'Bachelor of Science in Computer Science (2012-2016)'
      ]
    },
    {
      title: 'Awards',
      description: 'Include academic achievements, grants, and recognition.',
      examples: [
        'Research Excellence Award 2023',
        'Best Paper Award - International Conference 2022',
        'Academic Merit Scholarship 2021'
      ]
    },
    {
      title: 'Work Experience & Employment History',
      description:
        'Detail academic positions, research roles, relevant work history, internships, and volunteer positions.',
      examples: [],
      describe: `Research Assistant Professor
    University Name — Location
    2022 – Present

    - Lead researcher on AI applications in healthcare
    - Secured $500,000 in research grants
    - Supervised 5 PhD candidates
    - Published 8 peer-reviewed papers

    Data Analyst Intern
    XYZ Corp. — Location
    Summer 2018

    - Analyzed customer data and produced weekly reports
    - Automated data entry processes using Python`
    },
    {
      title: 'Hobbies & Interests',
      description:
        'Include personal interests or hobbies that demonstrate your personality, creativity, or skills.',
      examples: [
        'Photography - Exploring visual storytelling',
        'Coding - Developing personal projects and open-source contributions',
        'Traveling - Exploring new cultures and languages'
      ]
    },
    {
      title: 'Training & Courses',
      description:
        'List any additional training, certifications, or online courses you have completed to enhance your skills.',
      examples: [
        'Advanced Data Science with Python - Coursera',
        'Machine Learning Certification - Stanford University',
        'Project Management Professional (PMP) - PMI'
      ]
    },
    {
      title: 'Skills & Languages',
      description:
        'List technical, soft skills, and languages that are relevant to the job you are applying for.',
      examples: [
        'Programming Languages: Python, Java, SQL',
        'Data Analysis: Excel, R, Tableau',
        'Communication: Public speaking, team collaboration',
        'Languages: English (Fluent), Spanish (Intermediate), French (Basic)'
      ]
    },
    {
      title: 'References',
      description:
        'Provide professional references or mention that they are available upon request.',
      examples: [
        'Dr. Jane Doe - Professor, University Name (email@example.com)',
        'John Smith - Senior Researcher, Company Name (email@example.com)'
      ]
    }
  ]

  const renderSection = (tips: any) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {tips.map((tip: any, index: number) => (
        <div
          id={tip.title}
          key={index}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
              {getIcon(tip.title)}
            </div>
            <h2 className="text-xl font-semibold text-gray-900">{tip.title}</h2>
          </div>

          <p className="text-gray-600 mb-4">{tip.description}</p>

          {tip.examples.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700 font-semibold">
                Examples:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {tip.examples.map((example: any, idx: string) => (
                  <li key={idx} className="text-sm pl-2">
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {tip.describe && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-800 mb-2 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Description:
              </h3>
              <p className="text-sm text-gray-700 whitespace-pre-line">
                {tip.describe}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  )

  return (
    <>
      <section className="py-8 bg-gray-50">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center gap-4 pb-8">
            <h1 className="text-primary md:text-3xl text-xl font-bold uppercase text-center">
              Professional Document Writing Guide
            </h1>
          </div>

          {/* Custom tabs using only Tailwind */}
          <div className="w-full max-w-md mx-auto mb-8">
            <div className="flex rounded-lg bg-gray-100 p-1">
              <button
                onClick={() => setActiveTab('resume')}
                className={`flex-1 py-2 px-4 rounded-md text-lg font-medium transition-colors duration-150 ${
                  activeTab === 'resume'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Resume
              </button>
              <button
                onClick={() => setActiveTab('cv')}
                className={`flex-1 py-2 px-4 rounded-md text-lg font-medium transition-colors duration-150 ${
                  activeTab === 'cv'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                CV
              </button>
            </div>
          </div>

          {/* Tab content */}
          <div className="transition-opacity duration-150">
            {activeTab === 'resume' && (
              <div>
                <div className="bg-white p-4 rounded-lg mb-6">
                  <h2 className="text-xl font-semibold text-blue-900 mb-2">
                    What is a Resume?
                  </h2>
                  <p className="text-gray-600">
                    A resume is a brief (1-2 pages) summary of your professional
                    experience, skills, and achievements. It's typically used
                    for job applications in business and industry.
                  </p>
                </div>
                {renderSection(resumeTips)}
              </div>
            )}

            {activeTab === 'cv' && (
              <div>
                <div className="bg-white p-4 rounded-lg mb-6">
                  <h2 className="text-xl font-semibold text-blue-900 mb-2">
                    What is a CV?
                  </h2>
                  <p className="text-gray-600">
                    A Curriculum Vitae (CV) is a comprehensive document
                    detailing your academic and professional history. It's
                    commonly used in academia, research positions, and some
                    international job applications.
                  </p>
                </div>
                {renderSection(cvTips)}
              </div>
            )}
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">
              Pro Tips
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="text-blue-600 mt-1">•</div>
                <p className="text-blue-800">
                  Tailor your document to the specific position or institution
                </p>
              </li>
              <li className="flex items-start gap-2">
                <div className="text-blue-600 mt-1">•</div>
                <p className="text-blue-800">
                  Use clear, professional formatting and fonts
                </p>
              </li>
              <li className="flex items-start gap-2">
                <div className="text-blue-600 mt-1">•</div>
                <p className="text-blue-800">
                  Keep information relevant and up-to-date
                </p>
              </li>
              {activeTab === 'resume' ? (
                <>
                  <li className="flex items-start gap-2">
                    <div className="text-blue-600 mt-1">•</div>
                    <p className="text-blue-800">
                      Resume focuses on relevant work experience, skills, and
                      education related to a specific job you're applying for.{' '}
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="text-blue-600 mt-1">•</div>
                    <p className="text-blue-800">
                      Resume primarily used in business, tech, and non-academic
                      jobs, where you want to present your key qualifications
                      efficiently.
                    </p>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-start gap-2">
                    <div className="text-blue-600 mt-1">•</div>
                    <p className="text-blue-800">
                      CV focuses on academic history, research, publications,
                      and professional achievements. It’s more about a complete
                      career record, especially in academic, research, or
                      medical fields.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="text-blue-600 mt-1">•</div>
                    <p className="text-blue-800">
                      CV used mainly for academic, research, and medical jobs,
                      as well as international job applications. It's about
                      showcasing your academic accomplishments and professional
                      journey in detail.
                    </p>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </section>
      {activeTab === 'resume' ? <Resume /> : <Cv />}
    </>
  )
}

export default ResumeAndCVTips
