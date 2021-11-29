import React, { useEffect, useState } from 'react'

import api from '../../services/api';

export default function UsersList() {
    const [users, setUsers] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function loadUsers() {
          setLoading(true);
          const response = await api.get("/users/1");
          const { data } = response;
    
          setUsers(data);
          setLoading(false);
        }
    
        loadUsers();
      }, []);

    return (
        <div>
            {loading ? (
              <p>{users}</p>
            ): 'Carregando...'}
        </div>
    )
}
