/* eslint-disable jsx-a11y/anchor-has-content */
import deepmerge from 'deepmerge'
import { Link } from '@remix-run/react'
import Markdown from 'react-markdown'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
//@ts-ignore
import linkifyRegex from 'remark-linkify-regex'

import { CodeRenderer } from './CodeRenderer'

function LinkRenderer({ href, ...rest }: any) {
  // auto-link headings
  if (href.startsWith('#')) {
    return <a className="hover:text-blue-500 " href={href} {...rest} />
  }

  if (href.startsWith('@')) {
    // link to a mention
    return (
      <Link to={`/u/${href.slice(1)}`} {...rest}>
        <span className="hover:text-tropical-rain-forest " {...rest} />
      </Link>
    )
  }
  try {
    const url = new URL(href)
    if (url.origin === 'https://benapatton.dev') {
      return (
        <Link to={href}>
          <span
            className="hover:text-blue-500  hover:text-opacity-20"
            {...rest}
          />
        </Link>
      )
    }
    return (
      <a
        className="hover:text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        {...rest}
      />
    )
  } catch (e) {
    console.error(e)
    return (
      <a
        className="hover:text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        {...rest}
      />
    )
  }
}

function getComponentsForVariant(variant: any) {
  // Blog posts
  switch (variant) {
    case 'longform': {
      return {
        a: LinkRenderer,
        pre({ node, inline, className, children, ...props }: any) {
          const language = /language-(\w+)/.exec(className || '')?.[1]
          return !inline && language ? (
            <CodeRenderer
              text={String(children).replace(/\n$/, '')}
              language={language}
              {...props}
            />
          ) : (
            <>{children}</>
          )
        },
        code({ node, inline, className, children, ...props }: any) {
          const language = /language-(\w+)/.exec(className || '')?.[1]
          return !inline && language ? (
            <CodeRenderer
              text={String(children).replace(/\n$/, '')}
              language={language}
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        },
      }
    }
    // Questions, comments, descriptions on bookmarks, etc.
    case 'comment': {
      return {
        a: LinkRenderer,
        h1: 'p',
        h2: 'p',
        h3: 'p',
        h4: 'p',
        h5: 'p',
        h6: 'p',
        pre({ children }: any) {
          return <>{children}</>
        },
        code({ node, inline, className, children, ...props }: any) {
          const language = /language-(\w+)/.exec(className || '')?.[1]
          return !inline && language ? (
            <CodeRenderer
              text={String(children).replace(/\n$/, '')}
              language={language}
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        },
      }
    }
  }
}

export function MarkdownRenderer(props: any) {
  // variant = 'longform' | 'comment'
  const { children, variant = 'longform', ...rest } = props

  const schema = deepmerge(defaultSchema, {
    //@ts-ignore
    tagNames: [...defaultSchema.tagNames, 'sup', 'sub', 'section'],
    attributes: {
      '*': ['className'],
    },
    clobberPrefix: '',
    clobber: ['name', 'id'],
  })

  const components = getComponentsForVariant(variant)

  return (
    <Markdown
      {...rest}
      remarkPlugins={[remarkGfm, linkifyRegex(/^(?!.*\bRT\b)(?:.+\s)?@\w+/i)]}
      rehypePlugins={[
        [rehypeSanitize, schema],
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      ]}
      components={components}
    >
      {children}
    </Markdown>
  )
}
