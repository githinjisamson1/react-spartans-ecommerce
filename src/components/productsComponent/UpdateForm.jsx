import React from "react";

const UpdateForm = ({ handleEditChange, editFormData, handleEditSubmit, showForm }) => {
  const showFormStyles = {
    display: showForm ? "block" : "none",
  };
  return (
    <form
      className="update-form"
      onSubmit={handleEditSubmit}
      style={showFormStyles}
    >
      <h2>Edit Listing</h2>
      <input
        type="text"
        name="brand"
        value={editFormData.brand}
        onChange={handleEditChange}
        placeholder="brand"
      />
      <input
        type="text"
        name="description"
        value={editFormData.description}
        onChange={handleEditChange}
        placeholder="description"
      />
      <input
        type="text"
        name="img"
        value={editFormData.img}
        onChange={handleEditChange}
        placeholder="image"
      />
      <input
        type="text"
        name="price"
        value={editFormData.price}
        onChange={handleEditChange}
        placeholder="price"
      />
      <input
        type="text"
        name="title"
        value={editFormData.title}
        onChange={handleEditChange}
        placeholder="title"
      />
      <input type="submit" value="Apply" />
    </form>
  );
};

export default UpdateForm;
