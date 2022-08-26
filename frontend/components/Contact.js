import React, { useState, useReducer } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
} from "@mui/material";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.value };
    case "email":
      return { ...state, email: action.value };
    case "message":
      return { ...state, message: action.value };
    default:
      throw new Error();
  }
};
const ContactForm = () => {
  const [formState, dispatch] = useReducer(reducer, initialState);
  const [showFormErr, setShowFormErr] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState({
    title: "",
    paragraph: "",
  });
  const [showCaptcha, setShowCaptcha] = useState(false);
  const { name, email, message } = formState;

  const submitFormAndShowCaptcha = (e) => {
    e.preventDefault();
    setShowCaptcha(true);
  };

  const sendEmail = (captchaValue) => {
    if (name === "" || email === "" || message === "") {
      setShowFormErr(true);
      return;
    }

    const params = {
      ...formState,
      "g-recaptcha-response": captchaValue,
    };

    setFormSubmitted({ title: "Sending message...", paragraph: "" });
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        params,
        process.env.NEXT_PUBLIC_EMAILJS_API
      )

      .then(
        ({ status }) => {
          if (status === 200) {
            setFormSubmitted({
              title: "Your Message has been delivered",
              paragraph: "Thank you! . We will be in contact with you soon.",
            });
          } else {
            setFormSubmitted({
              title:
                "Unexpected status code returned from EmailJS, try again later",
              paragraph: "Please contact Mike either by phone or email.",
            });
          }
        },
        (err) => {
          // eslint-disable-next-line no-console
          console.log(err);
          setFormSubmitted({
            title: "Error sending message, try again later",
            paragraph: "Alternateviley you can contact us by phone.",
          });
        }
      );
  };
  return formSubmitted.title === "" ? (
    <div>
      {!showCaptcha ? (
        <Grid>
          <Card
            style={{ maxWidth: 850, padding: "20px 5px", margin: "0 auto" }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5">
                Make an enquiry
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                gutterBottom
              >
                Fill up the form and our team will get back to you within 48
                hours.
              </Typography>
              <form onSubmit={submitFormAndShowCaptcha}>
                <Grid container spacing={1}>
                  <Grid xs={12} item>
                    <TextField
                      id="contact-form-name"
                      placeholder="Enter name"
                      label="Your Name"
                      variant="outlined"
                      value={name}
                      onChange={(e) =>
                        dispatch({ type: "name", value: e.target.value })
                      }
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="contact-form-email"
                      type="email"
                      placeholder="Enter email"
                      label="Email"
                      variant="outlined"
                      value={email}
                      onChange={(e) =>
                        dispatch({ type: "email", value: e.target.value })
                      }
                      fullWidth
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      id="contact-form-message"
                      label="Message"
                      multiline
                      rows={4}
                      placeholder="Type your message here"
                      variant="outlined"
                      value={message}
                      onChange={(e) =>
                        dispatch({ type: "message", value: e.target.value })
                      }
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>{" "}
            </CardContent>
          </Card>
        </Grid>
      ) : (
        <Grid>
          <Card
            style={{ maxWidth: 750, padding: "20px 5px", margin: "0 auto" }}
          >
            <CardContent>
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}
                onChange={sendEmail}
              />
            </CardContent>
          </Card>
        </Grid>
      )}
    </div>
  ) : (
    <div>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            {" "}
            <Typography>{formSubmitted.title}</Typography>
            <p>{formSubmitted.paragraph}</p>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};
export default ContactForm;
