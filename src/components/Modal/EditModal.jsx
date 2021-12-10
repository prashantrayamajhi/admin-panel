import ReactDOM from "react-dom";
import "./Modal.scss";

const EditModal = ({ setIsEditModalOpen, setPage }) => {
  return ReactDOM.createPortal(
    <>
      <div className="overlay">
        <div className="model-wrapper">
          <h2>Select a page</h2>
          <div className="page-list">
            <p
              onClick={() => {
                setIsEditModalOpen(false);
                setPage(1);
              }}
            >
              1 - Variant
            </p>
            <p
              onClick={() => {
                setIsEditModalOpen(false);
                setPage(2);
              }}
            >
              2 - Engine & Transmission
            </p>
            <p
              onClick={() => {
                setIsEditModalOpen(false);
                setPage(3);
              }}
            >
              3 - Fuel & Performance
            </p>
            <p
              onClick={() => {
                setIsEditModalOpen(false);
                setPage(4);
              }}
            >
              4 - Suspension, Steering & Brakes
            </p>
            <p
              onClick={() => {
                setIsEditModalOpen(false);
                setPage(5);
              }}
            >
              5 - Dimensions & Capacity
            </p>
            <p
              onClick={() => {
                setIsEditModalOpen(false);
                setPage(6);
              }}
            >
              6 - Comfort & Convenience
            </p>
            <p
              onClick={() => {
                setIsEditModalOpen(false);
                setPage(7);
              }}
            >
              7 - Interior
            </p>
            <p
              onClick={() => {
                setIsEditModalOpen(false);
                setPage(8);
              }}
            >
              8 - Exterior
            </p>
            <p
              onClick={() => {
                setIsEditModalOpen(false);
                setPage(9);
              }}
            >
              9 - Safety
            </p>
            <p
              onClick={() => {
                setIsEditModalOpen(false);
                setPage(10);
              }}
            >
              10 - Entertainment & Communication
            </p>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default EditModal;
