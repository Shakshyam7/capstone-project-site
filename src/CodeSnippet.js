export default function CodeSnippet(props) {
  return (
    <pre
      style={{
        background: "rgba(0, 0, 0, 0.87)",
        width: "fit-content",
        height: "80vh",
        padding: "16px",
        overflow: "scroll",
      }}
    >
      <span style={{ color: "rgba(209, 81, 111, 0.87)" }}>
        {props.codeLanguage}
      </span>
      <code
        style={{ color: "rgba(255, 255, 255, 0.87)", justifyContent: "center" }}
      >
        {props.code}
      </code>
    </pre>
  );
}
