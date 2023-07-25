import { ReactNode } from 'react'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Page } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

interface LayoutProps {
  content: CoreContent<Page>
  children: ReactNode
}

export default function PageLayout({ content, children }: LayoutProps) {
  const { path, slug, title } = content

  return (
    <SectionContainer>
      <div>
        <header>
          <div className="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
            <div>
              <PageTitle>{title}</PageTitle>
            </div>
          </div>
        </header>
        <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0">
          <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
            <div className="prose max-w-none pb-8 pt-10 dark:prose-dark">{children}</div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
