import React from 'react';
import { useEffect } from 'react';
import backendApi from '../utils/backendApi';
import { useState } from 'react';

export default function ConnectionToBackEnd() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    setAllUsers();
  }, [])

  function setAllUsers() {
    console.log('Making call to the back end')
    backendApi.getAllUsers()
      .then(res => {
        console.log("Setting users");
        setUsers(res.data);
      })     
  }

  return (
    <>
    </>
  )
}