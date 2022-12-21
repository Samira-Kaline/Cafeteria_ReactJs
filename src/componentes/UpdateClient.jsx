import React,{useState} from 'react';
import {TbPencil} from 'react-icons/tb';
import {Button,Form,Modal} from 'react-bootstrap';


const UpdateClient = () =>{
  const [show,setShow] = useState(false);
  const [id,setId] = useState(null);
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
    setId(null);
    setName("");
    setBirthDate("");
    setEmail("");
    setCep("");
  }
  const handleUpdate = (event) =>{

    event.preventDefault();
    const form = event.currentTarget;
    if(form.checkValidity() === false){
      event.stopPropagation();
    }
    else{
      fetch(`http://localhost:3001/clientes/${id}`, 
      { method: "PUT" ,
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(NewClient)
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
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
        variant='outline-dark'
        className='float-end mx-1'
        onClick={handleShow}
      >
        <TbPencil size={20}/>
      </Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>
            Atualizar Cliente
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleUpdate}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label >Nome</Form.Label>
              <Form.Control
                type="numeric"
                value={id}
                placeholder='Digite o id do cliente:'
                onChange={(e)=> setId(e.target.value)}
                required
            />
          <Form.Control.Feedback type="invalid">
            Campo de id inválido!
          </Form.Control.Feedback>
        </Form.Group>

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
                Atualizar
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default UpdateClient;