import React from 'react';
import { Modal } from 'react-bootstrap';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  fullName: yup.string().required(),
  organization: yup.string().required(),
  email: yup.string().email().required('Email is required'),
  phone: yup.string().required(),
  details: yup.string().required(),
});

const TalentModal = ({ formOne, setFormOne }) => {
  const closeForm = () => {
    setFormOne(false);
  };

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    // const { fullname, email, phone, interest } = data;
    console.log('hey');
    // console.log(data);

    // try {
    //   await fetch(
    //     'https://v1.nocodeapi.com/dea1j/google_sheets/KmZHSmOcIDFkbhkO?tabId=Sheet1',
    //     {
    //
    //         'Content-Type': 'application/json',
    //       },
    //     }
    //   );

    // window.alert('Submitted');
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  };

  return (
    <Modal show={formOne} onHide={() => closeForm()}>
      <Modal.Header closeButton>
        <Modal.Title>
          <h5 style={{ color: '#000', fontSize: '30px' }} className="">
            Hey champrrrt!
          </h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <p style={{ color: '#000' }} className="">
            We are currently in beta phase and can't wait to have you onboard,
            signup to be the first to know when we go live. Better still, stand
            a chance to be part our test community and gain exclusive access!
          </p>
          <p style={{ color: '#DB9A02' }} className="">
            By completing the short form below, you agree to receive electronic
            notifications from AMPZ.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                placeholder="Full name"
                name="fullname"
                className="form-control"
                type="text"
                ref={register}
              />
              <p className="error">{errors.fullname?.message}</p>
            </div>
            <div className="form-group">
              <input
                placeholder="Email"
                name="email"
                className="form-control"
                type="email"
                ref={register}
              />
              <p className="error">{errors.email?.message}</p>
            </div>
            <div className="form-group">
              <input
                placeholder="Phone number"
                name="phone"
                className="form-control"
                type="text"
                ref={register}
              />
              <p className="error">{errors.phone?.message}</p>
            </div>
            <div className="form-group">
              <select className="custom-select" name="interest" ref={register}>
                <option defaultValue>Sports interest</option>
                <option value="Football">Football</option>
                <option value="Basketball">Basketball</option>
                <option value="Athletics">Athletics (Track & Field)</option>
                <option value="Boxing">Boxing</option>
                <option value="Rugby">Rugby</option>
                <option value="Cricket">Cricket</option>
                <option value="Table tennis">Table tennis</option>
                <option value="Others">Others</option>
              </select>
              <p className="error">{errors.interest?.message}</p>
            </div>
            <div className="form-group">
              <button
                type="submit"
                style={{ backgroundColor: '#DB9A02', color: '#fff' }}
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
