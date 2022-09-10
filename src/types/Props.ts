import Theme from './Theme'

interface Props {
  value: string
  handler: (param: string) => void
  theme?: Theme
  required?: boolean
  toolbar?: string[]
}

export default Props
