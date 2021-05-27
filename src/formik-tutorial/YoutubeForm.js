import { useFormik } from 'formik'
import React from 'react'

const validate = values => {
  let errors = {}
  if (!values.name) errors.name = 'Required';
  if (!values.email) errors.email = 'Required';
  if (!values.channel) errors.channel = 'Required';
  return errors;
}

const initialValues = {
  name: '',
  email: '',
  channel: ''
}

const onSubmit = values => {
  console.log('Values:', values)
}

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  })

  // console.log("Form Values ", formik.values);
  // console.log("Form Error ", formik.errors);
  console.log("Form Visited ", formik.touched);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text"
            value={formik.values.name}
            name="name"
            onChange={formik.handleChange}
            onBlur={ formik.handleBlur}/>
          {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
        </div>
        <br />
        <div>
          <label htmlFor="email">Email</label>
          <input type="email"
            value={formik.values.email}
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
          {formik.touched.email && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
        </div>
        <br />
        <div>
          <label htmlFor="channel">Channel</label>
          <input type="text"
            value={formik.values.channel}
            name="channel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
          {formik.touched.channel && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default YoutubeForm
