import { useState } from "react";
import { decode } from "html-entities";
import { Button, Box, Typography } from "@mui/material";

const NewsletterForm = ({ status, message, onValidated }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = (event) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode(formattedMessage) : null;
  };

  return (
    <>
      <Typography textAlign="center">
        Join our newsletter for latest updates
      </Typography>
      <Box
        display="flex"
        justifyContent="flex-ends"
        alignItems="center"
        sx={{ color: "white" }}
      >
        <input
          onChange={(event) => setEmail(event?.target?.value ?? "")}
          type="email"
          placeholder="Your email"
          className="mr-2"
          onKeyUp={(event) => handleInputKeyEvent(event)}
          sx={{ borderRadius: 0 }}
        />
        <p>
          <Button
            variant="contained"
            disableElevation
            onClick={handleFormSubmit}
            sx={{
              width: 100,
              height: 40,
              color: "black",
              backgroundColor: "#cdf185",
              borderRadius: 0,
              "&:hover": {
                color: "white",
                backgroundColor: "#483ad1",
              },
            }}
          >
            Join
          </Button>
        </p>
      </Box>

      <div className="newsletter-form-info">
        {status === "sending" && <div>Sending...</div>}
        {status === "error" || error ? (
          <div
            className="newsletter-form-error"
            dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
          />
        ) : null}
        {status === "success" && status !== "error" && !error && (
          <div dangerouslySetInnerHTML={{ __html: decode(message) }} />
        )}
      </div>
    </>
  );
};

export default NewsletterForm;
