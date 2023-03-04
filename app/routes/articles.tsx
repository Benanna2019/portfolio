import { LoaderFunction } from '@remix-run/node'
import React from 'react'
import { json, useLoaderData } from 'react-router'
import { Detail } from '~/components/ListDetail/Detail'
import { ListItem } from '~/components/ListDetail/ListItem'
import { SectionContainer, SectionContent } from '~/components/PageContent/Home'
import { Post, Posts } from '~/lib/post-validator'
import { getPosts } from '~/models/post.server'
import { compose, takeRight } from 'lodash/fp'

export const loader: LoaderFunction = async () => {
  let data = await getPosts()
  return json(data)
}

export default function Articles() {
  let data = useLoaderData() as Posts

  console.log('data', compose(takeRight(1))(data))

  return (
    <div className="mx-auto flex max-w-5xl flex-col pt-8">
      <Detail.Container data-cy="home-intro">
        <Detail.ContentContainer>
          <div className="space-y-8 pb-24 md:space-y-16">
            <SectionContainer className="mx-auto">
              <SectionContent>
                <div className="prose mx-auto">
                  <h1 className=" text-blue-500">All Articles</h1>
                  {data.map((post: Post) => (
                    <ListItem
                      key={post._id}
                      href={`/articles/${post.slug}`}
                      title={post.title}
                      description={post.excerpt}
                      byline={post.date}
                    />
                  ))}
                </div>
              </SectionContent>
            </SectionContainer>
          </div>
        </Detail.ContentContainer>
      </Detail.Container>
    </div>
  )
}
