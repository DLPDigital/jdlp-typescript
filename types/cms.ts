export type Icon = {
  title: string
  src: string
  id: string
}

export type Skill = {
  title: string
  icon: Icon
  __typename: "Skill"
  id: string
}

export type Experience = {
  jobTitle: string
  company: string
  tenure: string
  details: string
  location: string
  __typename: "ExperienceJob"
  id: string
}

export type FullPage = {
  title: string
  headline: string
  bio: string
  skills: Skill[]
  experience: Experience[]
  __typename: "FullPage"
  id: string
}