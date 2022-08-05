import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import ModalPost from "./ModalPost";
import ViewPost from "./ViewPost";
import PostComents from "./PostComents";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [enabledAction, setEnabledAction] = useState(true);
  const [values, setValues] = useState({ id: null, title: "", body: "" });

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  const handleGet = (id) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      });
    setShowModal(true);
    setEnabledAction(false);
    setValues({ id: id, title: "", body: "" });
  }

  const handleAdd = () => {
    setShowForm(true);
    setEnabledAction(false);
    setValues({ id: null, title: "", body: "" });
  };

  const handleSave = (item) => {
    if (item.id) {
      const url = `https://jsonplaceholder.typicode.com/posts/${item.id}`;
      const request = {
        method: "PUT",
        body: JSON.stringify(item),
        headers: { "Content-Type": "application/json" },
      };
      fetch(url, request)
        .then((response) => response.json())
        .then((data) => {
          let postsUpdate = [];

          posts.forEach(dta => {
            if (dta.id === data.id) {
              postsUpdate.push(data);
            } else {
              postsUpdate.push(dta);
            }
          });
          setPosts(postsUpdate);
        });
      setShowForm(false);
      setEnabledAction(true);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se ha editado correctamente',
        showConfirmButton: false,
        timer: 1500
      })
    }
    else {
      const url = `https://jsonplaceholder.typicode.com/posts`;
      const request = {
        method: "POST",
        body: JSON.stringify(item),
        headers: { "Content-Type": "application/json" },
      };
      fetch(url, request)
        .then((response) => response.json())
        .then((data) => {
          let postsUpdate = posts;
          postsUpdate.unshift(data);
          setPosts(postsUpdate);
          setShowForm(false);
          setEnabledAction(true);
        });
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se ha publicado correctamente',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  const handleEdit = (item) => {
    setValues(item);
    setShowForm(true);
    setEnabledAction(false);
  };

  const handleDelete = (item) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${item.id}`;
    const request = {
      method: "DELETE"
    };

    fetch(url, request)
      .then((response) => response.json())
      .then((data) => {
        let postsDelete = [];
        posts.forEach(data => {
          if (data.id !== item.id) {
            postsDelete.push(data);
          }
        });

        Swal.fire({
          title: 'Esta seguro que desea eliminar?',
          text: "No se podrá deshacer los cambios",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Eliminado..',
              'Eliminado Correctamente!.',
              'success'
            )
            setPosts(postsDelete);
          }
        })
      })
  }

  const handleCancel = () => {
    setValues(null);
    setShowForm(false);
    setEnabledAction(true);
  };

  const handleCloseD = () => {
    setValues(null);
    setShowModal(false);
    setEnabledAction(true);
  };

  return (
    <>
      <div>
        <div>
          <ViewPost
            posts={posts}
            handleGet={handleGet}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleAdd={handleAdd}
            enabledAction={enabledAction} />
        </div>
        <div >
          {showForm && (
            <ModalPost
              {...values}
              handleSave={handleSave}
              handleCancel={handleCancel} />
          )}
        </div>
        <div>
          {showModal && (
            <PostComents
              comments={comments}
              handleSave={handleSave}
              handleCloseD={handleCloseD} />
          )}
        </div>
      </div>
    </>
  );
}

export default Posts;