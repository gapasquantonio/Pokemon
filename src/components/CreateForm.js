import React from "react";
import './CreateForm.css'
import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from 'yup';
import PrimaryButton from "./PrimaryButton";
import styled from 'styled-components';

function CreateForm() {
  
    
  const initialValues = {
          name: "",
          attribute1: "",
          attribute2: "",
          attribute3: "",
          attribute4: "",
          attribute5: "",

        };
  const validate = Yup.object({
      name: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
      attribute1: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
      attribute2: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
      attribute3: Yup.string()
      .min(2, "Message should have at least 2 characters.")
      .max(30, "Message should not exceed 30 characters.")
      .required("Required eee"),
      attribute4: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
      attribute5: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
     
  })
  
  
   
    return (
      <Formik
      initialValues={initialValues}
        validationSchema={validate}
        
        
      >
        {(formik,
        
       
        ) => (
          <div>
            <div className="my-4 font-weight-bold-display-4" className="contact-title"><h4>Create New Pokemon</h4></div>
            <Form className="Form"  >
            <div className="form-field">
              <TextField label="Enter Your Name*" name="name" type="text" className="input" />
              </div>
              <div className="form-field">
              <TextField label="Enter your attribute1" name="attribute1" type="text" className="input" />
              </div>
              <div className="form-field">
              <TextField label="Enter your attribute2" name="attribute2" type="text" className="input" />
              </div>
              <div className="form-field">
              <TextField label="Enter your attribute3" name="attribute3" type="text" className="input" />
              </div>
              <div className="form-field">
              <TextField label="Enter your attribute4" name="attribute4" type="text" className="input" />
              </div>
              <div className="form-field">
              <TextField label="Enter your attribute5" name="attribute5" type="text" className="input" />
              </div>
             
              <div className="but">
              <div className="form-field f-button">
            <PrimaryButton title="create" type="submit" formik={formik} />
            </div>
     
            <div className="form-field f-button">
            <ResetButton className="buttin"  type="reset" >Reset</ResetButton>
            </div>
            </div>
            
           
            
            </Form>
          </div>
        )}
      </Formik>
    );
  }
  
  
  const ResetButton = styled.button`
   background-color: var(--primary-color);
      padding: .8rem 2.5rem;
      color: white;
      cursor: pointer;
      display: inline-block;
      font-size: inherit;
      text-transform: uppercase;
      position: relative;
      transition: all .4s ease-in-out;
      &::after{
          content: "";
          position: absolute;
          width: 0;
          height: .2rem;
          transition: all .4s ease-in-out;
          left: 0;
          bottom: 0;
          opacity: .7;
      }
      &:hover::after{
          width: 100%;
          background-color: var(--white-color);
      }
  `;
  
  
  export default CreateForm;