import React from "react";

export default function ModelDetail({ product, isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }
  if (!product) {
    return null;
  }
  return (
    <>
      <div className="modal d-block" tabIndex={-1}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Detail</h5>
              <button type="button" className="btn-close" onClick={onClose} />
            </div>
            <div className="modal-body ">
              <div className="row">
                <div className="col-4">
                  <img src={product.image} alt={product.alias} width={250} />
                </div>
                <div className="col-8">
                  <table className="table ">
                    <tbody>
                      <tr>
                        <td>ID: </td>
                        <td>{product.id}</td>
                      </tr>
                      <tr>
                        <td>Name: </td>
                        <td>{product.name}</td>
                      </tr>
                      <tr>
                        <td>Price: </td>
                        <td>{product.price}</td>
                      </tr>
                      <tr>
                        <td>Description: </td>
                        <td>{product.description}</td>
                      </tr>
                      <tr>
                        <td>ShortDescription: </td>
                        <td>{product.shortDescription}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
}
