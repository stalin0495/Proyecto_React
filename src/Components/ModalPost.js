import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';

class ModalPost extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title: this.props.title,
      body: this.props.body,
      posts: this.props.posts,

    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };


  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSave(this.state);
  };

  handleCancel = () => {
    this.props.handleCancel(this.state);
  };

  render() {
    const styleModal = {
      textAlign: "center"
    };

    return (
      <>
        <Modal show={true} onHide={this.handleCancel}>
          <Form onSubmit={this.handleSubmit}>
            <Modal.Header closeButton >
              {this.state.id ? <Modal.Title style={styleModal} >
                Editar Post
              </Modal.Title> :
                <Modal.Title >
                  Crear Post
                </Modal.Title>}
            </Modal.Header>
            <Modal.Body>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                <Form.Group controlId="validationCustom01">
                  <Form.Label className="label">
                    Titulo
                  </Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      required
                      type="text"
                      name="title"
                      value={this.state.title}
                      onChange={this.handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Completa este campo
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Form.Group >

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Group controlId="validationCustom02">
                  <Form.Label className="label">
                    Descripción
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    required
                    type="text"
                    name="body"
                    value={this.state.body}
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Completa este campo
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Group >
            </Modal.Body>

            <Modal.Footer>
              <Button
                type="submit"
                className="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-device-ssd-fill" viewBox="0 0 16 16">
                  <path d="M5 8V4h6v4H5Z"></path>
                  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4Zm0 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm9 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM3.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm9.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM4.75 3h6.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-6.5A.75.75 0 0 1 4 8.25v-4.5A.75.75 0 0 1 4.75 3ZM5 12h6a1 1 0 0 1 1 1v2h-1v-2h-.75v2h-1v-2H8.5v2h-1v-2h-.75v2h-1v-2H5v2H4v-2a1 1 0 0 1 1-1Z"></path>
                </svg> Guardar
              </Button>
              <Button
                type="button"
                className=" btn btn-danger"
                onClick={this.handleCancel}
              >
                Cancelar
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }
}

export default ModalPost;