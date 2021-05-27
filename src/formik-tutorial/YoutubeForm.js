import { useFormik } from 'formik'
import React from 'react'

const YoutubeForm = () => {
 const formik = useFormik({
  initialValues: {
   name: '',
   email: '',
   channel: ''
  },
 onSubmit: values => {
  console.log('Values:', formik.values)
 }
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
