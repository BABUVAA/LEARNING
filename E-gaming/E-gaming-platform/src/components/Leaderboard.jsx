// src/components/Leaderboard.js
import React from 'react';
import { Container, Table } from 'react-bootstrap';

const Leaderboard = () => {
  const players = [
    { id: 1, name: "Player1", score: 1200 },
    { id: 2, name: "Player2", score: 1100 },
    // Add more players
  ];

  return (
    <Container className="my-4">
      <h2>Leaderboard</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Player</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={player.id}>
              <td>{index + 1}</td>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Leaderboard;
