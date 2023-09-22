import React, { useState } from "react";
import "./FormRegistration.css"; // Import your CSS file

const FormRegistration = () => {
  // Initialize form state
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Initialize validation state
  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate the form data here
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    // If there are no errors, you can submit the form data
    if (Object.keys(validationErrors).length === 0) {
      // Perform your registration logic here
      alert("Registration successful!");
    }
  };

  // Define a function to validate the form data
  const validateForm = (data) => {
    let errors = {};
    if (!data.username) {
      errors.username = "Username is required";
    }
    if (!data.email) {
      errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email format";
    }
    if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    return errors;
  };

  // Define a function to validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <section className="mainContainer">
      <div className="registration-form-container">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
            {errors.username && <p className="error">{errors.username}</p>}
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </section>
  );
};

export default FormRegistration;
