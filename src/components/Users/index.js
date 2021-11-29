import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import api from '../../services/api';


export default function UsersList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isAdmin, setIsAdmin] = useState(true);
    const [user, setUser] = useState();

    useEffect(() => {
        async function loadUsers() {
          setLoading(true);
          
          const token = localStorage.getItem('token')
          const _user = jwtDecode(token) 
          console.log(_user)
          setUser(_user);
          setIsAdmin( JSON.parse(_user.userDetails).autorizacao.includes("ROLE_ADMIN"))

          const response = await api.get("/users/1/password", {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          const { data } = response;
    
          setUsers(data);
          setLoading(false);
        }
    
        loadUsers();
      }, []);

    return (
        <div>
            {loading ? (
               'Carregando...'
            ): <p>{JSON.stringify(users)}</p>}
            {isAdmin && 
              <button>
                <Link to="/createPassword">
                  Crie uma nova senha
                </Link>
              </button>}
        </div>
    )
}
