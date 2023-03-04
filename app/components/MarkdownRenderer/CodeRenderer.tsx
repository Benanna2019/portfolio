// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter'
export function CodeRenderer({
  text,
  language,
  ...rest
}: {
  text: string
  language: string
  [key: string]: any
}) {
  return (
    <SyntaxHighlighter
      showLineNumbers={false}
      useInlineStyles={false}
      language={language}
      children={text}
      wrapLongLines
      {...rest}
    />
  )
}
