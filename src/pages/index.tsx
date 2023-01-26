import Animation from '@/components/Animation'
import Navbar from '@/components/Navbar'
import Showcase from '@/components/Showcase'
import React from 'react'


interface PageProps {
  data: {
    texts: Array<{
      heading: string
      subHeading: string
      description: string

    }>
  }
}

const Page = ({ data }: PageProps) => {
  
  return (

    <div>
      <Navbar />
      <Showcase />
      <Animation texts={data.texts} />
    </div>
  )
}

export async function getStaticProps() {
  
  const res = await fetch(' https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1')
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

export default Page