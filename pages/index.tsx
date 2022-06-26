import type { NextPage } from 'next'
import Contact from '../components/Contact'
import Container from '../components/Container'

import Hero from "../components/Hero"
import Skills from '../components/Skills'
import { jdlpHighlight, jdlpDark } from '../styles/colours'

import getMDContents from '../utils/getMDContents'
import getMarkdown from '../utils/getMarkdown'
import Experience from '../components/Experience'
import { ExperienceContent } from '../utils/exportTypes'

const css = `
body {
  margin: 0;
  background-color: ${jdlpHighlight};
  color: ${jdlpDark};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`

type Props = {
  experienceContent: ExperienceContent[]
}

const Home: NextPage<Props> = ({ experienceContent }) => {
  const experienceMarkdown = getMarkdown(experienceContent)
  const orderedExperience = experienceMarkdown.sort(
    (a, b) =>
      +new Date(b.data.start) - +new Date(a.data.start)
  )
  return (
    <Container>
      <Hero />
      <Contact />
      <Skills />
      <Experience experienceMarkdown={orderedExperience} />
      <style jsx global>{css}</style>
    </Container>
  )
}

export default Home

export async function getStaticProps() {

  const experienceContent = await getMDContents("experience")

  return {
    props: {
      experienceContent,
    }
  }
}
