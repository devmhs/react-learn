import React, { useState } from 'react';
import AGIBox from '../../components/AGIBox';
import { useUsers } from '../../hooks/usersContext';

export default function Home() {
  const { users } = useUsers();

  return (
    <AGIBox title="Home" description="Teste">
      {users.length > 0 && <h1>Ultimo email cadastrado: {users[users.length - 1].email}</h1>}
    </AGIBox>
  );
}
