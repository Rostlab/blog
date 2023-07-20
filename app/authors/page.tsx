import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <section className="body-font text-gray-600">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Our Team
        </h1>
      </div>
      {!allAuthors.length && 'No authors found.'}
      {allAuthors.length > 0 && (
        <div className="container mx-auto px-5 py-24">
          <div className="-m-4 flex flex-wrap">
            {allAuthors.map((author) => {
              const mainContent = coreContent(author)
              return (
                <AuthorLayout key={author._id} content={mainContent}>
                  <MDXLayoutRenderer code={author.body.code} />
                </AuthorLayout>
              )
            })}
          </div>
        </div>
      )}
    </section>
  )
}
