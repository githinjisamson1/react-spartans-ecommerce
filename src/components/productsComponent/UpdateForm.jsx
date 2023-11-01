import React from "react";

const UpdateForm = ({ handleChange, formData, handleEditSubmit }) => {
  return (
    <form onSubmit={handleEditSubmit}>
      <input
        type="text"
        name="brand"
        value={formData.brand}
        onChange={handleChange}
        placeholder="brand"
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="description"
      />
      <input
        type="text"
        name="img"
        value={formData.img}
        onChange={handleChange}
        placeholder="image"
      />
      <input
        type="text"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="price"
      />
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="title"
      />
      <input type="submit" />
    </form>
  );
};

export default UpdateForm;
