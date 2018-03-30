import React from "react";
import styled, { css, keyframes } from "styled-components";
import { transparentize } from "polished";

const isLoading = ({ isLoading }) =>
  isLoading &&
  css`
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: ${props => props.theme.palette.greyLightest};
      z-index: 1;
    }
  `;

const StyledContactForm = styled.form`
  ${isLoading};

  position: relative;
  max-width: 60ch;
`;

//   @nest .has-error > & {
//     border-color: color(red shade(10));
//   }
// }

// .email-invalid {
//   display: none;

//   @nest .has-error > & {
//     display: block;
//     color: color(red shade(10));
//   }
// }

const FormGroup = styled.label`
  display: block;
  margin-top: 1rem;
`;

const FormLabelText = styled.span`
  display: block;
`;

const FormControl = styled.div`
  display: block;
  margin-top: 0.25rem;
`;

const FormInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${props => props.theme.palette.greyLighter};
  font-size: inherit;
  background-color: ${props => props.theme.palette.white};

  &:focus {
    border-color: ${props => props.theme.palette.purple};
    outline: none;
  }
`;

const FormTextarea = FormInput.withComponent("textarea").extend`
  height: 6em;
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const buttonIsLoading = ({ isLoading }) =>
  isLoading &&
  css`
    ${"" /* @apply --text-hide; */} position: relative;
    background-color: var(--cc-purple);

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 2em;
      height: 2em;
      margin-top: -1em;
      margin-left: -1em;
      border-color: ${props => transparentize(0.8, props.theme.palette.yellow)};
      border-left-color: ${props => props.theme.palette.yellow};
      border-width: 4px;
      border-style: solid;
      border-radius: 50%;
      animation: ${spin} 0.35s linear infinite;
      z-index: 2;
    }
  `;

const Button = styled.button`
  ${buttonIsLoading};
  display: block;
  width: 100%;
  margin-top: 1.5rem;
  padding: 1rem 0.5rem;
  font-size: inherit;
  background-color: ${props => props.theme.palette.purple};
  color: ${props => props.theme.palette.white};

  &:hover,
  &:focus {
    box-shadow: 0 0 2em 0 ${props => props.theme.palette.purple};
    background-color: ${props => props.theme.palette.purple};
    outline: none;
  }
`;

const Success = styled.div`
  padding: 1em;
  border: 2px solid green;
  background-color: #fff;
  color: green;

  &:focus {
    outline: none;
    box-shadow: 0 0 2em 0 green;
  }
`;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      submitted: false,
      error: false
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    this.setState({ loading: true });
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => this.setState({ submitted: true, loading: false }))
      .catch(error => this.setState({ error: true, loading: false }));

    e.preventDefault();
  };

  render() {
    return !this.state.submitted ? (
      <StyledContactForm
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
        isLoading={this.state.loading}
      >
        <label htmlFor="contactform-bot-field" hidden>
          Don’t fill this out:{" "}
          <input id="contactform-bot-field" name="bot-field" />
        </label>
        <FormGroup htmlFor="contactform-name">
          <FormLabelText>Your name:</FormLabelText>
          <FormControl>
            <FormInput
              id="contactform-name"
              type="text"
              name="name"
              onChange={this.handleChange}
            />
          </FormControl>
        </FormGroup>
        <FormGroup htmlFor="contactform-email">
          <FormLabelText>Your email:</FormLabelText>
          <FormInput
            id="contactform-email"
            type="email"
            name="email"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup htmlFor="contactform-message">
          <FormLabelText>Message:</FormLabelText>
          <FormTextarea
            id="contactform-message"
            name="message"
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button type="submit" isLoading={this.state.loading}>
          Send
        </Button>
      </StyledContactForm>
    ) : (
      <Success>Thanks!</Success>
    );
  }
}
