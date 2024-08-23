// src/pages/ProfilePage.js
import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const ProfilePage = () => {
  const user = { name: "John Doe", email: "john@example.com", tournaments: ["Fortnite Tournament", "Call of Duty"] };

  return (
    <Container className="my-4">
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <h3>Joined Tournaments</h3>
      <ListGroup>
        {user.tournaments.map((tournament, index) => (
          <ListGroup.Item key={index}>{tournament}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default ProfilePage;
