import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Summarizer() {
  return (
    <div>
      <Form
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Form.Control
          as="textarea"
          placeholder="Enter text to summarize"
          rows={3}
          style={{ width: "50%", margin: "10px" }}
        />
        <Button variant="primary" type="submit" style={{ margin: "10px" }}>
          Summarize Text
        </Button>
        <Form.Control
          as="textarea"
          placeholder="Summarized Text"
          readOnly
          rows={3}
          style={{ width: "50%", margin: "10px" }}
        />
        <Button onClick={() => alert("Copied")}>Copy Text</Button>
      </Form>
    </div>
  );
}

export default Summarizer;
