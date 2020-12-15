import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { toast } from 'react-toastify';





const TalentModal = ({ formOne, setFormOne }) => {
  const closeForm = () => {
    setFormOne(false);
  };

  const [data, setData] = useState({
    fullname: "",
    email: "",
    phone: "",
    interest: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const { fullname, email, phone, interest } = data;
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/dea1j/google_sheets/KmZHSmOcIDFkbhkO?tabId=Sheet1",
        {
          method: "post",
          body: JSON.stringify([[fullname, email, phone, interest]]),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
     
      setData({
        fullname: "",
        organization: "",
        email: "",
        phone: "",
        interest: "",
      });
      setFormOne(false);
     toast.success('Awesome! We would be getting back to you');
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Modal show={formOne} onHide={() => closeForm()}>
      <Modal.Header closeButton>
        <Modal.Title>
          <h5 style={{ color: "#000", fontSize: "30px" }} className="">
            Hey champ!
          </h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <p style={{ color: "#000" }} className="">
            We are currently in beta phase and can't wait to have you onboard,
            signup to be the first to know when we go live. Better still, stand
            a chance to be part our test community and gain exclusive access!
          </p>
          <p style={{ color: "#DB9A02" }} className="">
            By completing the short form below, you agree to receive electronic
            notifications from AMPZ.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                placeholder="Full name"
                name="fullname"
                className="form-control"
                type="text"
                required
                value={fullname}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                placeholder="Email"
                name="email"
                className="form-control"
                type="email"
                required
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                placeholder="Phone number"
                name="phone"
                className="form-control"
                type="text"
                required
                value={phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <select
                className="custom-select"
                name="interest"
                value={interest}
                required
                onChange={handleChange}
              >
                <option selected>Sports interest</option>
                <option value="Football">Football</option>
                <option value="Basketball">Basketball</option>
                <option value="Athletics">Athletics (Track & Field)</option>
                <option value="Boxing">Boxing</option>
                <option value="Rugby">Rugby</option>
                <option value="Cricket">Cricket</option>
                <option value="Table tennis">Table tennis</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="form-group">
              <button
                style={{ backgroundColor: "#DB9A02", color: "#fff" }}
                className="btn btn-block"
                // onClick={() => setFormOne(true)}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default TalentModal;