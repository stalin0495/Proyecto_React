import React from "react";
import Table from 'react-bootstrap/Table';

const inLine = {
  textAlign: "center"
}

const styleButon = {
  padding: "5px 10px",
  margin: "2px 1px",
  cursor: "pointer",
}

class ViewPost extends React.Component {

  render() {
    const { posts, handleGet, handleAdd, handleEdit, handleDelete } = this.props;

    const items = posts.map((post, index) => {
      return (
        <tr key={post.id}>
          <td  >
            {post.id}
          </td>
          <td  >
            {post.title}
          </td>
          <td >
            {post.body}
          </td>
          <td style={styleButon}>
            <td>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleGet(post.id)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-right-text-fill" viewBox="0 0 16 16">
                  <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z"></path>
                </svg> Ver </button>
            </td>
            <td>
              {this.props.enabledAction && (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleEdit(post)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
                  </svg> Editar
                </button>
              )}
            </td>
            <td>

              {this.props.enabledAction && (

                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(post)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"></path>
                  </svg> Eliminar
                </button>
              )}
            </td>

          </td>
        </tr>
      );
    });

    return (
      <>
        <table className="table" style={inLine}>
          <thead>
            <tr>
              <th ></th>
              <th ></th>
              <th >
                <h3> Lista de POST´s </h3>
              </th>
              <th >
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => handleAdd()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"></path>
                  </svg> Agregar
                </button>
              </th>
            </tr>
          </thead>
        </table>
        <Table striped bordered hover>
          <thead>
            <tr style={inLine}>
              <th >
                ID
              </th>
              <th >
                Titulo
              </th>
              <th >
                Descripción
              </th>
              <th >
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </Table>
      </>
    );
  }
}

export default ViewPost;