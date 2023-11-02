import React from "react";
import Sidebar from "./Sidebar";
import ProductList from "./ProductList";
import "./productComponent.css";

const ProductComponent = ({
  products,
  handleFilteredProducts,
  handleDelete,
  handleChange,
  formData,
  handleSubmit,
  handleEditChange,
  editFormData,
  handleEditSubmit,
  showForm,
  setShowForm
}) => {
  return (
    <div className="body">
      <Sidebar
        products={products}
        handleFilteredProducts={handleFilteredProducts}
        handleChange={handleChange}
        formData={formData}
        handleSubmit={handleSubmit}
        showForm={showForm}
      />
      <ProductList
        products={products}
        handleDelete={handleDelete}
        handleEditChange={handleEditChange}
        editFormData={editFormData}
        handleEditSubmit={handleEditSubmit}
        showForm={showForm}
        setShowForm={setShowForm}
        
      />
    </div>
  );
};

export default ProductComponent;
