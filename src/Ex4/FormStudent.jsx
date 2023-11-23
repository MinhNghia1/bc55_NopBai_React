import React, { useState, useEffect } from "react";

export default function FormStudent({ onSubmit, selectUser, onUpdate }) {
  const [inputUser, setInputUser] = useState({ id: "", masv: "", name: "", phone: "", email: "" });
  const [error, setError] = useState({ id: "", masv: "", name: "", phone: "", email: "" });
  useEffect(() => {
    if (!selectUser) return;

    setInputUser(selectUser);
  }, [selectUser]);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    let isValid = true;
    for (let key in inputUser) {
      const bool = validateField(key, inputUser[key]);
      isValid = isValid && bool;
    }
    if (!isValid) return;
    if (inputUser.id) {
      const { id, ...user } = inputUser;
      onUpdate(id, user);
    } else {
      onSubmit(inputUser);
    }
    setInputUser({ id: "", masv: "", name: "", phone: "", email: "" });
  };
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setInputUser({ ...inputUser, [name]: value });
  };
  const validateField = (fieldName, fieldValue) => {
    const formError = {};
    let invalid = true;
    switch (fieldName) {
      case "masv": {
        if (fieldValue.trim() === "") {
          formError.masv = "MaSV is required";
          invalid = false;
        } else {
          formError.masv = "";
        }
        break;
      }

      case "name": {
        if (fieldValue.trim() === "") {
          formError.name = "Name is required";
          invalid = false;
        } else if (!/^[a-zA-Z0-9_]{3,16}$/.test(fieldValue)) {
          formError.name = "Name is Invalid";
          invalid = false;
        } else {
          formError.name = "";
        }
        break;
      }

      case "phone": {
        if (fieldValue.trim() === "") {
          formError.phone = "Number Phone is required";
          invalid = false;
        } else {
          formError.phone = "";
        }
        break;
      }

      case "email": {
        if (fieldValue.trim() === "") {
          formError.email = "Email is required";
          invalid = false;
        } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(fieldValue)) {
          formError.email = "Email is inValid";
          invalid = false;
        } else {
          formError.email = "";
        }
        break;
      }

      default:
        break;
    }
    setError((currentValue) => {
      return { ...currentValue, ...formError };
    });
    return invalid;
  };
  const handleBlur = (evt) => {
    const { name, value } = evt.target;
    validateField(name, value);
  };
  return (
    <form onSubmit={handleSubmit} className="form-control">
      <div className="form-group">
        <label htmlFor="masv">MaSv</label>
        <input onBlur={handleBlur} className="form-control" type="number" name="masv" onChange={handleChange} value={inputUser.masv} />
        {error.masv && <span className="text-danger">{error.masv}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="">Name</label>
        <input onBlur={handleBlur} className="form-control" type="text" name="name" onChange={handleChange} value={inputUser.name} />
        {error.name && <span className="text-danger">{error.name}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="">Số Điện Thoại </label>
        <input onBlur={handleBlur} className="form-control" type="number" name="phone" onChange={handleChange} value={inputUser.phone} />
        {error.phone && <span className="text-danger">{error.phone}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="">Email</label>
        <input onBlur={handleBlur} className="form-control" type="text" name="email" onChange={handleChange} value={inputUser.email} />
        {error.email && <span className="text-danger">{error.email}</span>}
      </div>
      <button type="submit" className="btn btn-success mt-2">
        Submit
      </button>
    </form>
  );
}
