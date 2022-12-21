import React,{useState} from 'react';
import {Button,Modal} from 'react-bootstrap';
import TableClients from './TableClients';

const DeleteClient = () =>{

  const [id,setId] = useState();

  const handleDelete = () =>{
    fetch(`http://localhost:3001/clientes?q=${id}`, { method: 'DELETE' })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log('Resposta com insucesso!');
      })
      .finally();
  }

  return(
    <div>
    <Button 
    variant='outline-danger'
    className='float-end mx-1'
    onClick={(e)=>handleDelete()}
    >
      Deletar
    </Button>
    </div>
  );
}

export default DeleteClient;