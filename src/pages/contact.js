import React from 'react'
import styled from 'styled-components'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      submitted: false,
      error: false,
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    this.setState({ loading: true })
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => this.setState({ submitted: true, loading: false }))
      .catch(error => this.setState({ error: true, loading: false }))

    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h1>Contact</h1>
        {!this.state.submitted ? (
          <form
            name="contact"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            <label hidden>
              Don’t fill this out: <input name="bot-field" />
            </label>
            <label>
              Your name:
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
            <label>
              Your email:
              <input type="email" name="email" onChange={this.handleChange} />
            </label>
            <label>
              Message:
              <textarea name="message" onChange={this.handleChange} />
            </label>
            <button type="submit">Send</button>
          </form>
        ) : (
          <div>Thanks!</div>
        )}
      </div>
    )
  }
}
