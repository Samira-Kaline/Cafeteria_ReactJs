import React, { useEffect, useState } from 'react';
import {Button,Table,Form,Col,Container,Row} from 'react-bootstrap';
import {TbTrash,TbPencil} from 'react-icons/tb';
import {SlMagnifier} from 'react-icons/sl'

//Tabela de Cliente
const TableClient = () => {
  const [nome, setNome] = useState('');

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/clientes', { method: 'GET' })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // Resultado da busca.
        setClientes(data);
      })
      .catch((error) => {});
  }, []);

  const handleChange = (event) => {
    setNome(event.target.value);
  };

  const handleClick = (event) => {
    fetch(`http://localhost:3001/clientes?q=${nome}`, { method: 'GET' })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setClientes(data);
      })
      .catch((error) => {
        console.log('Resposta com insucesso!');
      })
      .finally();
  };

  return (
    <div>
      <Container>
      <h1>Clientes</h1>
        <Row>
          <Col xs='6'>
            <Form>
              <Form.Group>
                    <Form.Control  
                    className="mb-3" 
                    id="" 
                    type="text" 
                    value={nome} 
                    onChange={handleChange} >
                    </Form.Control>
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Button 
            variant="outline-dark" 
            onClick={handleClick}
            >
              <SlMagnifier size={20}/>
            </Button>
            <Button 
            variant='outline-danger'
            className='float-end mx-1'
            >
              <TbTrash size={20}/>
            </Button>
            <Button 
            variant='outline-dark '
            className='float-end mx-1'
            >
              <TbPencil size={20}/>
            </Button>
          </Col>
        </Row>
      </Container>
      <Container>
      <Table className="table table-bordered table-dark " striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Nascimento</th>
            <th>CEP</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => {
            return (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.name}</td>
                <td>{cliente.email}</td>
                <td>{cliente.birthdate}</td>
                <td>{cliente.cep}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      </Container>
    </div>
  );
};

export default TableClient;
