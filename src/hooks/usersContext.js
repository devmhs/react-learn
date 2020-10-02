import React, { createContext, useContext, useState } from 'react';

const UsersContext = createContext({});

export function UsersProvider({ children }) {
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
    <UsersContext.Provider
      value={{
        users,
        user,
        show,
        handleClose,
        handleDelete,
        handleEditOpen,
        handleSubmit,
        handleShow,
        onChangeForm,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UsersContext);
  return context;
}
