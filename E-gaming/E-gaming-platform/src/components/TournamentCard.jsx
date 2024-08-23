
// src/components/TournamentCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const TournamentCard = ({ tournament }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{tournament.title}</Card.Title>
        <Card.Text>Prize: {tournament.prize}</Card.Text>
        <Button variant="primary">Join Tournament</Button>
      </Card.Body>
    </Card>
  );
};

export default TournamentCard;
