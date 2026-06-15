import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Results({ data }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <Card>
        <CardContent>
          <Typography variant="h6">Missing Sections:</Typography>
          <ul>
            {data.missing_sections.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
          <Typography variant="h6">Suggestions:</Typography>
          <ul>
            {data.suggestions.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

export default Results;
