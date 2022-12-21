import React,{ useState} from 'react';
import {Button,Modal,Form} from 'react-bootstrap';
import TableClients from './TableClients';
import {MdOutlinePersonAdd} from 'react-icons/md';

const ModalClient = () =>{
  const [show,setShow] = useState(false);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [birthDate,setBirthDate] = useState("");
  const [cep,setCep] = useState("");
  const [validated,setValidated] = useState(false);
  const [NewClient,setNewClient] = useState({ 
    name: name,
    email: email,
    birthdate: birthDate,
    cep : cep
  });

  const handleClose = () =>{
    handleClean();
    setShow(false);
  }

  const handleShow = () =>{
    setShow(true);
  }

  const handleClean =() =>{
    setName("");
    setBirthDate("");
    setEmail("");
    setCep("");
  }
  const handleSubmit = (event) =>{

    event.preventDefault();
    const form = event.currentTarget;
    if(form.checkValidity() === false){
      event.stopPropagation();
    }
    else{
      fetch(`http://localhost:3001/clientes`, 
      { method: "POST" ,
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(NewClient)
    })
    .then((response) => {
        return response.json();
      })
    .then((data) => {
          
      TableClients.setClientes([...TableClients.clientes,data])
      })
      .catch((error) => {})
    
    handleClean();
    handleClose();
  }
  setValidated(true);
  }


  return (
    <div>
      <Button 
      variant="outline-dark" 
      className='rounded-circle mr-4 font-weight-bold float-end'
      onClick={handleShow}
      >
        <MdOutlinePersonAdd size={20}/>
      </Button>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>
            Cadastro Cliente
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label >Nome</Form.Label>
          <Form.Control
            type="name"
            value={name}
            placeholder='João Pereira'
            onChange={(e)=> setName(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Campo de nome inválido!
          </Form.Control.Feedback>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            placeholder='jp@exemplo.com'
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Campo de email inválido!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDatanasc">
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Control
            type="date" 
            value={birthDate}
            placeholder='0000-00-00'
            onChange={(e)=>setBirthDate(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Campo de data de nascimento inválido!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDatanasc">
          <Form.Label>CEP</Form.Label>
          <Form.Control
            type="cep" 
            value={cep}
            placeholder='00000-000'
            onChange={(e)=>setCep(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Campo de cep inválido!
          </Form.Control.Feedback>
        </Form.Group>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="outline-danger" onClick={handleClean}>
            Limpar
          </Button>
          <Button variant="outline-primary" onClick={(e)=>setNewClient({ 
            name: name,
            email: email,
            birthdate: birthDate,
            cep : cep
          })} type='submit'>
            Cadastrar
          </Button>
        </Modal.Footer>
      </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalClient;