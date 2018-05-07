import React from 'react'
import { withFormik } from 'formik'
import Yup from 'yup'

import FormInput from './FormInput'
import FormText from './FormText'
import Submit from './Submit'
import SuccessMessage from './SuccessMessage'

const encodePayloadToBody = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

const postContactMessage = async payload => {
  const option = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encodePayloadToBody({ 'form-name': 'contact', ...payload }),
  }
  await fetch('/', option).catch(() => alert('Unexpected error has occurred'))
}

const Contact = ({
  values,
  touched,
  errors,
  isValid,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit,
  status,
}) => {
  return !status || !status.success ? (
    <form
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      method="post"
      name="contact"
      onSubmit={handleSubmit}
    >
      <FormInput
        label="Name"
        name="name"
        value={values.name}
        error={errors.name}
        touched={touched.name}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
      <FormInput
        label="Email"
        name="email"
        value={values.email}
        error={errors.email}
        touched={touched.email}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
      <FormText
        label="Message"
        name="message"
        value={values.message}
        error={errors.message}
        touched={touched.message}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
      <Submit isValid={isValid} isSubmitting={isSubmitting} />
    </form>
  ) : (
    <SuccessMessage id="contactFormSuccess" tabIndex={-1}>
      Thanks for your enquiry, we&apos;ll be in touch!
    </SuccessMessage>
  )
}

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    message: '',
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    message: Yup.string().required('Message is required'),
  }),
  handleSubmit: async (values, { setSubmitting, setStatus }) => {
    await postContactMessage(values)
    setSubmitting(false)
    setStatus({ success: true })
    document.getElementById('contactFormSuccess').focus()
  },
})(Contact)
