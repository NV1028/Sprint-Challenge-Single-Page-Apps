import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState, useEffect } from "react";


function LoginForm({ values, errors, touched, isSubmitting, handleChange, status }) {

  const [user, setUser] = useState([]);
  
    useEffect(() => {
        status && setUser(users => [...users, status]);
console.log(user);
    }, [status]);


  return (
    <Form>
         <div>
        {touched.name && errors.name && <p>{errors.name}</p>}
        <Field type="name" name="name" placeholder="Name" />
      </div>
    
      <button disabled={isSubmitting}>Submit</button>
      <div>
      {user.map(thing => (

        <div key={thing.id}>
          <div>{thing.results.name} </div>
        </div>
      ))}
    </div>
    </Form>
    
  );
}

const SearchFormik = withFormik({
  mapPropsToValues({ name, email, password, tos, meal }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      tos: tos || false,
      meal: meal || "silver"
    };
  },
  // validationSchema: Yup.object().shape({
  //   email: Yup.string()
  //     .email("Email not valid")
  //     .required("Email is required"),
  //   password: Yup.string()
  //     .min(16, "Password must be 16 characters or longer")
  //     .required("Password is required")
  // }),
  handleSubmit(values, { setStatus }) {
      axios
        .get("https://rickandmortyapi.com/api/character/", values)
        .then(res => {
          console.log(res); // Data was created successfully and logs to console
          setStatus(res.data); 
        })
        .catch(err => {
          console.log(err); // There was an error creating the data and logs to console
        //   setSubmitting(false);
        });
    
    
    
    
   // setUser({ ...user, email: res.data.value, password: res.data.password, meal: res.data.meal, TOS: res.data.TOS });
  }
})(LoginForm);

export default SearchFormik;
