import ReactMarkdown from 'react-markdown'

import { MarkdownProps } from '../../types/general'

const RenderMarkdown = ({ text }: MarkdownProps) => {
  return <ReactMarkdown>{text}</ReactMarkdown>
}

export default RenderMarkdown
