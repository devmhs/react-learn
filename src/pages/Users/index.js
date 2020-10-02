import React, { useState } from 'react';
import AGIBox from '../../components/AGIBox';
import { Table, Button, Modal, FormControl, Form } from 'react-bootstrap';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    user: '',
    email: '',
    pass: '',
    isUpdate: false,
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setUser({
      user: '',
      email: '',
      pass: '',
      isUpdate: false,
    });
    setShow(true);
  };

  const handleDelete = (index) => {
    const selectedUser = users[index];
    setUsers(users.filter((user) => user.user != selectedUser.user));
  };

  const handleEditOpen = (index) => {
    const selectedUser = users[index];
    setUser({
      user: selectedUser.user,
      email: selectedUser.email,
      pass: selectedUser.pass,
      isUpdate: true,
    });
    setShow(true);
  };

  const handleSubmit = (isUpdate) => {
    if (isUpdate) {
      const id = user.user;
      setUsers(
        users.map((u) =>
          u.user == id
            ? {
                user: user.user,
                email: user.email,
                pass: user.pass,
              }
            : u,
        ),
      );
    } else {
      setUsers([...users, user]);
    }
    setUser({
      user: '',
      email: '',
      pass: '',
      isUpdate: false,
    });
    setShow(false);
  };

  const onChangeForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <AGIBox
      title="Gerenciar Usuários"
      description="Gerencie os usuários por meio da tabela abaixo. Inclua, exclua e até mesmo altere os dados se houver necessidade."
    >
      <hr></hr>
      <Button variant="info" className="float-right m-3" onClick={handleShow}>
        <FaPlus /> Adicionar
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Usuário</th>
            <th>E-mail</th>
            <th>Senha</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.user}>
              <td>#</td>
              <td>{user.user}</td>
              <td>{user.email}</td>
              <td>{user.pass}</td>
              <td>
                <i className="mx-1">
                  <Button variant="primary" size="sm" onClick={() => handleEditOpen(index)}>
                    <FaEdit />
                  </Button>
                </i>
                <i>
                  <Button variant="danger" size="sm" onClick={() => handleDelete(index)}>
                    <FaTrash />
                  </Button>
                </i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {user.isUpdate == true ? 'Editar Usuário' : 'Adicionar Usuário'}
          </Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group controlId="formEmail">
              <Form.Label>Usuário</Form.Label>
              <Form.Control
                type="text"
                name="user"
                value={user.user}
                placeholder="Nome de usuário"
                onChange={onChangeForm}
              />
            </Form.Group>

            <Form.Group controlId="formUser">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={user.email}
                placeholder="Digite seu e-mail..."
                onChange={onChangeForm}
              />
            </Form.Group>

            <Form.Group controlId="FormPass">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                name="pass"
                value={user.pass}
                placeholder="Digite sua senha..."
                onChange={onChangeForm}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            <Button variant="primary" onClick={() => handleSubmit(user.isUpdate)}>
              Salvar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </AGIBox>
  );
}
