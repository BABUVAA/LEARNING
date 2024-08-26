// src/pages/TournamentPage.js
import React from "react";
import { Container, Card, Button } from "react-bootstrap";

const TournamentPage = ({ match }) => {
  const { id } = match.params;
  const tournament = {
    title: "Fortnite Tournament",
    prize: "$5000",
    details: "Details about the tournament...",
  };

  return (
    <Container className="my-4">
      <Card>
        <Card.Body>
          <Card.Title>{tournament.title}</Card.Title>
          <Card.Text>Prize: {tournament.prize}</Card.Text>
          <Card.Text>{tournament.details}</Card.Text>
          <Button variant="primary">Join Tournament</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TournamentPage;
