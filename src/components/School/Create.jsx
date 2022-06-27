import { useState, useEffect } from "react";
import Axios from "../../api/server";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./../../css/Wrapper.scss";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";

import Button from "./../Button/Button";
import Form from "./Form";

const Create = () => {
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const [displayImage, setDisplayImage] = useState("");
  const [config, setConfig] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contact: "",
      address: "",
      website: "",
      image: null,
    },
  });

  useEffect(() => {
    setConfig({
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
  }, []);

  if (err) {
    toast.error(err, {
      theme: "colored",
    });
  }

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const res = await Axios.get(`/admin/companies/${id}`, config);
        formik.setValues(res.data.data);
        setDisplayImage(res.data.data.image);
      } catch (err) {
        console.log(err);
      }
    };
    if (id && config) {
      fetchCompany();
    }
  }, [config, id]);

  const handleFormSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", formik.values.name);
    formData.append("email", formik.values.email);
    formData.append("contact", formik.values.phone);
    formData.append("address", formik.values.address);
    formData.append("image", formik.values.image);

    try {
      if (id) {
        await Axios.patch(`/admin/schools/${id}`, formData, config);
        toast.success("School updated successfully ", {
          theme: "colored",
        });
      } else {
        await Axios.post(`/admin/schools`, formData, config);
        formik.resetForm();
        setDisplayImage("");
        toast.success("School added successfully ", {
          theme: "colored",
        });
      }
      setIsLoading(false);
      window.moveTo(0, 0);
    } catch (err) {
      console.log(err);
      console.log(err.response);
      setErr(err.response.data.err);
      setErr(null);
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleFormSubmit}>
        <Form formik={formik} id={id} setDisplayImage={setDisplayImage} />
        {displayImage && (
          <div className="display-img">
            <img
              src={displayImage}
              alt="school"
              onClick={() => {
                formik.values.image = null;
                setDisplayImage("");
              }}
            />
          </div>
        )}
        <div className="btn">
          <Button isEdit={id ? true : false} isLoading={isLoading} />
        </div>
      </form>
    </>
  );
};

export default Create;
