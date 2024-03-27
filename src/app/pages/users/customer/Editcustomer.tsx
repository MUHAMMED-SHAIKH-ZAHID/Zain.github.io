import React, { FC, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

type Props = {
  show: boolean;
  handleClose: () => void;
  data: any;
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  code: Yup.string(),
  address: Yup.string().required('Address is required'),
  address2: Yup.string(),
  mobile: Yup.string().required('Mobile is required')
  .matches(/^[0-9]+$/, "Must be only digits"),
  mobile2: Yup.string()
  .matches(/^[0-9]+$/, "Must be only digits"),
  email: Yup.string().email("Invalid Email address").required('Email is required'),
  route: Yup.string(),
  state: Yup.string().required('State is required'),
  gmap: Yup.string(),
  companyName: Yup.string().required('Company name is required'),
  salesPersonAssigned: Yup.string(),
});

const Editcustomer: FC<Props> = ({ show, handleClose, data = {} }) => {
  useEffect(() => {
    console.log("inside the modal component data", data);
  }, [data]);

  const formik = useFormik({
    initialValues: {
      name: data.name || '',
      code: data.code || '',
      address: data.address || '',
      address2: data.address2 || '',
      state: data.state || '',
      gmap: data.gmap || '',
      mobile: data.mobile || '',
      mobile2: data.mobile2 || '',
      email: data.email || '',
      route: data.route || '',
      companyName: data.companyName || '',
      salesPersonAssigned: data.salesPersonAssigned || '',
    },
    validationSchema,
    onSubmit: values => {
      console.log(values);
      handleClose();
    },
    enableReinitialize: true,
  });

  return (
    <Modal show={show} onHide={handleClose} aria-labelledby="kt_modal_1" size="lg">
      <Modal.Header closeButton>
        <Modal.Title style={{ width: "100%", textAlign: "center" }} id="kt_modal_1_title">Edit Customer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={formik.handleSubmit} noValidate className="form">
          <div className="row">
            {Object.keys(formik.initialValues).map((key, index) => (
              <div className="col-md-6 mb-3" key={key}>
                <label htmlFor={key} className="form-label">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                <input
                  type="text"
                  className="form-control"
                  id={key}
                  placeholder={`Enter ${key}`}
                  {...formik.getFieldProps(key)}
                />
                {formik.touched[key] && formik.errors[key] && (
                  <div className="text-danger">{formik.errors[key]}</div>
                )}
              </div>
            ))}
          </div>
          <Button type="submit" variant="primary">Save Changes</Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Editcustomer;
