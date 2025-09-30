// src/pages/MentorProfile.js
import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function MentorProfile({ name, title, img, bio }) {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box textAlign="center" mb={4}>
        <img
          src={img}
          alt={name}
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
          }}
        />
      </Box>

      <Typography variant="h4" align="center" gutterBottom>
        {name}
      </Typography>
      <Typography
        variant="h6"
        align="center"
        color="primary"
        gutterBottom
        sx={{ mb: 3 }}
      >
        {title}
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ lineHeight: 1.8, textAlign: "justify", mb: 4 }}
      >
        {bio}
      </Typography>

      <Box textAlign="center">
        <Button
          component={Link}
          to="/mentors"
          variant="contained"
          color="primary"
          sx={{ borderRadius: "20px", px: 3 }}
        >
          ← Back to Mentors
        </Button>
      </Box>
    </Container>
  );
}// src/pages/MentorProfile.js
import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function MentorProfile({ name, title, img, bio }) {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box textAlign="center" mb={4}>
        <img
          src={img}
          alt={name}
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
          }}
        />
      </Box>

      <Typography variant="h4" align="center" gutterBottom>
        {name}
      </Typography>
      <Typography
        variant="h6"
        align="center"
        color="primary"
        gutterBottom
        sx={{ mb: 3 }}
      >
        {title}
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ lineHeight: 1.8, textAlign: "justify", mb: 4 }}
      >
        {bio}
      </Typography>

      <Box textAlign="center">
        <Button
          component={Link}
          to="/mentors"
          variant="contained"
          color="primary"
          sx={{ borderRadius: "20px", px: 3 }}
        >
          ← Back to Mentors
        </Button>
      </Box>
    </Container>
  );
}