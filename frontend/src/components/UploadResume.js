import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function UploadResume() {
  const [file, setFile] = useState(null);
  const [results, setResults] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post("http://localhost:8000/upload", formData);
    setResults(res.data);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <TextField
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        variant="outlined"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleUpload}
        style={{ marginLeft: "10px" }}
      >
        Upload
      </Button>
      {results && <Results data={results} />}
    </div>
  );
}

export default UploadResume;
