import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeSnippet({ code, css }) {
  return (
    <>
      <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
        {code}
      </SyntaxHighlighter>
      {css && <SyntaxHighlighter language="css" style={vscDarkPlus}>
        {css}
      </SyntaxHighlighter>}
    </>
  );
}
