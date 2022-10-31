import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function TextToSpeech() {
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
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Choose notes to read out loud</Form.Label>
          <Form.Control type="file" multiple />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ margin: "10px" }}>
          Click here for text to speech
        </Button>
      </Form>
    </div>
  );
}

export default TextToSpeech;
