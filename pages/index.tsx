import type { NextPage } from "next"
import { createClient } from "contentful"
import Contact from "../components/Contact"
import Container from "../components/Container"

import Hero from "../components/Hero"
import Skills from "../components/Skills"
import { jdlpHighlight, jdlpDark } from "../styles/colours"

import Experience from "../components/Experience"
import { config } from "../utils/getEnvVariable"
import { mapContentfulEntry } from "../utils/mapContentfulEntry"
import { FullPage } from "../types/cms"

const css = `
body {
  margin: 0
  background-color: ${jdlpHighlight}
  color: ${jdlpDark}
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
}
`

type Props = {
  minifiedPage: FullPage
}

const Home: NextPage<Props> = ({ minifiedPage }) => {
  const { skills, title, headline, bio, experience } = minifiedPage
  return (
    <Container>
      <Hero title={title} headline={headline} bio={bio} />
      <Contact />
      <Skills skills={skills} />
      <Experience experiences={experience} />
      <style jsx global>
        {css}
      </style>
    </Container>
  )
}

export default Home

export async function getStaticProps() {

  const client = createClient({
    space: config.contentful.spaceId,
    accessToken: config.contentful.accessToken,
  })

  const page = await client.getEntry(config.contentful.mainPageId)

  const minifiedPage = mapContentfulEntry(page)
  console.log('minifiedPage', JSON.stringify(minifiedPage))
 
  return {
    props: {
      minifiedPage: minifiedPage,
    },
  }
}
