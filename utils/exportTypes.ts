export type ExperienceProps = {
  content: string
  data: { [key: string]: any; }
}

export interface ExperienceContent extends ExperienceProps {
  filename: string
}