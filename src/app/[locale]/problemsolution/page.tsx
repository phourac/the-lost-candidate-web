import React from 'react'
import Problem from '../../../../public/images/Problem.png'

import { useTranslations } from 'next-intl'
import { Metadata } from 'next'

import AccordionInterview from '@/components/DocumentCom/AccordionInterview'
import AccordionProblem from '@/components/ProblemAndSolutionCom/AccordionProblem'
import Header from '@/components/Header'

export const metadata: Metadata = {
  openGraph: {
    title: 'Problem Solution - The Lost Candiate',
    description:
      'The Lost Candiate is a website that offer a variety of strategies and resources to help students find a job that aligns with their skills and career aspirations.'
  },
  title: 'Problem Solution - The Lost Candiate',
  description:
    'The Lost Candiate is a website that offer a variety of strategies and resources to help students find a job that aligns with their skills and career aspirations.'
}

function Problemsolution() {
  const t = useTranslations('Index')

  return (
    <div className="w-full">
      <Header img={Problem} title={t('Problem and Solution')} />

      <div className="px-4 my-16">
        <AccordionProblem />
      </div>
    </div>
  )
}

export default Problemsolution
