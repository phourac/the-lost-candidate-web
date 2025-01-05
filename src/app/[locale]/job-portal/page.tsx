import React from 'react'

import { useTranslations } from 'next-intl'
import Jobs from '../../../../public/images/Jobs.png'
import { Metadata } from 'next'
import WebsiteApp from '@/components/JobPortal/WensiteApp'
import SocialMedia from '@/components/JobPortal/SocialMedia'
import Header from '@/components/Header'

export const metadata: Metadata = {
  openGraph: {
    title: 'Job Portal - The Lost Candiate',
    description:
      'The Lost Candiate is a website that offer a variety of strategies and resources to help students find a job that aligns with their skills and career aspirations.'
  },
  title: 'Job Portal - The Lost Candiate',
  description:
    'The Lost Candiate is a website that offer a variety of strategies and resources to help students find a job that aligns with their skills and career aspirations.'
}

function JobPortal() {
  const t = useTranslations('Index')
  return (
    <div className="w-full">
      <Header img={Jobs} title={t('Job Portal')} />

      <WebsiteApp />
      <SocialMedia />
    </div>
  )
}

export default JobPortal
