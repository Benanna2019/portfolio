import * as React from 'react'
import { timestampToCleanTime } from '../../lib/transformers'
import { Detail } from '../ListDetail/Detail'
import { Tags } from '../Tags'
import { MarkdownRenderer } from '../MarkdownRenderer'
import { Link } from '@remix-run/react'

export default function ArticleDetail({ post }: any) {
  const titleRef = React.useRef(null)

  if (!post) {
    return <Detail.Null />
  }

  const publishedAt = timestampToCleanTime({ timestamp: post.date })
  return (
    <>
      <Detail.Container data-cy="post-detail">
        <Detail.ContentContainer>
          <Detail.Header>
            <Link
              to="/articles"
              prefetch="intent"
              className="hover:animate-pulse hover:text-blue-500 hover:underline"
            >
              <p>← Back</p>
            </Link>
            <Tags tags={post.categories} />
            <Detail.Title ref={titleRef}>{post.title}</Detail.Title>
            <span title={publishedAt.raw} className="inline-block leading-snug">
              {publishedAt.formatted}
            </span>
          </Detail.Header>

          <MarkdownRenderer children={post.body} className="prose mt-8" />

          {/* bottom padding to give space between post content and comments */}
          <div className="py-6" />
        </Detail.ContentContainer>
      </Detail.Container>
    </>
  )
}
