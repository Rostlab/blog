import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import { allPages } from 'contentlayer/generated'
import type { Page } from 'contentlayer/generated'
import PageLayout from '@/layouts/PageLayout'
import { Metadata } from 'next'
import { genPageMetadata } from 'app/seo'
import { notFound } from 'next/navigation'

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata | undefined> {
  const slug = decodeURI(params.slug.join('/'))
  const page = allPages.find((p) => p.slug === slug)
  if (!page) return

  return genPageMetadata({ title: page.title })
}

export const generateStaticParams = async () => {
  const paths = allPages.map((p) => ({ slug: p.slug.split('/') }))
  return paths
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'))
  const page = allPages.find((p) => p.slug === slug) as Page

  if (!page) notFound()
  const mainContent = coreContent(page)

  return (
    <>
      <PageLayout content={mainContent}>
        <MDXLayoutRenderer code={page.body.code} components={components} toc={page.toc} />
      </PageLayout>
    </>
  )
}
