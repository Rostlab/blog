import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, website, twitter, linkedin, github } = content

  return (
    <>
      <div className="p-4 xl:w-1/2">
        <div className="flex h-full flex-col items-center justify-center text-center sm:flex-row sm:justify-start sm:text-left">
          {avatar && (
            <Image
              src={avatar}
              alt="avatar"
              width={192}
              height={192}
              className="h-fit w-2/4 rounded-full xl:w-48"
            />
          )}
          <div className="flex-grow sm:pl-8">
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>

            <div className="prose max-w-none pb-8 pt-8 text-justify dark:prose-dark">
              {children}
            </div>
            <div className="inline-flex space-x-3 pt-6">
              <SocialIcon kind="website" href={website} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
