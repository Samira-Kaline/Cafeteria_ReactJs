import React from 'react';
import TableClient from './TableClients';
import FormClient from './FormClient';
import {Container} from 'react-bootstrap';

const Main = () => {
  return (
    <Container >
      <FormClient />
      <TableClient />
    </Container>
  );
};

export default Main;