import { useState, useEffect } from "react";
import Axios from "../../api/server";
import configuration from "./../../helper/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./../../css/Wrapper.scss";
import { useParams } from "react-router-dom";

import Button from "./../Button/Button";
import EditModal from "./../Modal/EditModal";
import Form from "./Form";

const Create = () => {
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [config, setConfig] = useState(null);

  const [title, setTitle] = useState("");

  useEffect(() => {
    setConfig(configuration);
  }, []);

  if (err) {
    toast.error(err);
  }

  const handleFormSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const data = {
      title,
    };
    try {
      const res = await Axios.post(`/admin/users`, data, config);
      console.log(res);
    } catch (err) {
      console.log(err);
      setErr(err.response.data.err);
      setErr(null);
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      {isEditModalOpen && <EditModal setIsEditModalOpen={setIsEditModalOpen} />}
      <form onSubmit={handleFormSubmit}>
        <Form title={title} setTitle={setTitle} />
        <div className="btn">
          <Button isEdit={id ? true : false} isLoading={isLoading} />
        </div>
      </form>
    </>
  );
};

export default Create;
