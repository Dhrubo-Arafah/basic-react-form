import {useFormik } from 'formik'
import React from 'react'

const validate = values => {
  let errors = {}
  if (!values.name) errors.name = 'Required';
  if (!values.email) errors.email = 'Required';
  if (!values.channel) errors.channel = 'Required';
}

const initialValues = {
  name: '',
  email: '',
  channel: ''
  }

const onSubmit=values => {
  console.log('Values:', values)
}

const YoutubeForm = () => {
 const formik = useFormik({
  initialValues,
 onSubmit,
  validate,
 })

 return (
  <div>

   <form onSubmit={formik.handleSubmit}>

    <label htmlFor="name">Name</label>
    <input type="text"
     value={formik.values.name}
     name="name"
     onChange={formik.handleChange} />

    <label htmlFor="email">Email</label>
    <input type="email"
     value={formik.values.email}
     name="email"
     onChange={formik.handleChange} />

    <label htmlFor="channel">Channel</label>
    <input type="text"
     value={formik.values.channel}
     name="channel"
     onChange={formik.handleChange} /><br/>

    <button type="submit">Submit</button>

   </form>
  </div>
 )
}

export default YoutubeForm
