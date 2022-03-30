import React, { useEffect, useState } from "react";
import './Todos.scss';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Todos() {

  const [users, setUsers] = useState([])

  const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/todos")
          .then(response => {
              return response.json()
          })
          .then(data => {
              setUsers(data)
          })
  }

  useEffect(() => {
      fetchData()
  }, [])

  return (
      <div className="container">
          <div className="col col-lg todos-cap">
              TODOS Table ...click any row to know more...
          </div>
          {users.length > 0 && (
              <div className="row">
                  <table className="table table-hover">
                      <thead>
                          <tr>
                              <th scope="col">USER ID</th>
                              <th scope="col">ID</th>
                              <th scope="col">TITLE</th>
                              <th scope="col">COMPLETED</th>
                          </tr>
                      </thead>
                      <tbody>
                          {users.map(user => (
                              <Popup trigger={
                                  <tr>
                                      <th scope="row">{user.userId}</th>
                                      <td>{user.id}</td>
                                      <td>{user.title}</td>
                                      <td>{String(user.completed)}</td>
                                  </tr>
                              }
                                  position="bottom">
                                  <div className="container">
                                      <div className="row">
                                          User ID: {user.userId}
                                      </div>
                                      <div className="row">
                                          ID: {user.id}
                                      </div>
                                      <div className="row">
                                          Title: {user.title}
                                      </div>
                                      <div className="row">
                                          Completed: {String(user.completed)}
                                      </div>
                                  </div>
                              </Popup>
                          ))}
                      </tbody>
                  </table>
              </div>
          )}
      </div>
  );

}

