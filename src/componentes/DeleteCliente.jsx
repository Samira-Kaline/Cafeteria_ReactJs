import React,{useState} from 'react';
import {Button,Form,Modal} from 'react-bootstrap';
import {TbTrash} from 'react-icons/tb';

const DeleteClient = () =>{
  const [id,setId] = useState(0);
  const [show,setShow] = useState();;

  const handleClose = () =>{
    handleClean();
    setShow(false);
  }

  const handleShow = () =>{
    setShow(true);
  }
  const handleClean = () =>{
    setId(0);
  }

  const handleDelete = () =>{
    fetch(`http://localhost:3001/clientes/${id}`, { method: 'DELETE' })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log('Resposta com insucesso!');
      })
      .finally();

      handleClean();
      handleClose();
  }

  return(
    <div>
      <Button 
        variant='outline-danger '
        className='float-end mx-1'
        onClick={handleShow}
      >
        <TbTrash size={20}/>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>Deletar Cliente</Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group className='mb-3' controlId='formBasicId'>
              <Form.Label>Id</Form.Label>
              <Form.Control
                type='numeric'
                value={id}
                placeholder="Digite o id do cliente:"
                onChange={(e)=>setId(e.target.value)}
                required/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-dark' onClick={handleClose}>
            Fechar
          </Button>
          <Button variant='outline-danger' onClick={handleDelete}>
            Deletar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DeleteClient;
