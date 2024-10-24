import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { Mail } from "lucide-react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // Tracks form status: 'idle', 'loading', 'error', 'success'
  const [error, setError] = useState(""); // Error message for invalid email
  const [showForm, setShowForm] = useState(true); // Controls visibility of the form

  // Your Mailchimp action URL
  const actionUrl =
    "https://gmail.us13.list-manage.com/subscribe/post?u=2d941a62f9354c066103f636f&id=b3b430c3e9&f_id=000f7de9f0";

  // Function to validate email
  const isValidEmail = (email) => {
    const regex =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    return regex.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setStatus("loading");

    // Check if email is valid
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      setStatus("error");
      return;
    }

    // Submit the form to Mailchimp
    const form = e.target;
    form.submit();

    // On successful submission
    setStatus("success");
    setEmail(""); // Clear the email input
    setShowForm(false); // Hide the form after successful submission
  };

  // Handle email input change
  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Validate email in real-time
    if (!isValidEmail(value)) {
      setError("Please enter a valid email address");
      setStatus("error");
    } else {
      setError(""); // Clear error message if email is valid
      setStatus("idle"); // Reset status
    }
  };

  return (
    <div>
      {/* Success Message */}
      {status === "success" && (
        <p className="text-green-600">Thank you for subscribing!</p>
      )}

      {/* Form */}
      {showForm && (
        <form
          action={actionUrl}
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          className="validate"
          onSubmit={handleSubmit}
        >
          <Input
            name="EMAIL"
            type="email"
            placeholder="Email address"
            required
            variant="underlined"
            value={email}
            onChange={handleChange} // Track email input and validate on change
            isInvalid={status === "error"} // Highlight the input when invalid
            color={
              status === "error"
                ? "error"
                : status === "success"
                ? "success"
                : "default"
            }
            description={status === "error" ? error : ""}
            classNames={{
              input: ["placeholder:text-base"],
              inputWrapper: ["border-b"],
            }}
            startContent={<Mail className="text-greyLogo" />}
            endContent={
              <button
                type="submit"
                className="w-[5rem] font-medium text-greyLogo link-hover"
                disabled={status === "loading"} // Disable button during loading
              >
                {status === "loading" ? "..." : "Sign Up"}
              </button>
            }
          />

          {/* Hidden anti-spam field */}
          <div
            aria-hidden="true"
            style={{ position: "absolute", left: "-5000px" }}
          >
            <input
              type="text"
              name="b_2d941a62f9354c066103f636f_b3b430c3e9"
              tabIndex="-1"
              defaultValue=""
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default NewsletterForm;
