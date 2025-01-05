const HowToWriteResume = () => {
  const tips = [
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
        'List professional references who can verify your skills, experience, and character. Be sure to include their full name, job title, company, phone number, and email address.',
      examples: [
        'Jane Smith - Senior Manager at XYZ Tech Solutions | 📞 (123) 456-7890 | ✉️ janesmith@example.com',
        'Michael Johnson - Team Lead at ABC Corp | 📞 (987) 654-3210 | ✉️ michael.johnson@abccorp.com',
        'Professor David Brown - University of Example | 📞 (555) 123-4567 | ✉️ david.brown@university.com'
      ]
    }
  ]

  return (
    <section className="py-8 bg-gray-50">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center gap-4 pb-8">
          <h1 className="text-primary md:text-3xl text-xl font-bold uppercase text-center">
            How to Write a Professional Resume
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl">
            Follow these essential tips to create a compelling CV that stands
            out to employers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  {tip.title}
                </h2>
              </div>

              <p className="text-gray-600 mb-4">{tip.description}</p>

              {tip.examples.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700 font-semibold">
                    Examples:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {tip.examples.map((example, idx) => (
                      <li key={idx} className="text-sm">
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {tip.describe && (
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-800 mb-2">
                    Job Description:
                  </h3>
                  <p className="text-sm text-gray-700 whitespace-pre-line">
                    {tip.describe}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowToWriteResume
