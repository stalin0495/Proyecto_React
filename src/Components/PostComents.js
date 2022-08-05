import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";

class PostComents extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      body: this.props.body,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSave(this.state);
  };

  handleCloseD = () => {
    this.props.handleCloseD(this.state);
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  handleCancel = () => {
    this.props.handleCancel(this.state);
  }

  render() {
    const styleTitle = {
      textAlign: "center"
    };
    let comments = [];
    for (let i = 0; i < this.props.comments.length; i++) {
      comments.push(
        <div key={i}>
          <h5> Usuario: </h5> <h6> {this.props.comments[i].email} </h6>
          <h6> " {this.props.comments[i].body} " </h6>
        </div>)
    }

    return (
      <>
        <Modal show={true}>
          <Modal.Header>
            <Modal.Title style={styleTitle}> ¡Comentarios de este Post! </Modal.Title>
            <Button
              variant="danger"
              onClick={this.handleCloseD}
            > Cerrar
            </Button>
          </Modal.Header>
          <Modal.Body>
            {comments}
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default PostComents;