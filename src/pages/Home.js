import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        minHeight: "50vh",
      }}
    >
      <h1> Welcome to Edulper!</h1>
      <Form>
        <Button
          onClick={() => navigate("/SpeechToText")}
          variant="primary"
          type="submit"
          style={{ margin: "10px" }}
        >
          Speech to Text
        </Button>
        <Button
          onClick={() => navigate("/TextToSpeech")}
          variant="primary"
          type="submit"
          style={{ margin: "10px" }}
        >
          Text to Speech
        </Button>
        <Button
          onClick={() => navigate("/Summarizer")}
          variant="primary"
          type="submit"
          style={{ margin: "10px" }}
        >
          Summarize
        </Button>
      </Form>
    </div>
  );
}

export default Home;
