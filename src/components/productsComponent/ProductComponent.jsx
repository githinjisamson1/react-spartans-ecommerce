import React from "react";
import Sidebar from "./Sidebar";
import ProductList from "./ProductList";
import "./productComponent.css";

const ProductComponent = ({
  products,
  handleFilter,
  handleFilteredProducts,
  handleDelete,
  handleAddLising,
  handleChange,
  formData,
  handleSubmit,
  handleEditSubmit,
  showForm,
  setShowForm
}) => {
  return (
    <div className="body">
      <Sidebar
        products={products}
        handleFilter={handleFilter}
        handleFilteredProducts={handleFilteredProducts}
        handleAddLising={handleAddLising}
        handleChange={handleChange}
        formData={formData}
        handleSubmit={handleSubmit}
        handleEditSubmit={handleEditSubmit}
        showForm={showForm}
      />
      <ProductList
        products={products}
        handleDelete={handleDelete}
        handleChange={handleChange}
        formData={formData}
        handleEditSubmit={handleEditSubmit}
        showForm={showForm}
        setShowForm={setShowForm}
      />
    </div>
  );
};

export default ProductComponent;
