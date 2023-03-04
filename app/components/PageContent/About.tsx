import React from 'react'
import { Link, MapPin } from 'react-feather'
import { Detail } from '../ListDetail/Detail'
import {
  SectionContainer,
  SectionContent,
  SectionTitle,
  TableRow,
} from './Home'
import CharlestonPinMap from '../../../public/pin_map_charleston.png'

export function AboutPageContent() {
  const workHistory = [
    {
      href: 'https://comparecredit.com',
      title: 'CompareCredit',
      subtitle: 'Associate Software Engineer',
      date: '2022—\u00a0\u00a0',
    },
    {
      href: 'https://careerchangers.co',
      title: 'Career Changer Newsletter',
      subtitle: 'Owner',
      date: '2020—\u00a0\u00a0',
    },
    {
      href: 'https://tiag.net/',
      title: 'TIAG',
      subtitle: 'Junior Software Developer',
      date: '2021—22',
    },
  ]

  const speakingData = [
    {
      href: '',
      title: 'Check back later...',
      date: 'tbd',
    },
  ]

  return (
    <Detail.Container data-cy="home-intro">
      <Detail.ContentContainer>
        <div className="space-y-8 pb-24 md:space-y-16">
          <SectionContainer className="mx-auto">
            <SectionContent>
              <div className="prose mx-auto">
                <h1 className="underline">About Me</h1>
                <h2>Socials</h2>
                <div className="flex flex-col space-y-3">
                  <TableRow
                    href={'https://www.linkedin.com/in/benjaminapatton/'}
                    title={'LinkedIn'}
                    subtitle={'Follow'}
                    date={''}
                  />
                  <TableRow
                    href={
                      'https://www.youtube.com/channel/UCdznsnxpwF9qQCqfOomUqXg'
                    }
                    title={'YouTube'}
                    subtitle={'Subscribe'}
                    date={''}
                  />
                  <TableRow
                    href={'https://github.com/Benanna2019'}
                    title={'GitHub'}
                    subtitle={'Follow'}
                    date={''}
                  />
                </div>
              </div>
            </SectionContent>
          </SectionContainer>

          <SectionContainer className="mx-auto">
            <SectionContent>
              <div className="prose mx-auto">
                <h2>Location</h2>
                <img src={CharlestonPinMap} />
                <p className="text-quaternary flex items-center justify-end space-x-2 pt-2 text-sm md:text-right">
                  <MapPin size={12} />
                  <span>Charleston, SC</span>
                </p>
              </div>
            </SectionContent>
          </SectionContainer>

          <SectionContainer className="mx-auto">
            <SectionContent>
              <div className="prose mx-auto">
                <h2>Work Exp</h2>
                <div className="flex flex-col space-y-3">
                  {workHistory.map((job) => (
                    <TableRow
                      href={job.href}
                      title={job.title}
                      subtitle={job.subtitle}
                      date={job.date}
                      key={job.href}
                    />
                  ))}
                </div>
              </div>
            </SectionContent>
          </SectionContainer>

          <SectionContainer className="mx-auto">
            <SectionContent>
              <div className="prose mx-auto">
                <h2>Speaking</h2>
                <div className="flex flex-col space-y-3">
                  {speakingData
                    ? speakingData.map((s) => (
                        <TableRow
                          href={s.href}
                          title={s.title}
                          date={s.date}
                          key={s.href}
                        />
                      ))
                    : null}
                </div>
              </div>
            </SectionContent>
          </SectionContainer>
        </div>
      </Detail.ContentContainer>
    </Detail.Container>
  )
}
