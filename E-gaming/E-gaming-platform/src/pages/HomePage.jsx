// src/pages/HomePage.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TournamentCard from '../components/TournamentCard';

const HomePage = () => {
  const tournaments = [
    { id: 1, title: "Fortnite Tournament", prize: "$5000" },
    { id: 2, title: "Call of Duty", prize: "$3000" },
    // Add more tournaments as needed
  ];

  return (
    <Container className="my-4">
      <Row>
        {tournaments.map(tournament => (
          <Col key={tournament.id} xs={12} md={6} lg={4}>
            <TournamentCard tournament={tournament} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
