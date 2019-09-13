import React from 'react';

import { withFormik, Form, Field } from 'formik'

const UserOnboard = (props) => {
//   console.log(props)

  return (
    <Form>
      <Field type="text" name="name" placeholder="Name"  />
      <Field type="text" name="email" placeholder="Email" />
      <Field type="text" name="password" placeholder="Password" />
      <Field type="checkbox" name="terms" placeholder="Terms of Service" />
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
  handleSubmit: (values) => {
    console.log(values);
  }
})(UserOnboard)