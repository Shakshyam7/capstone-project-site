import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import "./CodeSnippet.css";

export default function CodeSnippet({ code, css }) {
  return (
    <>
      <div className = "codeLanguage">React</div>
      <div className="codeContainer">
        <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
          {code}
        </SyntaxHighlighter>
      </div>

      {css && (
        <>
          <div className = "codeLanguage">CSS</div>

          <div className="cssContainer">
            <SyntaxHighlighter language="css" style={vscDarkPlus}>
              {css}
            </SyntaxHighlighter>
          </div>
        </>
      )}
    </>
  );
}
