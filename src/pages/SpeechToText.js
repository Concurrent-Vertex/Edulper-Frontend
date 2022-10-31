import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SpeechToText() {
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
        <Button variant="primary" type="submit" style={{ margin: "10px" }}>
          Click here to speak
        </Button>
        <Form.Control
          as="textarea"
          placeholder="Spoken Text"
          readOnly
          rows={3}
          style={{ width: "50%", margin: "10px" }}
        />
        <Button onClick={() => alert("Saved")}>Save as notes</Button>
      </Form>
    </div>
  );
}

export default SpeechToText;
