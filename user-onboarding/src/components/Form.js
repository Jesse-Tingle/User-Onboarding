import React from 'react'; 
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const UserOnboard = ({errors, touched}) => {
  // console.log(errors)

  return (
    <Form>

      {touched.name && errors.name && <p className="error">{errors.name}</p>}
      <Field type="text" name="name" placeholder="Name"  />

      {touched.email && errors.email && <p className="error">{errors.email}</p>}
      <Field type="text" name="email" placeholder="Email" />

      {touched.password && errors.password && <p className="error">{errors.password}</p>}
      <Field type="text" name="password" placeholder="Password" />
      
      <label>
        {touched.terms && errors.terms && <p className="error">{errors.terms}</p>}
        <Field type="checkbox" name="terms" placeholder="Terms of Service" />
        <span>Terms of Service</span>
      </label>
      
      <button type="submit">Submit</button>
    </Form>
  )
}

export default withFormik({
  mapPropsToValues: (values) => {
    return {
      name: values.name || '',
      email: values.email || '',
      password: values.password || '',
      terms: values.terms || '',
    }
  },
  validationSchema: yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    terms: yup.boolean().oneOf([true])
  }),
  handleSubmit: (values) => {
    // console.log(values);
    axios.post('https://reqres.in/api/users', values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log('Error: ', err)
      })
  }
})(UserOnboard)