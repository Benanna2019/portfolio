import * as React from 'react'
import { Compass } from 'react-feather'

import Button from '../Button'
import { LoadingSpinner } from '../LoadingSpinner'

function ContentContainer(
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement>,
) {
  return (
    <div
      className="mx-auto w-full max-w-3xl px-4 py-12 pb-10 md:px-8"
      {...props}
    />
  )
}

interface DetailContainerProps {
  children: React.ReactNode
}

// eslint-disable-next-line react/display-name
const Container = React.forwardRef<HTMLDivElement, DetailContainerProps>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        id="main"
        className="relative flex max-h-screen w-full flex-col"
        {...props}
      />
    )
  },
)

function Header(
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement>,
) {
  return <div className="space-y-3" {...props} />
}

interface TitleProps {
  children: React.ReactNode
}

// eslint-disable-next-line react/display-name
const Title = React.forwardRef<HTMLHeadingElement, TitleProps>((props, ref) => {
  return (
    <h1
      ref={ref}
      className="text-primary font-sans text-2xl font-bold xl:text-3xl"
      {...props}
    />
  )
})

function Loading() {
  return (
    <Container>
      <div className="flex flex-1 flex-col items-center justify-center">
        <LoadingSpinner />
      </div>
    </Container>
  )
}

function Null() {
  return (
    <Container>
      <div className="flex flex-1 flex-col items-center justify-center space-y-6 px-8 text-center lg:px-16">
        <Compass className="text-secondary" size={32} />
        <div className="flex flex-col space-y-1">
          <p className="text-primary font-semibold">
            What you seek does not exist.
          </p>
          <p className="text-tertiary">
            Maybe this link is broken. Maybe something was deleted, or moved. In
            any case, there’s nothing to see here...
          </p>
        </div>
        <Button href="/">Go home</Button>
      </div>
    </Container>
  )
}

export const Detail = {
  Container,
  ContentContainer,
  Header,
  Title,
  Loading,
  Null,
}
