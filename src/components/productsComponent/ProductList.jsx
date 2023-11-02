import UpdateForm from "./UpdateForm";
import "./productList.css";

const ProductList = ({
  products,
  handleDelete,
  handleEditChange,
  editFormData,
  handleEditSubmit,
  showForm,
  setShowForm,
}) => {
  // !DELETE
  const deleteProduct = (id) => {
    fetch(`https://itproducts.onrender.com/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        handleDelete(id);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // handle hide/show update form
  const handleEditClick = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      {/* list of products */}
      <ul className="products">
        {products.map((product) => {
          const { id, brand, description, img, price, title } = product;
          return (
            <li key={id}>
              <img src={img} alt={description} />
              <h2>{title}</h2>
              <p>Brand: {brand}</p>
              <p>
                Price: <span>{price}</span>
              </p>
              <div className="btns">
                <button className="add-to-cart">Add to Cart</button>
                <div className="del-edit">
                  <button
                    className="delete-btn"
                    onClick={() => {
                      deleteProduct(id);
                    }}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <button className="edit-btn" onClick={handleEditClick}>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      {showForm && (
        <UpdateForm
          handleEditChange={handleEditChange}
          editFormData={editFormData}
          handleEditSubmit={handleEditSubmit}
          showForm={showForm}
        />
      )}
    </>
  );
};

export default ProductList;
